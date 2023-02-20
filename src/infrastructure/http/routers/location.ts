import { EntityManager } from '@mikro-orm/postgresql';
import { locationServices } from '../../../services/location.service';
import { initDb } from '../../db/initDb';
import { LocationRepo } from '../../db/repositories/Location';
import asyncHandler from 'express-async-handler';
import express, { Request, Response } from 'express';
import config from '../../../../config';

function locationRoutes(db: EntityManager) {
  const router = express.Router();
  const locationUseCases = locationServices(new LocationRepo(db));

  router.post(
    '/',
    asyncHandler(async (req: Request, res: Response) => {
      await locationUseCases.addLocation(req.body);
      res.status(200).send({
        message: 'Create new Location successfully',
      });
    })
  );

  router.get(
    '/',
    asyncHandler(async (req: Request, res: Response) => {
      const locations = await locationUseCases.getLocations();
      res.status(200).send({
        message: 'success',
        data: locations,
      });
    })
  );
  router.get(
    '/sorted',
    asyncHandler(async (req: Request, res: Response) => {
      const OSRM_URL = config.osrmUrl;
      // let algorithm = req.query.algorithm ?? '';
      const locations = await locationUseCases.getSortedLocations(
        OSRM_URL
        // algorithm
      );
      res.status(200).send({
        message: 'success',
        data: locations,
      });
    })
  );
  router.delete(
    '/',
    asyncHandler(async (req: Request, res: Response) => {
      await locationUseCases.deleteAllLocations();
      res.status(200).send({
        message: 'delete all location successfully',
      });
    })
  );

  router.delete(
    '/:id',
    asyncHandler(async (req: Request, res: Response) => {
      const id = req.params.id;
      await locationUseCases.deleteLocation(id);
      res.status(200).send({
        message: 'delete all location successfully',
      });
    })
  );
  router.patch(
    '/:id',
    asyncHandler(async (req: Request, res: Response) => {
      const id = req.params.id;
      await locationUseCases.updateLocation(id, req.body);
      res.status(200).send({
        message: 'delete all location successfully',
      });
    })
  );
  return router;
}
export { locationRoutes };

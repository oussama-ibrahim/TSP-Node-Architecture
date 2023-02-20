import { EntityManager } from '@mikro-orm/postgresql';
import { locationServices } from '../../../services/location.service';
import { initDb } from '../../db/initDb';
import { LocationRepo } from '../../db/repositories/Location';
import asyncHandler from 'express-async-handler';
import express, { Request, Response } from 'express';
const router = express.Router();

const locationUseCases = locationServices(
  new LocationRepo(initDb() as unknown as EntityManager)
);


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
      await locationUseCases.addLocation(req.body);
      res.status(200).send({
        message: 'Create new Location successfully',
      });
    })
  );
// router.get('/', getLocations);
// router.get('/sorted', getSortedLocations);
// router.delete('/', deleteAllLocations);
// router.delete('/:id', deleteLocation);
// router.patch('/:id', updateLocation);

export default router;

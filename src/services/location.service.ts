import axios from 'axios';
import { arrayToString, waypointsToLngLnt } from '../utils/arrayModifier';
import { TSP } from '../utils/TSPAlgorithm';
import { IWaypoint, TRawLocation } from '../entities/location';
import { Db } from '../entities/data/dbImpl';

function locationServices(LocationRepo: Db) {
  const getSortedLocations = async (OSRM_URL: string, algorithm?: string) => {
    const locations = await LocationRepo.find();
    let customResponse = {};

    if (algorithm === 'OSRM' && locations.length > 1) {
      const coordinates = arrayToString(locations);
      const response = await axios.get(`${OSRM_URL}/${coordinates}`);
      customResponse = waypointsToLngLnt(
        response?.data?.waypoints as IWaypoint[]
      );
    } else {
      customResponse = TSP(locations);
    }

    return customResponse;
  };

  const addLocation = async (obj: TRawLocation) => {
    await LocationRepo.insertOne(obj);
  };

  const deleteAllLocations = async () => {
    await LocationRepo.deleteAll();
  };

  const deleteLocation = async (id: string) => {
    await LocationRepo.deleteOne({ id });
  };

  const updateLocation = async (id: string, obj: TRawLocation) => {
    await LocationRepo.updateOne({ id }, obj);
  };

  const getLocations = async () => {
    const locations = await LocationRepo.find();
    return locations;
  };

  return {
    addLocation,
    updateLocation,
    deleteLocation,
    getLocations,
    getSortedLocations,
    deleteAllLocations,
  };
}

export { locationServices };

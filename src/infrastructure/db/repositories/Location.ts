import { EntityManager } from '@mikro-orm/postgresql';
import { Db } from '../../../entities/data/dbImpl';
import { TRawLocation } from '../../../entities/location';
import { Location } from '../entities/Location';

export class LocationRepo implements Db {
  readonly orm: EntityManager;

  public async insertOne(data: TRawLocation): Promise<void> {
    const location = new Location(data.lng, data.lat);
    await this.orm.fork().persistAndFlush(location);
  }

  public async updateOne(query: object, data: TRawLocation): Promise<void> {
    const location = await this.orm.findOne(Location, query);
    data.lng && location?.lng != data.lng;
    data.lat && location?.lat != data.lat;
    await this.orm.fork().flush();
  }

  public async deleteOne(query: object): Promise<void> {
    const location = await this.orm.findOne(Location, query);
    location && (await this.orm.fork().removeAndFlush(location));
  }
  public async deleteAll(): Promise<void> {
    await this.orm.getRepository(Location).nativeDelete({});
  }

  async findOne(query: object): Promise<Location | null> {
    const location = await this.orm.fork().findOne(Location, query);
    return location;
  }

  async find(query: object): Promise<Location[]> {
    const locations = await this.orm.fork().find(Location, query);
    return locations;
  }
  constructor(orm: EntityManager) {
    this.orm = orm;
  }
}

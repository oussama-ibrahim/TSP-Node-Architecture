import { EntityRepository, MikroORM } from '@mikro-orm/core';
import { IDbImpl } from '../../../entities/data/dbImpl';
import { Location } from '../entities/Location';


export class UserRepository extends EntityRepository<Location> implements IDbImpl{
  async insertOne(data:Location): Promise<Location> {
    const user = this.create(data);
    await this.persistAndFlush(user);
    return user;
  }

   updateOne(id: string, data: Partial<Location>):void {
    // const user = await this.findOneOrFail(id);
    // this.assign(user, data);
    // await this.persistAndFlush(user);

  }

  async deleteOne(id: string): Promise<void> {
    const user = await this.findOneOrFail(id);
    await this.removeAndFlush(user);
  }
  async deleteAll(): Promise<void> {
    // const user = await this.findOneOrFail(id);
    // await this.removeAndFlush(user);
  }

  // async findOne(id: string): Promise<Location> {
  //   return this.findOneOrFail(id);
  // }

  async find(): Promise<Location[]> {
    return this.findAll();
  }
}

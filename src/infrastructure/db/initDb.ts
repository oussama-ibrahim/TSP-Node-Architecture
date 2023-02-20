import 'reflect-metadata';
import { MikroORM } from '@mikro-orm/core';
import type { PostgreSqlDriver } from '@mikro-orm/postgresql';
import { Location } from './entities/Location';
import Config from '../../config';


export const initDb = async () => {
  try {
    const orm = await MikroORM.init<PostgreSqlDriver>({
      entities: [Location],
      type: 'postgresql',
      host: Config.DB_HOST,
      port: Config.DB_PORT,
      user: Config.DB_USER,
      password: Config.DB_PASSWORD,
      dbName: Config.DB_NAME,
    });

    return orm.em;
  } catch (err) {
    console.log(err);
  }
};

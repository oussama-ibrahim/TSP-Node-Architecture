import 'reflect-metadata';
import { MikroORM } from '@mikro-orm/core';
import type { PostgreSqlDriver } from '@mikro-orm/postgresql';
import { Location } from './entities/Location';
import config from '../../../config';

export const initDb = async () => {
  try {
    const { port, host, user, password, name } = config.db;

    const orm = await MikroORM.init<PostgreSqlDriver>({
      entities: [Location],
      type: 'postgresql',
      host,
      port,
      user,
      password,
      dbName: name,
    });
    const schemaGenerator = orm.getSchemaGenerator();
    await schemaGenerator.ensureDatabase();
  
  
    return orm.em;
  } catch (err) {
    console.log(err);
  }
};

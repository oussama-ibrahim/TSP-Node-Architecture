const { PORT, OSRM_URL, DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } =
  process.env;

export default {
  PORT: PORT ? parseInt(PORT, 10) : 8080,
  OSRM_URL: OSRM_URL ?? 'http://router.project-osrm.org',
  DB_HOST: DB_HOST ?? 'host.docker.internal',
  DB_PORT: DB_PORT ? parseInt(DB_PORT, 10) : 55000,
  DB_USER: DB_USER ?? 'postgres',
  DB_PASSWORD: DB_PASSWORD ?? 'postgrespw',
  DB_NAME: DB_NAME ?? 'TSP',
};

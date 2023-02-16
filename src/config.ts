const {
    PORT,
    OSRM_URL,
  } = process.env;
  
  export default {
    PORT: PORT ? parseInt(PORT, 10) : 3000,
    OSRM_URL: OSRM_URL ?? "http://router.project-osrm.org",
  };
  
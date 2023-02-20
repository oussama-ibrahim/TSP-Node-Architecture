import express from "express";
import cors from "cors";
import bp from "body-parser";
import locationRoutes from './routers/location'

function server(port: number) {
  const app = express();
  app.use(cors({origin:'*'}));
  app.use(bp.json());
  app.use(bp.urlencoded({ extended: true }));
  app.use('/api/v1/locations',locationRoutes)
  app.listen(port, () => console.log(`Server is listening on port ${port}`));
}

export { server };

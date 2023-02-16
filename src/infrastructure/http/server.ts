import express from "express";
import cors from "cors";
import bp from "body-parser";

function server(port: number) {
  const app = express();
  app.use(cors({origin:'*'}));
  app.use(bp.json());
  app.use(bp.urlencoded({ extended: true }));

  app.listen(port, () => console.log(`Server is listening on port ${port}`));
}

export { server };

// @flow

import bodyParser from "body-parser";
import express from "express";
import type {$Application} from "express";

import authorsRouter from "./routers/authors/authorsRouter";
import publicationsRouter from "./routers/publications/publicationsRouter";
import dependenciesMiddleware from "./middlewares/dependenciesMiddleware";
import serverConfig from "../config/server/index";

const application: $Application = express();

application.use(
  bodyParser.urlencoded({
    extended: false
  })
);
application.use(bodyParser.json());
application.use(dependenciesMiddleware);

application.use("/authors", authorsRouter);
application.use("/publications", publicationsRouter);

const port: number = serverConfig.port;

application.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

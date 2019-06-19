// @flow
import bodyParser from "body-parser";
import express from "express";
import type { $Application } from "express";

import publicationsRouter from "./routers/publications/publicationsRouter";

const application: $Application = express();

application.use(
  bodyParser.urlencoded({
    extended: false
  })
);
application.use(bodyParser.json());

application.use("/pubications", publicationsRouter);
application.use("/authors", authorsRouter);

const port: number = process.env.PORT;

application.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

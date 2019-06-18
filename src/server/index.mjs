// @flow
import express from "express";

const application = express();
const port = process.env.PORT;

application.get("/", (request, response) => response.send("Hello World!"));

application.listen(port, () =>
  console.log(`Example app listening on port ${port}!`)
);

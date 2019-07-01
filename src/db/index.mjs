// @flow

import knex from "knex";

import dbConfig from "../config/db/index";

export default knex({client: "pg", connection: dbConfig});

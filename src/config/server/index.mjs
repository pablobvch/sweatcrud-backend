// @flow

import dotenv from "dotenv";
dotenv.config();

type TServerConfig = {|
  port: number
|};

const serverConfig: TServerConfig = {
  port: parseInt(process.env.PORT)
};

export default serverConfig;

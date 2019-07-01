// @flow

type TServerConfig = {|
  port: number
|};

const serverConfig: TServerConfig = {
  port: process.env.PORT
};

export default serverConfig;

//@flow

import jsonWebToken from "jsonwebtoken";

const getUserIdFromToken = (token: string) =>
  jsonWebToken.verify(token.split(" ")[1], process.env.SERVER_SECRET_WORD).sub
    .iUser;

export default getUserIdFromToken;

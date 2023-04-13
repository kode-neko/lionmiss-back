import { fixtureUsersInfo } from "./fixtureUsersInfo.js";
import { LMUser } from "lionmiss-core";
import { faker } from "@faker-js/faker";

const {database, internet} = faker;

// pass - w4aKcN
const fixtureUser: LMUser = {
  _id: database.mongodbObjectId(),
  username: internet.userName(),
  pass: '$2b$12$OpBFL509uHcSg8gPaCuNqOBxacVTA51.MOGmS3x3KowFZNZNtrSvW',
  salt: '$2b$12$OpBFL509uHcSg8gPaCuNqO',
  userInfo: fixtureUsersInfo[0],
};

export { fixtureUser };

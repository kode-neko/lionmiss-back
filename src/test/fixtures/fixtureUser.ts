import {fixtureUsersInfo} from "./fixtureUsersInfo";
import {LMUser} from "lionmiss-core";
import {faker} from "@faker-js/faker";

const {database} = faker;

// pass - test
const fixtureUser: LMUser = {
  _id: database.mongodbObjectId(),
  username: "test",
  pass: "$2b$12$OpBFL509uHcSg8gPaCuNqOBxacVTA51.MOGmS3x3KowFZNZNtrSvW",
  salt: "$2b$12$OpBFL509uHcSg8gPaCuNqO",
  userInfo: fixtureUsersInfo[0],
};

export {fixtureUser};

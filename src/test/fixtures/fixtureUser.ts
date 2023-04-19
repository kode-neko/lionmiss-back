import {fixtureUsersInfo} from "./fixtureUsersInfo";
import {LMUser} from "lionmiss-core";
import {faker} from "@faker-js/faker";

const {database} = faker;

// pass - test
const fixtureUser: LMUser = {
  _id: database.mongodbObjectId(),
  username: "test",
  pass: "$2b$10$IMF7ZerWQFJwCddWgNs4beKBRBY5U5VDVNvpF.aTRbRpQGowCS4Su",
  userInfo: fixtureUsersInfo[0],
};

export {fixtureUser};

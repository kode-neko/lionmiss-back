import graphql from "./graphql";
import apiRest from "./rest";

function init() {
  apiRest();
  graphql();
}

init();
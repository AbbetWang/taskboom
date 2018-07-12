/********
  Written By AlfieriChou
  Alter By favorlm
*********/
import _ from "lodash";
import development from "./config.default";
import production from "./config.prod";

const env = process.env.NODE_ENV || "development";
const configs = {
  development: development,
  production: production
};
const defaultConfig = {
  env: env
};
const config = _.merge(defaultConfig, configs[env]);
const firstSecret = "a093d64d01";
const lastSecret = "a093d64d01";
const knex = require("knex")(config.knexConfig);

export = {
  config,
  firstSecret,
  lastSecret,
  knex
};
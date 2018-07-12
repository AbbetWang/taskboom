/********
  Written By AlfieriChou
  Alter By favorlm
*********/
import { knex }  from "../config";
import { user } from "../model/user";
import { createWriteStream } from "fs";
const index = async (ctx) => {
  const sql = knex("users").where("Id", 1);
  const data = await sql;
  console.log(data + "e");
  ctx.body = {
    message: "Hello World!!!" + data.Id + data.Name + " ",
    data: data
  };
};
const create = async (ctx) => {
  ctx.body = {
    message: "Hello World!!!"
  };
};
const show = async (ctx) => {
  ctx.body = {
    message: "Hello World!!!"
  };
};
const update = async (ctx) => {
  ctx.body = {
    message: "Hello World!!!"
  };
};
const destroy = async (ctx) => {
  ctx.body = {
    message: "Hello World!!!"
  };
};
export {
  index,
  create,
  show,
  update,
  destroy
};
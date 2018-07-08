import KoaRouter from "koa-router";
import * as userController from "../controller/user";
const api = KoaRouter();

api.get("/users", userController.index);
api.post("/users", userController.create);
api.get("/users/:id", userController.show);
api.put("/users/:id", userController.update);
api.delete("/uesrs/:id", userController.destroy);
export default api;
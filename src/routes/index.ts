import KoaRouter from 'koa-router'
import * as userController from '../controller/user'
const api = KoaRouter()

api.get('/users', userController.index)
api.get('/users/:id', userController.show)

export default api
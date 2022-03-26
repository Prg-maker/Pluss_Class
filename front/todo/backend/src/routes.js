import {Router} from 'express'

import {CreateTaskController} from './controllers/POST/CreateTaskController'
import {GetTaskController} from './controllers/GET/GetTaskController'



const routes = Router()


routes.get('/' , new GetTaskController().handle)

routes.post('/create' , new CreateTaskController().handle)


export {
  routes
}
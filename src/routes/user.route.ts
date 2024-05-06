/* eslint @typescript-eslint/no-unsafe-argument: 0 */ // --> OFF

import express, { type Router } from 'express'
import UserRestController from '../controller/user/user.controller.rest'
import { restAuthenticate } from '../middlewares/auth.middleware'
export const createUserRoute = (): Router => {
  const router = express.Router()

  const userController = new UserRestController()

  router.get('/me', restAuthenticate, userController.me.bind(userController))
  router.get('/:id', userController.getUser.bind(userController))
  router.get('/', userController.getListUsers.bind(userController))
  router.post('/', userController.createCustomerUser.bind(userController))
  router.post('/register', userController.registerCustomerUser.bind(userController))

  return router
}

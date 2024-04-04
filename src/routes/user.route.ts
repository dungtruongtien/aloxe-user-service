/* eslint "@typescript-eslint/no-misused-promises": 0 */ // --> OFF
/* eslint @typescript-eslint/unbound-method: 0 */ // --> OFF
/* eslint @typescript-eslint/no-unsafe-argument: 0 */ // --> OFF

import express from 'express'
import UserRestController from '../controller/user.controller.rest'
const router = express.Router()

const userController = new UserRestController()

router.get('/:id', userController.getUser.bind(userController))
router.get('/', userController.getListUsers.bind(userController))
router.post('/', userController.createCustomerUser.bind(userController))

export default router

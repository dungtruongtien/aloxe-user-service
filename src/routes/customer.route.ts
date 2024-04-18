/* eslint "@typescript-eslint/no-misused-promises": 0 */ // --> OFF
/* eslint @typescript-eslint/unbound-method: 0 */ // --> OFF
/* eslint @typescript-eslint/no-unsafe-argument: 0 */ // --> OFF

import express from 'express'
import CustomerRestController from '../controller/customer/customer.controller.rest'
const router = express.Router()

const customerController = new CustomerRestController()

router.get('/', customerController.getListCustomers.bind(customerController))

export default router

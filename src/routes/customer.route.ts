/* eslint @typescript-eslint/no-unsafe-argument: 0 */ // --> OFF
import express, { type Router } from 'express'
import CustomerRestController from '../controller/customer/customer.controller.rest'

export const createCustomerRoute = (): Router => {
  const router = express.Router()

  const customerController = new CustomerRestController()

  router.get('/', customerController.getListCustomers.bind(customerController))

  return router
}

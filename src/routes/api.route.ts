import express, { type Router } from 'express'
import { createUserRoute } from './user.route'
import { createStaffRoute } from './staff.route'
import { createDriverRoute } from './driver.route'
import { createCustomerRoute } from './customer.route'

export const createRootRoute = (): Router => {
  const router = express.Router()

  router.use('/users', createUserRoute())
  router.use('/drivers', createDriverRoute())
  router.use('/customers', createCustomerRoute())
  router.use('/staffs', createStaffRoute())
  return router
}

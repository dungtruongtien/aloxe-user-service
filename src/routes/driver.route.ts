/* eslint @typescript-eslint/no-unsafe-argument: 0 */ // --> OFF

import express, { type Router } from 'express'
import DriverRestController from '../controller/driver/driver.controller.rest'
import { restAuthenticate } from '../middlewares/auth.middleware'

export const createDriverRoute = (): Router => {
  const router = express.Router()
  const driverController = new DriverRestController()

  router.get('/', driverController.getListDrivers.bind(driverController))
  router.put('/online-session', driverController.updateDriverOnlineSession.bind(driverController))
  router.get('/available-drivers', driverController.getAvailableDrivers.bind(driverController))
  router.put('/online', restAuthenticate, driverController.handleDriverOnline.bind(driverController))

  return router
}

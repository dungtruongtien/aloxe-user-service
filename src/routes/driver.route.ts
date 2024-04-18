/* eslint @typescript-eslint/no-unsafe-argument: 0 */ // --> OFF

import express, { type Router } from 'express'
import DriverRestController from '../controller/driver/driver.controller.rest'

export const createDriverRoute = (): Router => {
  const router = express.Router()
  const driverController = new DriverRestController()

  router.get('/', driverController.getListDrivers.bind(driverController))
  router.put('/online-session', driverController.updateDriverOnlineSession.bind(driverController))
  router.get('/available-drivers', driverController.getAvailableDrivers.bind(driverController))

  return router
}

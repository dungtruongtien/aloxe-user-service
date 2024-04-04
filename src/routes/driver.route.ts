/* eslint "@typescript-eslint/no-misused-promises": 0 */ // --> OFF
/* eslint @typescript-eslint/unbound-method: 0 */ // --> OFF
/* eslint @typescript-eslint/no-unsafe-argument: 0 */ // --> OFF

import express from 'express'
import DriverRestController from '../controller/driver.controller.rest'
const router = express.Router()

const driverController = new DriverRestController()

router.get('/', driverController.getListDrivers.bind(driverController))
router.put('/online-session', driverController.updateDriverOnlineSession.bind(driverController))
router.get('/available-drivers', driverController.getAvailableDrivers.bind(driverController))

export default router

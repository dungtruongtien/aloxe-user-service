import express from 'express'

import userRouterHandler from './user.route'
import staffRouterHandler from './staff.route'
import driverRouterHandler from './driver.route'
import customerRouterHandler from './customer.route'

const router = express.Router()

router.use('/users', userRouterHandler)
router.use('/drivers', driverRouterHandler)
router.use('/customers', customerRouterHandler)
router.use('/staffs', staffRouterHandler)

export default router

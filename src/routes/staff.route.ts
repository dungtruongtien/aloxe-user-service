/* eslint "@typescript-eslint/no-misused-promises": 0 */ // --> OFF
/* eslint @typescript-eslint/unbound-method: 0 */ // --> OFF
/* eslint @typescript-eslint/no-unsafe-argument: 0 */ // --> OFF

import express from 'express'
import StaffRestController from '../controller/staff.controller.rest'
const router = express.Router()

const staffController = new StaffRestController()

router.get('/', staffController.getListStaffs.bind(staffController))

export default router

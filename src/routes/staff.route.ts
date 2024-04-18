/* eslint @typescript-eslint/no-unsafe-argument: 0 */ // --> OFF
import express, { type Router } from 'express'
import StaffRestController from '../controller/staff/staff.controller.rest'

export const createStaffRoute = (): Router => {
  const router = express.Router()

  const staffController = new StaffRestController()

  router.get('/', staffController.getListStaffs.bind(staffController))
  return router
}

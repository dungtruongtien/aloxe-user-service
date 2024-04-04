import { type DriverOnlineSession, type Customer, type Driver, type Staff, type User } from '@prisma/client'
import { type NextFunction, type Request, type Response } from 'express'
import { type ICreateCustomerUserInput } from '../services/dto/user.dto'

export interface IUserGraphController {
  getUser: (id: number) => Promise<User | null>
  me: (id: number) => Promise<User | null>
  getUsers: () => Promise<User[]>
  createCustomerUser: (input: ICreateCustomerUserInput) => Promise<User>
}

export interface IUserRestController {
  getUser: (req: Request, res: Response, next: NextFunction) => any
  me: (req: Request, res: Response, next: NextFunction) => any
  getListUsers: (req: Request, res: Response, next: NextFunction) => Promise<User[]>
}

export interface IStaffRestController {
  getListStaffs: (req: Request, res: Response, next: NextFunction) => Promise<Staff[]>
}

export interface IDriverRestController {
  getListDrivers: (req: Request, res: Response, next: NextFunction) => Promise<Driver[]>
  updateDriverOnlineSession: (req: Request, res: Response, next: NextFunction) => Promise<DriverOnlineSession>
  getAvailableDrivers: (req: Request, res: Response, next: NextFunction) => Promise<Driver[]>

}

export interface ICustomerRestController {
  getListCustomers: (req: Request, res: Response, next: NextFunction) => Promise<Customer[]>
}

import { type Customer } from '@prisma/client'
import { type NextFunction, type Request, type Response } from 'express'

export interface ICustomerRestController {
  getListCustomers: (req: Request, res: Response, next: NextFunction) => Promise<Customer[]>
  getCustomer: (req: Request, res: Response, next: NextFunction) => Promise<any>
}

import { type User } from '@prisma/client'
import { type ICreateCustomerUserInput } from '../dto/user.dto'
import { type Request, type Response, type NextFunction } from 'express'

export interface IUserGraphController {
  getUser: (id: number) => Promise<User | null>
  me: (id: number) => Promise<User | null>
  getUsers: () => Promise<User[]>
  createCustomerUser: (input: ICreateCustomerUserInput) => Promise<User>
}

export interface IUserRestController {
  getUser: (req: Request, res: Response, next: NextFunction) => any
  me: (req: Request, res: Response, next: NextFunction) => any
  getListUsers: (req: Request, res: Response, next: NextFunction) => any
  registerCustomerUser: (req: Request, res: Response, next: NextFunction) => any
}

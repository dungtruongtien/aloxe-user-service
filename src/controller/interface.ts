import { type User } from '@prisma/client'
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
  getUsers: () => Promise<User[]>
}

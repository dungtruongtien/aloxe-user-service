import { type User } from '@prisma/client'
import { UserRepository } from '../repository/user.repository'
import { type IUserService } from '../services/interface'
import { UserService } from '../services/user.service'
import { type IUserRestController } from './interface'
import { type NextFunction, type Request, type Response } from 'express'

export default class UserRestController implements IUserRestController {
  private readonly userService: IUserService
  private readonly userRepository = new UserRepository()
  constructor () {
    this.userService = new UserService(this.userRepository)
  }

  async getUsers (): Promise<User[]> {
    return await this.userService.getUsers()
  }

  async getUser (req: Request, res: Response, next: NextFunction): Promise<any> {
    const user = await this.userService.getUser(parseInt(req.params.id))
    res.status(201).json({
      status: 'SUCCESS',
      data: user
    })
  }

  async me (req: Request, res: Response, next: NextFunction): Promise<any> {
    const user = await this.userService.getUser(res.locals.user.id as number)
    res.status(201).json({
      status: 'SUCCESS',
      data: user
    })
  }
}

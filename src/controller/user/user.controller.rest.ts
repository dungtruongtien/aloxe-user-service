import { UserRepository } from '../../repository/user/user.repository'
import { UserService } from '../../services/user/user.service'
import { type NextFunction, type Request, type Response } from 'express'
import { UserAccountRepository } from '../../repository/user_account/user_account.repository'
import { HttpStatusCode } from 'axios'
import { type IGetUsersFilter } from '../../repository/user/user.interface'
import { type ICreateCustomerUserInput } from '../dto/user.dto'
import { type IUserRestController } from './user.interface'
import { type IUserService } from '../../services/user/user.interface'
import { type IRegisterCustomerUserInput } from '../../services/user/user.dto'

export default class UserRestController implements IUserRestController {
  private readonly userService: IUserService
  private readonly userRepository = new UserRepository()
  private readonly userAccountRepository = new UserAccountRepository()
  constructor () {
    this.userService = new UserService(this.userRepository, this.userAccountRepository)
  }

  async getListUsers (req: Request, res: Response, next: NextFunction): Promise<any> {
    const filter = req.query.filter
    const data = await this.userService.getListUsers(filter as unknown as IGetUsersFilter)
    res.status(HttpStatusCode.Ok).json({
      status: 'SUCCESS',
      data
    })
  }

  async getUser (req: Request, res: Response, next: NextFunction): Promise<any> {
    const user = await this.userService.getUser(parseInt(req.params.id))
    res.status(HttpStatusCode.Ok).json({
      status: 'SUCCESS',
      data: user
    })
  }

  async me (req: Request, res: Response, next: NextFunction): Promise<any> {
    const user = await this.userService.getUser(res.locals.session.user.id as number)
    res.status(HttpStatusCode.Ok).json({
      status: 'SUCCESS',
      data: user
    })
  }

  async createCustomerUser (req: Request, res: Response, next: NextFunction): Promise<any> {
    try {
      const user = await this.userService.createCustomerUser(req.body as ICreateCustomerUserInput)
      res.status(HttpStatusCode.Ok).json({
        status: 'SUCCESS',
        data: user
      })
    } catch (error) {
      next(error)
    }
  }

  async registerCustomerUser (req: Request, res: Response, next: NextFunction): Promise<any> {
    try {
      const user = await this.userService.registerCustomerUser(req.body as IRegisterCustomerUserInput)
      res.status(HttpStatusCode.Ok).json({
        status: 'SUCCESS',
        data: user
      })
    } catch (error) {
      next(error)
    }
  }
}

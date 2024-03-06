import { type User } from '@prisma/client'
import { UserRepository } from '../repository/user.repository'
import { type IUserService } from '../services/interface'
import { UserService } from '../services/user.service'
import { type IUserGraphController } from './interface'

export default class UserGraphController implements IUserGraphController {
  private readonly userService: IUserService
  private readonly userRepository = new UserRepository()
  constructor () {
    this.userService = new UserService(this.userRepository)
  }

  async getUsers (): Promise<User[]> {
    return await this.userService.getUsers()
  }

  async getUser (id: number): Promise<User | null> {
    return await this.userService.getUser(id)
  }

  async me (id: number): Promise<User | null> {
    return await this.userService.getUser(id)
  }
}

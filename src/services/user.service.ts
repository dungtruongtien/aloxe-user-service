import { type User } from '@prisma/client'
import { type IUserService } from './interface'
import { type IUserRepo } from '../repository/interface'

export class UserService implements IUserService {
  private readonly userRepo: IUserRepo
  constructor (userRepo: IUserRepo) {
    this.userRepo = userRepo
  }

  async getUsers (): Promise<User[]> {
    return await this.userRepo.getUsers()
  }

  async getUser (id: number): Promise<User | null> {
    return await this.userRepo.getUser(id)
  }

  async me (id: number): Promise<User | null> {
    return await this.userRepo.getUser(id)
  }
}

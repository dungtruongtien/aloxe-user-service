import { INTERNAL_TOKEN } from '../../common/constant'
import axios from 'axios'
import { type ICreateUserAccountInput, type IUserAccountRepo } from './user_account.interface'

export class UserAccountRepository implements IUserAccountRepo {
  async createUserAccount (dto: ICreateUserAccountInput): Promise<boolean> {
    try {
      const config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `${process.env.AUTH_SVC_DOMAIN}/api/auth/`,
        headers: {
          authorization: INTERNAL_TOKEN
        },
        data: dto
      }
      await axios.request(config)
      return true
    } catch (err) {
      // TODO move to http client and handle error
      return false
    }
  }
}

import UserGraphController from '../../../controller/user.controller.graph'
import { type IContext } from '../../context'

const userController = new UserGraphController()

interface IGetUserParams {
  id: number
}

export default {
  Query: {
    async getUser (parent: any, args: IGetUserParams, context: IContext, info: any) {
      const data = await userController.getUser(args.id)
      return {
        message: 'SUCCESS',
        data
      }
    },
    async me (parent: any, args: IGetUserParams, context: IContext, info: any) {
      const data = await userController.getUser(context.account.user.id)
      return {
        message: 'SUCCESS',
        data
      }
    }
  }
}

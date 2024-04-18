import UserGraphController from '../../../controller/user/user.controller.graph'
import { type ICreateCustomerUserArgs } from '../../../controller/dto/user.dto'
import { type IContext } from '../../context'

const userController = new UserGraphController()

interface IGetUserParams {
  id: number
}

export default {
  Query: {
    async getUser (
      parent: any,
      args: IGetUserParams,
      context: IContext,
      info: any
    ) {
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
  },
  Mutation: {
    async createCustomerUser (parent: any, args: ICreateCustomerUserArgs, context: IContext, info: any) {
      const data = await userController.createCustomerUser(args.input)
      return {
        message: 'SUCCESS',
        data
      }
    }
  }
}

export interface ICreateUserAccountInput {
  username: string
  password: string
  userId: number
}

export interface IUserAccountRepo {
  createUserAccount: (dto: ICreateUserAccountInput) => Promise<boolean>
}

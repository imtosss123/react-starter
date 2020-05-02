export interface IUser {
  _id: string
  username: string
  fullName: string
}

export interface LoginData {
  username: string | null
  password: string | null
}

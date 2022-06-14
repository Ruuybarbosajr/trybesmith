import { Request } from 'express';

export interface INewUser {
  username: string,
  classe: string,
  level: number,
  password: string
}

export interface IUser extends INewUser{
  id: number,
}

export interface IUserToEnter {
  username: string,
  password: string
}

export interface IRequestWithUser extends Request {
  user?: IUser
}
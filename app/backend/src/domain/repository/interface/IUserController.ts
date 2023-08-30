export type IRequest = {
  body: any
  params: any
  query: any
  headers: any
};

export type IResponse = {
  status: number
  payload: any
};

export type INext = (err?: any) => void;

export interface IUserController {
  login(req: IRequest): Promise<IResponse>,
  getRole(req: IRequest): Promise<IResponse>
}

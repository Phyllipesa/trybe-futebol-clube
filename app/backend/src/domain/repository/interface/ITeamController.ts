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

export interface ITeamController {
  getAll(): Promise<IResponse>,
  getById(req: IRequest): Promise<IResponse>
}

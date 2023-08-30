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

export interface IMatchController {
  getAll(req: IRequest): Promise<IResponse>,
  finishMatch(req: IRequest): Promise<IResponse>,
  updateMatchResult(req: IRequest): Promise<IResponse>,
  createMatch(req: IRequest): Promise<IResponse>,
}

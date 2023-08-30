import { NextFunction, Request, Response } from 'express';

export default class errorHandler {
  public static execute = (
    error: Error,
    _req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    res.status(500).json(error.message);
    next();
  };
}

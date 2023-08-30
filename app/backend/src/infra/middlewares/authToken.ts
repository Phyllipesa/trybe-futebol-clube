import { Response, Request, NextFunction } from 'express';
import { validate } from '../utils/auth';

export = (req: Request, _res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization;
    validate(token);
    next();
  } catch (error) {
    next(error);
  }
};

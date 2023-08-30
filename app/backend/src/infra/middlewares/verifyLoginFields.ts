import { Response, Request, NextFunction } from 'express';
import User from '../../domain/entities/User';
import HttpException from '../utils/HttpException';

const verifyInfor = (info: Pick<User, 'email' | 'password'>) => {
  if (!info.email || !info.password) throw new HttpException(400, 'All fields must be filled');
};

const verifyFields = (req: Request, _res: Response, next: NextFunction) => {
  try {
    verifyInfor(req.body);
    return next();
  } catch (error) {
    return next(error);
  }
};

export = verifyFields;

import { Response, Request, NextFunction } from 'express';
import regEmailAndPass from '../schemas/regEmailAndPass';

const verifyEmailAndPassword = (req: Request, _res: Response, next: NextFunction) => {
  try {
    regEmailAndPass(req.body);
    return next();
  } catch (error) {
    return next(error);
  }
};

export default verifyEmailAndPassword;

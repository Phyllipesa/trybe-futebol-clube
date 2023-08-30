import { sign, verify } from 'jsonwebtoken';
import HttpException from './HttpException';

const secret: string = process.env.JWT_SECRET || 'oSapoFoiNoTribunal';

const configJWT: object = {
  expiresIn: '24h',
  algorithm: 'HS256',
};

export const generateToken = (id: number) => {
  const token: string = sign({ id }, secret, configJWT);
  return token;
};

export const decodedToken = (token: string) => {
  try {
    const decoded = verify(token, secret);
    return decoded;
  } catch (error) {
    throw new HttpException(401, 'Token must be a valid token');
  }
};

const existToken = (token: string | undefined) => {
  if (!token) throw new HttpException(401, 'Token not found');
  decodedToken(token);
};

export const validate = (token: string | undefined) => {
  existToken(token);
};

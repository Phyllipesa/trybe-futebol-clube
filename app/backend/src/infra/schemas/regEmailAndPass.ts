import User from '../../domain/entities/User';
import { HttpException } from '../utils';

export default (info: Pick<User, 'email' | 'password'>) => {
  const emailformat = /^[\w-_.]+@([\w-]+\.)+[\w-]{2,4}$/g;

  if (!emailformat.test(info.email) || info.password.length < 6) {
    throw new HttpException(401, 'Invalid email or password');
  }
};

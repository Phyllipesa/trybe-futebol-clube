import { compare } from 'bcryptjs';
import User, { IDecode } from '../../domain/entities/User';
import IUserPersistence from '../../domain/repository/IUserPersistence';
import { HttpException, generateToken, auth } from '../utils';
import UserModel from '../database/models/UserModel';

// TRANSFERIR AS VALIDAÇÕES DE DADOS PARA A SERVICE!

class UserORM implements IUserPersistence {
  public login = async (entity: Pick<User, 'email' | 'password'>): Promise<string> => {
    const user = await UserORM.findOne(entity.email);

    const verifyPassword = await compare(
      entity.password,
      user.password,
    );

    if (!verifyPassword) {
      throw new HttpException(401, 'Invalid email or password');
    }

    const token = generateToken(Number(user.id));

    return token;
  };

  static findOne = async (email: string): Promise<User> => {
    const user = await UserModel
      .findOne({ where: { email }, attributes: ['id', 'email', 'password'] });

    if (!user) {
      throw new HttpException(401, 'Invalid email or password');
    }

    return user;
  };

  public getRole = async (entity: string): Promise<User> => {
    const { id } = auth.decodedToken(entity) as IDecode;
    const role = await UserModel.findOne({ where: { id }, attributes: ['role'] });
    return role as User;
  };
}

export default UserORM;

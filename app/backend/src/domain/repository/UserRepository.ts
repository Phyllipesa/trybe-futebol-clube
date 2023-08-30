/* eslint-disable arrow-body-style */
import User from '../entities/User';
import IUserPersistence from './IUserPersistence';

class UserRepository {
  constructor(private iPersistence: IUserPersistence) {}

  public login = async (entity: Pick<User, 'email' | 'password'>) => {
    return this.iPersistence.login(entity);
  };

  public getRole = async (entity: string) => {
    return this.iPersistence.getRole(entity);
  };
}

export default UserRepository;

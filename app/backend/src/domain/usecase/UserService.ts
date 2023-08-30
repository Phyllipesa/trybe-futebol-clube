import User from '../entities/User';
import UserRepository from '../repository/UserRepository';

class UserService {
  constructor(private repository: UserRepository) {}

  public login = async (entity: Pick<User, 'email' | 'password'>) => this.repository.login(entity);

  public getRole = async (entity: string) => this.repository.getRole(entity);
}

export default UserService;

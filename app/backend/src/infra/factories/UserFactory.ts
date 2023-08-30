import UserController from '../controllers/UserController';
import UserService from '../../domain/usecase/UserService';
import UserRepository from '../../domain/repository/UserRepository';
import IUserPersistence from '../../domain/repository/IUserPersistence';
import UserPersistenceMySQL from '../persistence/UserORM';

const userPersistence: IUserPersistence = new UserPersistenceMySQL();
const userRepository = new UserRepository(userPersistence);
const userService = new UserService(userRepository);
const userController = new UserController(userService);

export default userController;

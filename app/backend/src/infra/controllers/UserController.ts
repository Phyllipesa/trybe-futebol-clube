import {
  IRequest,
  IResponse,
  IUserController,
} from '../../domain/repository/interface/IUserController';
import UserService from '../../domain/usecase/UserService';

export default class UserController implements IUserController {
  constructor(private userCase: UserService) {}

  public login = async (req: IRequest): Promise<IResponse> => {
    const token = await this.userCase.login(req.body);
    return {
      status: 200,
      payload: {
        token,
      },
    };
  };

  public getRole = async (req: Pick<IRequest, 'headers'>): Promise<IResponse> => {
    const token = req.headers.authorization as string;
    const role = await this.userCase.getRole(token);

    return {
      status: 200,
      payload: {
        role,
      },
    };
  };
}

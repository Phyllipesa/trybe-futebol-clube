import {
  IRequest,
  IResponse,
  ITeamController,
} from '../../domain/repository/interface/ITeamController';
import TeamService from '../../domain/usecase/TeamService';

export default class TeamController implements ITeamController {
  constructor(private teamCase: TeamService) {}
  public getAll = async (): Promise<IResponse> => {
    const teams = await this.teamCase.getAll();

    return {
      status: 200,
      payload: {
        teams,
      },
    };
  };

  public getById = async (req: IRequest): Promise<IResponse> => {
    const id = req.params;
    const team = await this.teamCase.getById(id);

    return {
      status: 200,
      payload: {
        team,
      },
    };
  };
}

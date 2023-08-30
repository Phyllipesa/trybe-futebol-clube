import { ITeam } from '../../domain/entities/ITeam';
import ITeamPersistence from '../../domain/repository/ITeamPersistence';
import TeamModel from '../database/models/TeamModel';
import { HttpException } from '../utils';

class TeamORM implements ITeamPersistence {
  public getAll = async (): Promise<ITeam[]> => {
    const teams = await TeamModel.findAll();
    return teams;
  };

  public getById = async (entity: Pick<ITeam, 'id'>): Promise<ITeam> => {
    const team = await TeamModel.findByPk(entity.id);

    if (!team) {
      throw new HttpException(
        404,
        'There is no team with such id!',
      );
    }

    return team as ITeam;
  };
}
export default TeamORM;

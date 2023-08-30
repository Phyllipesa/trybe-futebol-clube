import { ITeam } from '../entities/ITeam';
import ITeamPersistence from './ITeamPersistence';

class TeamRepository {
  constructor(private iPersistence: ITeamPersistence) {}

  public getAll = async (): Promise<ITeam[]> => this.iPersistence.getAll();

  public getById = async (entity: Pick<ITeam, 'id'>) => this.iPersistence.getById(entity);
}

export default TeamRepository;

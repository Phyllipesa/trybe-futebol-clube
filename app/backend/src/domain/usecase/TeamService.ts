import { ITeam } from '../entities/ITeam';
import TeamRepository from '../repository/TeamRepository';

class TeamService {
  constructor(private repository: TeamRepository) {}

  public getAll = async (): Promise<ITeam[]> => this.repository.getAll();

  public getById = async (entity: Pick<ITeam, 'id'>) => this.repository.getById(entity);
}

export default TeamService;

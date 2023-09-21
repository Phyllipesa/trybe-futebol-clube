import { IMatch, IMatchWithTeams } from '../entities/IMatch';
import IMatchPersistence from './IMatchPersistence';
import ITeamPersistence from './ITeamPersistence';

class MatchRepository {
  constructor(
    private iPersistence: IMatchPersistence,
    private iPersistence2: ITeamPersistence,
  ) {}

  public getAll = async (entity: any): Promise<IMatchWithTeams[]> => this
    .iPersistence.getAll(entity);

  public finishMatch = async (entity: any): Promise<void> => this
    .iPersistence.finishMatch(entity);

  public updateMatchResult = async (entity: any): Promise<void> => this
    .iPersistence.updateMatchResult(entity);

  public createMatch = async (entity: any): Promise<IMatch> => this
    .iPersistence.createMatch(entity);

  public verifyTeams = async (entity: any): Promise<IMatch> => this
    .iPersistence2.getById(entity);
}

export default MatchRepository;

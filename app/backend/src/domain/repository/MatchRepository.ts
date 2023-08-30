import { IMatch, IMatchWithTeams } from '../entities/IMatch';
import IMatchPersistence from './IMatchPersistence';

class MatchRepository {
  constructor(private iPersistence: IMatchPersistence) {}

  public getAll = async (entity: any): Promise<IMatchWithTeams[]> => this
    .iPersistence.getAll(entity);

  public finishMatch = async (entity: any): Promise<void> => this
    .iPersistence.finishMatch(entity);

  public updateMatchResult = async (entity: any): Promise<void> => this
    .iPersistence.updateMatchResult(entity);

  public createMatch = async (entity: any): Promise<IMatch> => this
    .iPersistence.createMatch(entity);
}

export default MatchRepository;

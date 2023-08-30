import { IMatch, IMatchWithTeams } from '../../domain/entities/IMatch';
import IMatchPersistence from '../../domain/repository/IMatchPersistence';
import MatchModel from '../database/models/MatchModel';
import HttpException from '../utils/HttpException';

class MatchORM implements IMatchPersistence {
  public getAll = async (relationship: object): Promise<IMatchWithTeams[]> => {
    const allMatches = await MatchModel.findAll(relationship);

    return allMatches as unknown as IMatchWithTeams[];
  };

  public finishMatch = async (matchId: number): Promise<void> => {
    const match = await MatchModel.findByPk(matchId);

    if (!match) {
      throw new HttpException(404, 'Invalid match id');
    }

    match.inProgress = false;
    await match.save();
  };

  public updateMatchResult = async (entity: any): Promise<void> => {
    const match = await MatchModel.findByPk(entity.id);

    if (!match) {
      throw new HttpException(404, 'Invalid match id');
    }

    match.homeTeamGoals = entity.matchInfo.homeTeamGoals;
    match.awayTeamGoals = entity.matchInfo.awayTeamGoals;
    await match.save();
  };

  public createMatch = async (entity: any): Promise<IMatch> => MatchModel.create(entity);
}

export default MatchORM;

import { IMatch, IMatchWithTeams } from '../entities/IMatch';
import MatchRepository from '../repository/MatchRepository';
import { HttpException } from '../../infra/utils';
import {
  matchRelationship,
  matchProgressTrue,
  matchProgressFalse,
} from '../../infra/persistence/utils/matchRelationship';
import { decodedToken } from '../../infra/utils/auth';
import TeamRepository from '../repository/TeamRepository';
import {ITeam] from "../entities/ITeam';

class MatchService {
  constructor(
    private repository: MatchRepository,
    // private teamRepository: TeamRepository,
  ) {}

  public getAll = async (entity: string): Promise<IMatchWithTeams[]> => {
    if (entity) {
      return this.filterByInProgress(entity);
    }

    const allMatches: IMatchWithTeams[] = await this.repository.getAll(matchRelationship);

    if (!allMatches) {
      throw new HttpException(404, 'Matches not found');
    }

    return allMatches;
  };

  filterByInProgress = async (inProgress: string): Promise<IMatchWithTeams[]> => {
    if (inProgress === 'true') {
      const matchesProgTrue: IMatchWithTeams[] = await this
        .repository.getAll(matchProgressTrue);

      if (!matchesProgTrue) {
        throw new HttpException(404, 'TrueMatches not found');
      }

      return matchesProgTrue;
    }

    const matchesProgFalse: IMatchWithTeams[] = await this
      .repository.getAll(matchProgressFalse);

    if (!matchesProgFalse) {
      throw new HttpException(404, 'FalseMatches not found');
    }

    return matchesProgFalse;
  };

  public finishMatch = async (matchId: number, token: string): Promise<void> => {
    decodedToken(token);
    await this.repository.finishMatch(matchId);
  };

  public updateMatchResult = async (entity: any): Promise<void> => {
    decodedToken(entity.token);
    await this.repository.updateMatchResult(entity);
  };

  public createMatch = async (entity: any): Promise<IMatch> => {
    decodedToken(entity.token);

    await this.verifyTeams(entity.matchInfo);

    return this.repository.createMatch(entity.matchInfo);
  };

  verifyTeams = async (entity: any): Promise<void> => {
    if (entity.awayTeamId === entity.homeTeamId) {
      throw new HttpException(422, 'It is not possible to create a match with two equal teams');
    }

    const team1: ITeam = { id: entity.homeTeamId, teamName: '' };
    const team2: ITeam = { id: entity.awayTeamId, teamName: '' };

    await this.teamRepository.getById(team1);
    await this.teamRepository.getById(team2);
  };
}

export default MatchService;

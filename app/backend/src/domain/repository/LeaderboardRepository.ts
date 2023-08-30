import { ILeaderboard, ILeaderboardWithGoalsBalanceAndEfficiency } from '../entities/ILeaderboard';
import { ILeaderboardPersistence } from './ILeaderboardPersistence';

class LeaderboardRepository {
  constructor(private iPersistence: ILeaderboardPersistence) {}

  public getLeaderboard = async (): Promise<ILeaderboard[]> =>
    this.iPersistence.getLeaderboard();

  public getLeaderboardHomeTeam = async (): Promise<ILeaderboardWithGoalsBalanceAndEfficiency[]> =>
    this.iPersistence.getLeaderboardHomeTeam();

  public getLeaderboardAwayTeam = async (): Promise<ILeaderboardWithGoalsBalanceAndEfficiency[]> =>
    this.iPersistence.getLeaderboardAwayTeam();
}

export default LeaderboardRepository;

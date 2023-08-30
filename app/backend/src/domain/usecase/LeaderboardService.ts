import {
  ILeaderboard,
  ILeaderboardWithGoalsBalanceAndEfficiency,
} from '../entities/ILeaderboard';
import LeaderboardRepository from '../repository/LeaderboardRepository';

class LeaderboardService {
  constructor(private repository: LeaderboardRepository) {}

  public getLeaderboard = async (): Promise<ILeaderboard[]> =>
    this.repository.getLeaderboard();

  public getLeaderboardHomeTeam = async (): Promise<ILeaderboardWithGoalsBalanceAndEfficiency[]> =>
    this.repository.getLeaderboardHomeTeam();

  public getLeaderboardAwayTeam = async (): Promise<ILeaderboardWithGoalsBalanceAndEfficiency[]> =>
    this.repository.getLeaderboardAwayTeam();
}

export default LeaderboardService;

import LeaderboardService from '../../domain/usecase/LeaderboardService';
import {
  ILeaderboardController,
  IResponse,
} from '../../domain/repository/interface/ILeaderboardController';
import {
  ILeaderboard,
  ILeaderboardWithGoalsBalanceAndEfficiency,
} from '../../domain/entities/ILeaderboard';

class LeaderboardController implements ILeaderboardController {
  constructor(private leaderboardCase: LeaderboardService) {}

  public getLeaderboard = async (): Promise<IResponse> => {
    const leaderboard: ILeaderboard[] = await this.leaderboardCase.getLeaderboard();

    return {
      status: 200,
      payload: leaderboard,
    };
  };

  public getLeaderboardHomeTeam = async (): Promise<IResponse> => {
    const leaderboard: ILeaderboardWithGoalsBalanceAndEfficiency[] = await this
      .leaderboardCase.getLeaderboardHomeTeam();

    return {
      status: 200,
      payload: leaderboard,
    };
  };

  public getLeaderboardAwayTeam = async (): Promise<IResponse> => {
    const leaderboard: ILeaderboardWithGoalsBalanceAndEfficiency[] = await this
      .leaderboardCase.getLeaderboardAwayTeam();

    return {
      status: 200,
      payload: leaderboard,
    };
  };
}

export default LeaderboardController;

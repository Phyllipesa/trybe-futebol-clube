import {
  ILeaderboard,
  ILeaderboardWithGoalsBalanceAndEfficiency,
} from '../../domain/entities/ILeaderboard';
import { ILeaderboardPersistence } from '../../domain/repository/ILeaderboardPersistence';
import sequelize from '../database/models';
import leaderboardAwayTeamQuery from './utils/leaderboardAwayTeamQuery';
import leaderboardHomeTeamQuery from './utils/leaderboardHomeTeamQuery';
import leaderboardQuery from './utils/leaderboardQuery';
import { queryConfig } from './utils/matchRelationship';

class LeaderboardORM implements ILeaderboardPersistence {
  public getLeaderboard = async (): Promise<ILeaderboard> => {
    const leaderboard = await sequelize.query(leaderboardQuery, queryConfig);
    return leaderboard as unknown as ILeaderboardWithGoalsBalanceAndEfficiency;
  };

  public getLeaderboardHomeTeam = async (): Promise<ILeaderboardWithGoalsBalanceAndEfficiency> => {
    const leaderboardHT = sequelize.query(leaderboardHomeTeamQuery, queryConfig);
    return leaderboardHT as unknown as ILeaderboardWithGoalsBalanceAndEfficiency;
  };

  public getLeaderboardAwayTeam = async (): Promise<ILeaderboardWithGoalsBalanceAndEfficiency> => {
    const leaderboardAT = sequelize.query(leaderboardAwayTeamQuery, queryConfig);
    return leaderboardAT as unknown as ILeaderboardWithGoalsBalanceAndEfficiency;
  };
}

export default LeaderboardORM;

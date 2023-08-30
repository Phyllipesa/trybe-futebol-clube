import LeaderboardService from '../../domain/usecase/LeaderboardService';
import LeaderboardController from '../controllers/LeaderboardController';
import LeaderboardRepository from '../../domain/repository/LeaderboardRepository';
import { ILeaderboardPersistence } from '../../domain/repository/ILeaderboardPersistence';
import LeaderboardPersistenceMySQL from '../persistence/LeaderboardORM';

const leaderboardPersistence: ILeaderboardPersistence = new LeaderboardPersistenceMySQL();
const leaderboardRepository = new LeaderboardRepository(leaderboardPersistence);
const leaderboardService = new LeaderboardService(leaderboardRepository);
const leaderboardController = new LeaderboardController(leaderboardService);

export default leaderboardController;

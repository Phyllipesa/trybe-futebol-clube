import MatchService from '../../domain/usecase/MatchService';
import MatchController from '../controllers/MatchController';
import MatchRepository from '../../domain/repository/MatchRepository';
import IMatchPersistence from '../../domain/repository/IMatchPersistence';
import MatchPersistenceMySQL from '../persistence/MatchORM';
// import TeamRepository from '../../domain/repository/TeamRepository';

const matchPersistence: IMatchPersistence = new MatchPersistenceMySQL();
const matchRepository = new MatchRepository(matchPersistence);
const matchService = new MatchService(matchRepository);
const matchController = new MatchController(matchService);

export default matchController;

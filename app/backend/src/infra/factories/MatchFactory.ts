import MatchService from '../../domain/usecase/MatchService';
import MatchController from '../controllers/MatchController';
import MatchRepository from '../../domain/repository/MatchRepository';
import IMatchPersistence from '../../domain/repository/IMatchPersistence';
import MatchPersistenceMySQL from '../persistence/MatchORM';
import ITeamPersistence from '../../domain/repository/ITeamPersistence';
import TeamPersistenceMySQL from '../persistence/TeamORM';
import TeamRepository from '../../domain/repository/TeamRepository';

const teamPersistence: ITeamPersistence = new TeamPersistenceMySQL();
const matchPersistence: IMatchPersistence = new MatchPersistenceMySQL();

const teamRepository = new TeamRepository(teamPersistence);
const matchRepository = new MatchRepository(matchPersistence, teamPersistence);

const matchService = new MatchService(matchRepository, teamRepository);
const matchController = new MatchController(matchService);

export default matchController;


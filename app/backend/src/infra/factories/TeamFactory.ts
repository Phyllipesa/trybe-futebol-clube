import TeamService from '../../domain/usecase/TeamService';
import TeamController from '../controllers/TeamController';
import TeamRepository from '../../domain/repository/TeamRepository';
import ITeamPersistence from '../../domain/repository/ITeamPersistence';
import TeamPersistenceMySQL from '../persistence/TeamORM';

const teamPersistence: ITeamPersistence = new TeamPersistenceMySQL();
const teamRepository = new TeamRepository(teamPersistence);
const teamService = new TeamService(teamRepository);
const teamController = new TeamController(teamService);

export default teamController;

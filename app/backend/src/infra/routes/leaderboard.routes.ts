import { Router } from 'express';
import ExpressRoutesAdapter from '../../domain/adapters/express-routes.adapter';
import leaderboardController from '../factories/LeadboardFactory';

const leaderboardRoutes = Router();

leaderboardRoutes
  .get('/', ExpressRoutesAdapter.getLeaderboard(leaderboardController))
  .get('/home', ExpressRoutesAdapter.getLeaderboardHomeTeam(leaderboardController))
  .get('/away', ExpressRoutesAdapter.getLeaderboardAwayTeam(leaderboardController));

export default leaderboardRoutes;

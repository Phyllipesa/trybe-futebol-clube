import { Router } from 'express';
import ExpressRoutesAdapter from '../../domain/adapters/express-routes.adapter';
import matchController from '../factories/MatchFactory';
import authToken = require('../middlewares/authToken');

const matchRoutes = Router();

matchRoutes
  .get('/', ExpressRoutesAdapter.getAllMatches(matchController))
  .patch('/:id/finish', authToken, ExpressRoutesAdapter.finishMatch(matchController))
  .patch('/:id', authToken, ExpressRoutesAdapter.updateMatchResult(matchController))
  .post('/', authToken, ExpressRoutesAdapter.createMatch(matchController));

export default matchRoutes;

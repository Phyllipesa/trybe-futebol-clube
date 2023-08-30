import { Router } from 'express';
import teamController from '../factories/TeamFactory';
import ExpressRoutesAdapter from '../../domain/adapters/express-routes.adapter';

const teamRoutes = Router();

teamRoutes
  .get('/', ExpressRoutesAdapter.getAllTeams(teamController))
  .get('/:id', ExpressRoutesAdapter.getById(teamController));

export default teamRoutes;

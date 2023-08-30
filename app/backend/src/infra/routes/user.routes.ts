import { Router } from 'express';
import userController from '../factories/UserFactory';
import verifyFields = require('../middlewares/verifyLoginFields');
import verifyEmailAndPassword from '../middlewares/verifyEmail';
import ExpressRoutesAdapter from '../../domain/adapters/express-routes.adapter';
import authToken = require('../middlewares/authToken');

const userRoutes = Router();

userRoutes
  .post(
    '/',
    verifyFields,
    verifyEmailAndPassword,
    ExpressRoutesAdapter.login(userController),
  );

userRoutes
  .get(
    '/role',
    authToken,
    ExpressRoutesAdapter.getRole(userController),
  );

export default userRoutes;

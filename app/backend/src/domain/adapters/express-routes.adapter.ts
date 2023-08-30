import { Request, Response, NextFunction } from 'express';
import {
  IUserController,
  IRequest,
  IResponse,
} from '../repository/interface/IUserController';
import { ITeamController } from '../repository/interface/ITeamController';
import { IMatchController } from '../repository/interface/IMatchController';
import { ILeaderboardController } from '../repository/interface/ILeaderboardController';

export default class ExpressRoutesAdapter {
  static login = (controller: IUserController) => async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    const request: IRequest = {
      body: req.body,
      query: req.query,
      params: req.params,
      headers: req.headers,
    };

    try {
      const response: IResponse = await controller.login(request);
      return res.status(response.status).json(response.payload);
    } catch (error) {
      return next(error);
    }
  };

  static getRole = (controller: IUserController) => async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    const request: IRequest = {
      body: req.body,
      query: req.query,
      params: req.params,
      headers: req.headers,
    };
    try {
      const { status, payload }: IResponse = await controller.getRole(request);
      return res.status(status).json(payload.role);
    } catch (error) {
      return next(error);
    }
  };

  static getAllTeams = (controller: ITeamController) => async (
    _req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const { status, payload }: IResponse = await controller.getAll();
      return res.status(status).json(payload.teams);
    } catch (error) {
      return next(error);
    }
  };

  static getAllMatches = (controller: IMatchController) => async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    const request: IRequest = {
      body: req.body,
      query: req.query,
      params: req.params,
      headers: req.headers,
    };
    try {
      const { status, payload }: IResponse = await controller.getAll(request);
      return res.status(status).json(payload.allMatches);
    } catch (error) {
      return next(error);
    }
  };

  static getLeaderboard = (controller: ILeaderboardController) => async (
    _req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const { status, payload }: IResponse = await controller.getLeaderboard();
      return res.status(status).json(payload);
    } catch (error) {
      return next(error);
    }
  };

  static getLeaderboardHomeTeam = (controller: ILeaderboardController) => async (
    _req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const { status, payload }: IResponse = await controller.getLeaderboardHomeTeam();
      return res.status(status).json(payload);
    } catch (error) {
      return next(error);
    }
  };

  static getLeaderboardAwayTeam = (controller: ILeaderboardController) => async (
    _req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const { status, payload }: IResponse = await controller.getLeaderboardAwayTeam();
      return res.status(status).json(payload);
    } catch (error) {
      return next(error);
    }
  };

  static getById = (controller: ITeamController) => async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    const request: IRequest = {
      body: req.body,
      query: req.query,
      params: req.params,
      headers: req.headers,
    };
    try {
      const { status, payload }: IResponse = await controller.getById(request);
      return res.status(status).json(payload.team);
    } catch (error) {
      return next(error);
    }
  };

  static finishMatch = (controller: IMatchController) => async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    const request: IRequest = {
      body: req.body,
      query: req.query,
      params: req.params,
      headers: req.headers,
    };
    try {
      const { status, payload }: IResponse = await controller.finishMatch(request);
      return res.status(status).json(payload);
    } catch (error) {
      return next(error);
    }
  };

  static updateMatchResult = (controller: IMatchController) => async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    const request: IRequest = {
      body: req.body,
      query: req.query,
      params: req.params,
      headers: req.headers,
    };
    try {
      const { status, payload }: IResponse = await controller.updateMatchResult(request);
      return res.status(status).json({ payload });
    } catch (error) {
      return next(error);
    }
  };

  static createMatch = (controller: IMatchController) => async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    const request: IRequest = {
      body: req.body,
      query: req.query,
      params: req.params,
      headers: req.headers,
    };
    try {
      const { status, payload }: IResponse = await controller.createMatch(request);
      return res.status(status).json({ payload });
    } catch (error) {
      return next(error);
    }
  };
}

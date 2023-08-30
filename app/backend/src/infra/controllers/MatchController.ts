import MatchService from '../../domain/usecase/MatchService';
import {
  IMatchController,
  IRequest,
  IResponse } from '../../domain/repository/interface/IMatchController';
import { IMatchWithTeams } from '../../domain/entities/IMatch';

class MatchController implements IMatchController {
  constructor(private matchCase: MatchService) {}

  public getAll = async (req: IRequest): Promise<IResponse> => {
    const progress = req.query.inProgress;
    const allMatches: IMatchWithTeams[] = await this.matchCase.getAll(progress as string);

    return {
      status: 200,
      payload: {
        allMatches,
      },
    };
  };

  public finishMatch = async (req: IRequest): Promise<IResponse> => {
    const { id } = req.params;
    const token = req.headers.authorization as string;
    await this.matchCase.finishMatch(+id, token);

    return {
      status: 200,
      payload: 'Finished!',
    };
  };

  public updateMatchResult = async (req: IRequest): Promise<IResponse> => {
    const { id } = req.params;
    const token = req.headers.authorization as string;
    const matchInfo = req.body;
    await this.matchCase.updateMatchResult({ id, matchInfo, token });

    return {
      status: 200,
      payload: 'Match updated!',
    };
  };

  public createMatch = async (req: IRequest): Promise<IResponse> => {
    const token = req.headers.authorization as string;
    const matchInfo = req.body;

    const matchCreated = await this.matchCase.createMatch({ token, matchInfo });

    return {
      status: 201,
      payload: matchCreated,
    };
  };
}

export default MatchController;

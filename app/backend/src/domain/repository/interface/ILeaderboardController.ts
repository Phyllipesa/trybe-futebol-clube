export type IResponse = {
  status: number,
  payload: any,
};

export type INext = (err?: any) => void;

export interface ILeaderboardController {
  getLeaderboard(): Promise<IResponse>,
  getLeaderboardHomeTeam(): Promise<IResponse>,
  getLeaderboardAwayTeam(): Promise<IResponse>,
}

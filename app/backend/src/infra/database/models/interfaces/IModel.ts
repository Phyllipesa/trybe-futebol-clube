export interface IModelMatch {
  id: number;
  homeTeamId: number;
  homeTeamGoals: number;
  awayTeamId: number;
  awayTeamGoals: number;
  inProgress: boolean;
}

export interface IModelUsers {
  id: string;
  username: string;
  role: string;
  email: string;
  password: string;
}

export interface IModelTeams {
  id: number;
  teamName: string;
}

export interface IBasicModel {
  homeTeamId: number,
  awayTeamId: number,
  homeTeamGoals: number,
  awayTeamGoals: number,
}

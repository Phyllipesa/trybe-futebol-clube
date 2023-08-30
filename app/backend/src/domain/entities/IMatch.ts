export interface IMatchCreate {
  homeTeamId: number;
  homeTeamGoals: number;
  awayTeamId: number;
  awayTeamGoals: number;
}

export interface IMatch extends IMatchCreate {
  id: number;
  inProgress: boolean;
}

export interface IMatchWithTeams extends IMatch {
  homeTeam: {
    teamName: string;
  };

  awayTeam: {
    teamName: string;
  };
}

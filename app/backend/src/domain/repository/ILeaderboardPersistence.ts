export interface ILeaderboardPersistence {
  getLeaderboard(): Promise<any>,
  getLeaderboardHomeTeam(): Promise<any>,
  getLeaderboardAwayTeam(): Promise<any>,
}

const leaderboardAwayTeamQuery = `WITH team_stats AS (
  SELECT 
      t.team_name AS name,
      COUNT(CASE WHEN m.away_team_goals > m.home_team_goals THEN 1 END) as totalVictories,
      COUNT(CASE WHEN m.away_team_goals = m.home_team_goals THEN 1 END) as totalDraws,
      COUNT(CASE WHEN m.away_team_goals < m.home_team_goals THEN 1 END) as totalLosses,
      SUM(m.away_team_goals) as goalsFavor,
      SUM(m.home_team_goals) as goalsOwn
  FROM teams t
  INNER JOIN matches m ON m.away_team_id = t.id
  WHERE m.in_progress = 0
  GROUP BY name
)
SELECT
  name,
  (totalVictories * 3) + totalDraws as totalPoints,
  (totalVictories + totalDraws + totalLosses) as totalGames,
  totalVictories,
  totalDraws,
  totalLosses,
  goalsFavor,
  goalsOwn,
  goalsFavor - goalsOwn AS goalsBalance,
  ROUND(((totalVictories * 3 + totalDraws)
   / ((totalVictories + totalDraws + totalLosses) * 3) * 100), 2) AS efficiency
FROM team_stats
ORDER BY totalPoints DESC, goalsBalance DESC, goalsFavor DESC;

`;

export default leaderboardAwayTeamQuery;

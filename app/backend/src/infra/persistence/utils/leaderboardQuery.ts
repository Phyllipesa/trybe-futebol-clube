const leaderboardQuery = `WITH team_stats_home AS (
  -- Primeira query
  SELECT 
      t.team_name AS name,
      COUNT(CASE WHEN m.home_team_id = t.id
         AND m.home_team_goals > m.away_team_goals THEN 1 END) as totalVictories,
      COUNT(CASE WHEN m.home_team_id = t.id
         AND m.home_team_goals = m.away_team_goals THEN 1 END) as totalDraws,
      COUNT(CASE WHEN m.home_team_id = t.id
         AND m.home_team_goals < m.away_team_goals THEN 1 END) as totalLosses,
      SUM(m.home_team_goals) as goalsFavor,
      SUM(m.away_team_goals) as goalsOwn
  FROM teams t
  INNER JOIN matches m ON m.home_team_id = t.id
  WHERE m.in_progress = 0
  GROUP BY name
),
team_stats_away AS (
  -- Segunda query
  SELECT 
      t.team_name AS name,
      COUNT(CASE WHEN m.away_team_id = t.id
         AND m.away_team_goals > m.home_team_goals THEN 1 END) as totalVictories,
      COUNT(CASE WHEN m.away_team_id = t.id
         AND m.away_team_goals = m.home_team_goals THEN 1 END) as totalDraws,
      COUNT(CASE WHEN m.away_team_id = t.id
         AND m.away_team_goals < m.home_team_goals THEN 1 END) as totalLosses,
      SUM(m.away_team_goals) as goalsFavor,
      SUM(m.home_team_goals) as goalsOwn
  FROM teams t
  INNER JOIN matches m ON m.away_team_id = t.id
  WHERE m.in_progress = 0
  GROUP BY name
)
SELECT
      h.name,
      h.totalVictories + a.totalVictories as totalVictories,
      h.totalDraws + a.totalDraws as totalDraws,
      h.totalLosses + a.totalLosses as totalLosses,
      h.goalsFavor + a.goalsFavor as goalsFavor,
      h.goalsOwn + a.goalsOwn as goalsOwn,
      (h.totalVictories + a.totalVictories) * 3 + (h.totalDraws + a.totalDraws) as totalPoints,
      (h.totalVictories + a.totalVictories
         + h.totalDraws + a.totalDraws + h.totalLosses + a.totalLosses) as totalGames,
      (h.goalsFavor + a.goalsFavor) - (h.goalsOwn + a.goalsOwn) AS goalsBalance,
      ROUND((((h.totalVictories + a.totalVictories) * 3 + (h.totalDraws + a.totalDraws))
      / ((h.totalVictories + a.totalVictories + h.totalDraws
         + a.totalDraws + h.totalLosses + a.totalLosses) * 3) * 100), 2) AS efficiency
  FROM team_stats_home h
  INNER JOIN team_stats_away a ON h.name = a.name
  ORDER BY totalPoints DESC, efficiency DESC,
   totalVictories DESC, goalsBalance DESC, goalsFavor DESC;
`;

export default leaderboardQuery;

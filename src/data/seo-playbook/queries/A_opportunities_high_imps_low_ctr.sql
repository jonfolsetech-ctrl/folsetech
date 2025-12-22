-- A. High impressions, low CTR, good average position (28d window)
-- Postgres: use INTERVAL '28 days'. MySQL: INTERVAL 28 DAY.
SELECT
  p.url,
  AVG(g.position) AS avg_pos,
  SUM(g.impressions) AS imps_28d,
  SUM(g.clicks) AS clicks_28d,
  (SUM(g.clicks) * 1.0 / NULLIF(SUM(g.impressions),0)) AS ctr_28d
FROM gsc_query_daily g
JOIN pages p ON p.id = g.page_id
WHERE g.d BETWEEN CURRENT_DATE - INTERVAL '28 days' AND CURRENT_DATE
GROUP BY p.url
HAVING AVG(g.position) BETWEEN 2 AND 10
   AND SUM(g.impressions) >= 500
   AND (SUM(g.clicks) * 1.0 / NULLIF(SUM(g.impressions),0)) < 0.02
ORDER BY avg_pos, imps_28d DESC;

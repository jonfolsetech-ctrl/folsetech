-- Map queries to best landing page by highest clicks then best position (60d)
WITH agg AS (
  SELECT query, page_id,
         SUM(clicks) AS clicks, SUM(impressions) AS imps,
         AVG(position) AS pos
  FROM gsc_query_daily
  WHERE d >= CURRENT_DATE - INTERVAL '60 days'
  GROUP BY query, page_id
),
ranked AS (
  SELECT a.*, ROW_NUMBER() OVER (PARTITION BY query ORDER BY clicks DESC, pos ASC) AS rn
  FROM agg a
)
SELECT query, page_id
FROM ranked
WHERE rn = 1;

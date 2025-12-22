-- B. Cannibalization: multiple URLs ranking for the same keyword within top 20
WITH top20 AS (
  SELECT d, query, page_id, MIN(position) AS best_pos
  FROM gsc_query_daily
  WHERE position <= 20
  GROUP BY d, query, page_id
)
SELECT
  query,
  COUNT(DISTINCT page_id) AS urls_competing,
  MIN(best_pos) AS best_position
FROM top20
GROUP BY query
HAVING COUNT(DISTINCT page_id) > 1
ORDER BY urls_competing DESC, best_position;

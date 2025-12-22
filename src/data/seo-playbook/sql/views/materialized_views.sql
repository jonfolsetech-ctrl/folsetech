-- Materialized rollups (Postgres syntax). Adjust date math for your engine.

DROP MATERIALIZED VIEW IF EXISTS mv_gsc_28d;
CREATE MATERIALIZED VIEW mv_gsc_28d AS
SELECT
  page_id,
  query,
  SUM(clicks)      AS clicks_28d,
  SUM(impressions) AS imps_28d,
  AVG(position)    AS pos_28d,
  AVG(ctr)         AS ctr_28d
FROM gsc_query_daily
WHERE d >= CURRENT_DATE - INTERVAL '28 days'
GROUP BY page_id, query;

DROP MATERIALIZED VIEW IF EXISTS mv_metrics_14d;
CREATE MATERIALIZED VIEW mv_metrics_14d AS
SELECT
  page_id,
  AVG(avg_load_ms) AS avg_load_ms_14d,
  AVG(lcp_ms)      AS lcp_ms_14d
FROM page_metrics_daily
WHERE d >= CURRENT_DATE - INTERVAL '14 days'
GROUP BY page_id;

-- Refresh notes:
-- REFRESH MATERIALIZED VIEW CONCURRENTLY mv_gsc_28d;
-- REFRESH MATERIALIZED VIEW CONCURRENTLY mv_metrics_14d;

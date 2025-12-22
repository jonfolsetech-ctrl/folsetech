-- Generic indexing guidance (tune for your DB)
-- 1) Composite indexes on (page_id, d) and (d, page_id)
-- 2) Covering indexes where available (Postgres INCLUDE, MySQL InnoDB secondary contains PK)
-- 3) GIN/GiST for full-text (Postgres); FULLTEXT for MySQL
-- 4) Partition large time-series by month

-- Example composites:
CREATE INDEX IF NOT EXISTS ix_gsc_d_page ON gsc_query_daily(d, page_id);
CREATE INDEX IF NOT EXISTS ix_metrics_d_page ON page_metrics_daily(d, page_id);

-- Optional partial index (Postgres): only index indexable pages
-- CREATE INDEX IF NOT EXISTS ix_pages_url_indexable ON pages(url) WHERE is_indexable;

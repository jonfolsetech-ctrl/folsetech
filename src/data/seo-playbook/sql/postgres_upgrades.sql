-- Postgres-specific enhancements

-- Extensions
CREATE EXTENSION IF NOT EXISTS pg_trgm;
CREATE EXTENSION IF NOT EXISTS btree_gin;

-- Full-text search on page_content
ALTER TABLE page_content
  ADD COLUMN IF NOT EXISTS tsv tsvector;

CREATE INDEX IF NOT EXISTS ix_page_content_tsv
  ON page_content USING GIN (tsv);

CREATE OR REPLACE FUNCTION page_content_tsv_trigger() RETURNS trigger AS $$
BEGIN
  NEW.tsv :=
    setweight(to_tsvector('english', coalesce(NEW.title,'')), 'A') ||
    setweight(to_tsvector('english', coalesce(NEW.h1,'')), 'A') ||
    setweight(to_tsvector('english', coalesce(NEW.meta_desc,'')), 'B') ||
    setweight(to_tsvector('english', coalesce(NEW.body,'')), 'C');
  RETURN NEW;
END
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS tsv_update ON page_content;
CREATE TRIGGER tsv_update
BEFORE INSERT OR UPDATE ON page_content
FOR EACH ROW EXECUTE FUNCTION page_content_tsv_trigger();

-- Trigram index for near-duplicate titles
CREATE INDEX IF NOT EXISTS ix_title_trgm
  ON page_content USING GIN (title gin_trgm_ops);

-- Covering indexes (INCLUDE) for hot paths
CREATE INDEX IF NOT EXISTS ix_gsc_page_d ON gsc_query_daily(page_id, d) INCLUDE (clicks, impressions, position, ctr);
CREATE INDEX IF NOT EXISTS ix_metrics_page_d ON page_metrics_daily(page_id, d) INCLUDE (pageviews, lcp_ms, avg_load_ms);

-- Partitioning hints (manual)
-- Example:
-- CREATE TABLE gsc_query_daily_2025_12 PARTITION OF gsc_query_daily
--   FOR VALUES FROM ('2025-12-01') TO ('2026-01-01');

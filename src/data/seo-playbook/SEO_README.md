# AI Solutions Company — SQL + SEO Playbook

This bundle contains:
- Normalized **SEO/analytics schema** (ANSI SQL) + Postgres upgrades
- A set of **high-impact analysis queries** (A–G) and QA/maintenance queries
- Optional **materialized views** (rollups) and **indexing tips**

> Compatibility: queries are ANSI-leaning. For Postgres, use `CURRENT_DATE - INTERVAL '28 days'`. For MySQL, use `CURRENT_DATE - INTERVAL 28 DAY`. For BigQuery, use `DATE_SUB(CURRENT_DATE(), INTERVAL 28 DAY)`.

## Structure

```
/sql/
  schema.sql
  postgres_upgrades.sql
  views/materialized_views.sql
  indexes.sql
/queries/
  A_opportunities_high_imps_low_ctr.sql
  B_cannibalization.sql
  C_orphan_pages.sql
  D_slow_pages.sql
  E_404s_with_referrers.sql
  F_redirect_chains.sql
  G_content_gap.sql
  QA_titles_h1.sql
  thin_pages.sql
  map_queries_to_landing_page.sql
```

## Quick start

1. Create schema: `psql -f sql/schema.sql` (or your DB client of choice).
2. (Postgres) Apply upgrades: `psql -f sql/postgres_upgrades.sql`.
3. Load your data (Search Console → `gsc_query_daily`, analytics → `page_metrics_daily`, etc.).
4. Run queries in `/queries` to surface opportunities and issues.
5. (Optional) Create rollups in `/sql/views/materialized_views.sql` and schedule refreshes.

## Notes

- Partition big tables (`gsc_query_daily`, `logs_http`) by month for scale.
- Prefer **covering indexes** on hot paths and **GIN** for full-text in Postgres.
- Keep one canonical per page; ensure every indexable page has ≥1 inbound internal link.

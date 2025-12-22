-- ANSI-leaning schema for SEO + analytics

CREATE TABLE pages (
  id            BIGINT PRIMARY KEY,
  url           VARCHAR(2048) NOT NULL UNIQUE,
  path          VARCHAR(1024),
  template      VARCHAR(64),                 -- 'solution','industry','blog','docs','tool'
  lang          VARCHAR(8),                  -- 'en','de', etc.
  status_code   INT,
  canonical_url VARCHAR(2048),
  is_indexable  BOOLEAN,
  published_at  TIMESTAMP,
  updated_at    TIMESTAMP
);

CREATE TABLE page_content (
  page_id        BIGINT PRIMARY KEY REFERENCES pages(id),
  title          VARCHAR(300),
  meta_desc      VARCHAR(1000),
  h1             VARCHAR(300),
  body           CLOB
);

CREATE TABLE page_metrics_daily (
  d              DATE,
  page_id        BIGINT REFERENCES pages(id),
  sessions       INT,
  pageviews      INT,
  avg_load_ms    INT,     -- total page load
  lcp_ms         INT,
  cls            DECIMAL(6,4),
  fid_ms         INT,
  conversions    INT,
  leads          INT,
  PRIMARY KEY (d, page_id)
);

CREATE TABLE gsc_query_daily (
  d           DATE,
  page_id     BIGINT REFERENCES pages(id),
  query       VARCHAR(512),
  clicks      INT,
  impressions INT,
  position    DECIMAL(5,2),
  ctr         DECIMAL(5,4),
  PRIMARY KEY (d, page_id, query)
);

CREATE TABLE keywords (
  id           BIGINT PRIMARY KEY,
  keyword      VARCHAR(256) UNIQUE,
  intent       VARCHAR(32),       -- 'transactional','comparison','informational'
  difficulty   INT,
  volume       INT
);

CREATE TABLE page_keywords (
  page_id     BIGINT REFERENCES pages(id),
  keyword_id  BIGINT REFERENCES keywords(id),
  priority    INT,
  PRIMARY KEY (page_id, keyword_id)
);

CREATE TABLE internal_links (
  from_page   BIGINT REFERENCES pages(id),
  to_page     BIGINT REFERENCES pages(id),
  anchor      VARCHAR(512),
  first_seen  DATE,
  PRIMARY KEY (from_page, to_page)
);

CREATE TABLE backlinks (
  source_url    VARCHAR(2048),
  target_page   BIGINT REFERENCES pages(id),
  anchor        VARCHAR(512),
  rel           VARCHAR(32),        -- 'follow','nofollow','ugc'
  first_seen    DATE,
  domain_rating INT,
  PRIMARY KEY (source_url, target_page)
);

CREATE TABLE redirects (
  source_url  VARCHAR(2048) PRIMARY KEY,
  target_url  VARCHAR(2048),
  http_code   INT,                 -- 301/302
  created_at  TIMESTAMP,
  active      BOOLEAN
);

CREATE TABLE logs_http (
  ts           TIMESTAMP,
  url          VARCHAR(2048),
  status_code  INT,
  response_ms  INT,
  referrer     VARCHAR(2048),
  ua           VARCHAR(512),
  country      VARCHAR(32)
);

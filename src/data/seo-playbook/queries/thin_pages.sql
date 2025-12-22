-- Identify thin pages (low traffic + short body) across 90d
SELECT p.url, SUM(m.pageviews) AS pv_90d, LENGTH(c.body) AS body_len
FROM pages p
JOIN page_content c ON c.page_id = p.id
JOIN page_metrics_daily m ON m.page_id = p.id
WHERE m.d BETWEEN CURRENT_DATE - INTERVAL '90 days' AND CURRENT_DATE
GROUP BY p.url, LENGTH(c.body)
HAVING SUM(m.pageviews) < 200 AND LENGTH(c.body) < 800
ORDER BY pv_90d ASC, body_len ASC;

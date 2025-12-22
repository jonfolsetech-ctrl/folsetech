-- D. Slow pages (likely hurting rankings/conversion)
SELECT p.url,
       AVG(m.avg_load_ms) AS load_ms,
       AVG(m.lcp_ms) AS lcp_ms
FROM page_metrics_daily m
JOIN pages p ON p.id = m.page_id
WHERE m.d >= CURRENT_DATE - INTERVAL '14 days'
GROUP BY p.url
HAVING AVG(m.avg_load_ms) > 2500 OR AVG(m.lcp_ms) > 2500
ORDER BY lcp_ms DESC;

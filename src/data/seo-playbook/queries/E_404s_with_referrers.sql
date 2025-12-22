-- E. 404s with referrers (recover link equity)
SELECT url AS broken_url,
       COUNT(*) AS hits,
       MAX(referrer) AS example_referrer
FROM logs_http
WHERE status_code = 404
GROUP BY url
ORDER BY hits DESC;

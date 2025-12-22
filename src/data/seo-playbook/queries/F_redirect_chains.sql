-- F. Redirect chains (2+ hops). Extend pattern for deeper chains if needed.
SELECT r1.source_url, r1.target_url AS hop1, r2.target_url AS hop2
FROM redirects r1
JOIN redirects r2 ON r1.target_url = r2.source_url
WHERE r1.active = TRUE AND r2.active = TRUE;

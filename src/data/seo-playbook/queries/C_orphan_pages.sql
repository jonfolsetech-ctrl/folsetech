-- C. Orphan pages: indexable 200s with no inbound internal links
SELECT p.url
FROM pages p
LEFT JOIN internal_links il ON il.to_page = p.id
WHERE il.to_page IS NULL
  AND p.is_indexable = TRUE
  AND p.status_code = 200;

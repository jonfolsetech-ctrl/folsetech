-- Programmatic QA before publish: title/h1 presence + length
SELECT p.url, c.title, c.h1
FROM pages p JOIN page_content c ON c.page_id = p.id
WHERE (c.title IS NULL OR LENGTH(c.title) NOT BETWEEN 30 AND 65)
   OR (c.h1 IS NULL OR LENGTH(c.h1) < 15);

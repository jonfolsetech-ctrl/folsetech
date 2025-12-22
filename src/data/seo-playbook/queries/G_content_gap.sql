-- G. Content gap: target keywords with no mapped page
SELECT k.keyword, k.intent, k.volume, k.difficulty
FROM keywords k
LEFT JOIN page_keywords pk ON pk.keyword_id = k.id
WHERE pk.keyword_id IS NULL
ORDER BY k.volume DESC, k.difficulty ASC;

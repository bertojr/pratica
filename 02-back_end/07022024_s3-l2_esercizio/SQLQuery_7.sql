-- 7) Selezione di tutte le righe dei dettagli degli ordini che hanno applicato uno sconto --
SELECT *
FROM [Order Details]
WHERE Discount > 0
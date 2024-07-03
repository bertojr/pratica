-- 6) Totale delle spese di trasporto effettuate raggruppate per id cliente
SELECT o.CustomerID, SUM(Freight) as [Totale spese trasporto]
FROM Orders as o
GROUP BY o.CustomerID

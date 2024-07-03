-- 7) Numero totale di clienti raggruppati per città di appartenenza --
SELECT c.City, COUNT(c.CustomerID) as [Numero di clienti totali]
FROM Customers as c
GROUP BY c.City
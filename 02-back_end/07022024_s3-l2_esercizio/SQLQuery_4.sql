-- Selezione degli ordini il cui importo del trasporto è superiore a 90 e inferiore i 200 --
SELECT *
FROM Orders
WHERE Freight >= 90 AND Freight <= 200
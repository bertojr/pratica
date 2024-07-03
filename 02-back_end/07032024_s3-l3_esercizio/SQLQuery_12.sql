-- 12) La media del costo del trasporto raggruppati per paese di spedizione (ShipCountry) --
SELECT o.ShipCountry, AVG(o.Freight) as [Media spese di trasporto]
FROM Orders as o
GROUP BY o.ShipCountry
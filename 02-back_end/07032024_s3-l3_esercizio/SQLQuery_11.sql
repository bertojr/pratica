-- 11) Numero totale di ordini raggruppati per paese di spedizione (ShipCountry) --
SELECT o.ShipCountry, COUNT(o.OrderID) as [Totale ordini]
FROM Orders as o
GROUP BY ShipCountry
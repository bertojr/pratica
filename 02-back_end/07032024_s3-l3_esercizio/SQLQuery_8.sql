-- Totale di UnitPrice * Quantity raggruppato per ogni ordine --
SELECT od.OrderID, SUM(od.UnitPrice*od.Quantity) as [Totale ordine]
FROM [Order Details] as od
GROUP BY od.OrderID
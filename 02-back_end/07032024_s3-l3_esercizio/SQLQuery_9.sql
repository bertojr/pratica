-- 9) Totale di UnitPrice * Quantity solo dell'ordine con id=10248 --
SELECT od.OrderID, SUM(od.UnitPrice*od.Quantity) as [Totale ordine 10248]
FROM [Order Details] as od
WHERE od.OrderID = 10248
GROUP BY od.OrderID
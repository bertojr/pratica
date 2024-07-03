-- 10) Numero di prodotti censiti per ogni categoria --
SELECT c.CategoryName, COUNT(p.ProductID) as [Totale prodotti]
FROM Categories as c JOIN Products as p ON c.CategoryID = p.CategoryID
GROUP BY c.CategoryName
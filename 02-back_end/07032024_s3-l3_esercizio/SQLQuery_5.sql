-- La media aritmetica del costo del trasporto dei soli ordini effettuati dal cliente "BOTTM" --
SELECT AVG(Freight) as [Media costo trasporto del cliente BOTTM]
FROM Orders as o
WHERE o.CustomerID = 'bottm'
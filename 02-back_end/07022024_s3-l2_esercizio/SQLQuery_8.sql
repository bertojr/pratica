-- Selezione di tutti gli ordini del cliente con ID "BOTTM" le cui spese di trasporto --
-- superano l'importo di 50 --
SELECT *
FROM Orders
WHERE CustomerID = 'BOTTM' AND Freight >= 50
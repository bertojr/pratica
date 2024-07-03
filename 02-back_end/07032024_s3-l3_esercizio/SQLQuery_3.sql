-- Numero totale di clienti che abitano a Londra --
SELECT COUNT(*) AS [Totale clienti che abitano a Londra]
FROM Employees
WHERE City = 'London'
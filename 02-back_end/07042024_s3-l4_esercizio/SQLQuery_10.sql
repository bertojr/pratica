-- Visualizzare gli impiegati assunti dall’ 01/01/2007 all’ 01/01/2008 --
SELECT *
FROM Impiegato JOIN Impiego on Impiegato.Id = Impiego.FK_Impiegato
WHERE Impiego.Assunzione BETWEEN '2015-01-01' AND '2016-01-01'
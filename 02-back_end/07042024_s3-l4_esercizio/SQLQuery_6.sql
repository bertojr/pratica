-- Visualizzare tutti gli impiegati cui il cognome cominci con una lettera G e li visualizzi in ordine alfabetico --
SELECT * 
FROM Impiegato
WHERE Impiegato.Cognome LIKE 'g%'
ORDER BY Impiegato.Nome ASC
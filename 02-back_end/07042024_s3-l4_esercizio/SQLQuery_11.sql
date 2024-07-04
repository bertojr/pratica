-- Tramite una query parametrica che identifichi il tipo di impiego, visualizzare tutti gli impiegati che corrispondono a quel tipo di impiego --
SELECT *
FROM Impiegato JOIN Impiego on Impiegato.Id = Impiego.FK_Impiegato
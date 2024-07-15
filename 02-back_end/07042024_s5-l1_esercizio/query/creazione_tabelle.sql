CREATE TABLE Clienti (
	ClienteID INT PRIMARY KEY,
	Nome NVARCHAR(100),
	CF NVARCHAR(16) NULL,
	PartitaIVA NVARCHAR(11) NULL,
);

CREATE TABLE Spedizioni (
	SpedizioneID INT PRIMARY KEY,
	ClienteID INT,  
	NumeroIdentificativo NVARCHAR(50),
	DataSpedizione DATETIME2,
	Peso DECIMAL(5, 2),
	CittaDestinataria NVARCHAR(100),
	IndirizzoDestinatario NVARCHAR(255),
	NominativoDestinatario NVARCHAR(100),
	CostoSpedizione DECIMAL(10, 2),
	DataConsegnaPrevista DATETIME2,
	FOREIGN KEY (ClienteID) REFERENCES Clienti(ClienteID)
);

CREATE TABLE StatiSpedizione (
	StatoID INT PRIMARY KEY,
	SpedizioneID INT,
	Stato NVARCHAR(100),
	Luogo NVARCHAR(100),
	Descrizione NVARCHAR(MAX) NULL,
	DataOra DATETIME2 DEFAULT GETDATE(),
	FOREIGN KEY (SpedizioneID) REFERENCES Spedizioni(SpedizioneID)
)


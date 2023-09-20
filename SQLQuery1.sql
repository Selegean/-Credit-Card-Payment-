use CardDataBas

GO

Create Table Carduri(

IdCard int Primary Key Identity,
CardNumber varchar(16) Not Null,
CardHolder varchar(30) Not Null,
ExpirationMM int not Null,
ExpirationYY int not Null,
CVV int not null
)

GO

select * from Carduri

GO

INSERT INTO Carduri (CardNumber, CardHolder,ExpirationMM,ExpirationYY,CVV) VALUES ('1234567890123456', 'Selegeab',1,1,112)
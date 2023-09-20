import {numarCard1} from "./script.js";

const sql = require('mssql/msnodesqlv8');

const config = {
  server: 'DANUPC\\SQLEXPRESS',
  database: 'CardDataBase',
  driver: "msnodesqlv8",
  options: {
    trustedConnection: true,
  },
};


sql.connect(config, function (err) {
    if (err) {
        console.log('Eroare la conectarea la baza de date', err);
        return;
    }

    const request = new sql.Request();

    //const card = require('./card');
    // import {numarCard1} from '/s.js';
    // var numarCard = document.getElementById("only4").value;

    const text1 = numarCard1;
    const text2 = 'Valoare2';
    const text3 = '02';
    const text4 = '05';
    const text5 = '234';
    

    request.query(`INSERT INTO Carduri (CardNumber, CardHolder,ExpirationMM,ExpirationYY,CVV) VALUES ('${text1}', '${text2}', '${text3}','${text4}','${text5}')`, function (err, result) {
        if (err) {
            console.log('Eroare la inserarea datelor', err);
        } else {
            console.log('Date inserate cu succes în baza de date');
        }

        sql.close();
    });
});
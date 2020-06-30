const mysql = require('mysql2');
const fs = require('fs');
const path = require('path');

var connection = mysql.createConnection({
    host: 'pa****.mysql.database.azure.com',
    port: '3306',
    user: 'pan******sql',
    password: 'Ja*****0',
    database: 'mysql',
    ssl: {
        ca: fs.readFileSync(path.resolve(__dirname, 'BaltimoreCyberTrustRoot.crt.pem'))
    }
});

connection.connect();

connection.query('SELECT *FROM USER', function (error, results) {
    if (error) throw error;
    for (i = 0;i < results.length; i++) { 
        console.log('The user is: ', results[i].User);
    }
    
});
connection.end();
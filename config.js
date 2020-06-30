const fs = require('fs');
const path = require('path');

module.exports = {

    /**Declaration of databases for my development environment**/
      "development": {
          "databases": {
              "dbinmysql": {
                  "database": "mysql", //you should always save these values in environment variables
                  "username": "***@p***mysql",  //only for testing purposes you can also define the values here
                  "password":  "Ja***",
                  "host": "*****mysql.mysql.database.azure.com",
                  "port": 3306,
                  "ssl":true,
                  "dialect": "mysql",  //here you need to define the dialect of your databse, in my case it is Postgres
                  "dialectOptions": {
                    ssl: {
                        ca: fs.readFileSync(path.resolve(__dirname, 'BaltimoreCyberTrustRoot.crt.pem'))
                      }
                  },
              },
              "dbinsqlserver": {
                  "database": "pa*****db", 
                  "username": "pa***i",  
                  "password":  "J*****0",
                  "host": "***sqlserver.database.windows.net",
                  "port": 1433,
                  "dialect": "mssql",  //second database can have a different dialect
                  "dialectOptions": {
                    options: {
                        encrypt: true,
                    }
                }
              },
          },
      }
  }
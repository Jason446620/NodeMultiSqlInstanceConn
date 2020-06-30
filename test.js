const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const { QueryTypes } = require('sequelize');

//Load the configuration from the config.js
const config = require(`./config.js`)[env];

//Create an empty object which can store our databases
const db = {};

//Extract the database information into an array
const databases = Object.keys(config.databases);

//Loop over the array and create a new Sequelize instance for every database from config.js
for(let i = 0; i < databases.length; ++i) {
    let database = databases[i];
    let dbPath = config.databases[database];
    console.log("try to connecting "+database);
    //Store the database connection in our db object
    db[database] = new Sequelize( dbPath.database, dbPath.username, dbPath.password, dbPath );
    if (database == 'dbinmysql') {
        const results = db[database].query("SELECT *FROM USER", { type: QueryTypes.SELECT })
    } else if (database == 'dbinsqlserver') {
        const results = db[database].query("SELECT *FROM TEST", { type: QueryTypes.SELECT })
    }
}

/**Load Sequelize Models**/
const mySql= require('mysql2');
const pool= mySql.createPool({
        host: 'localhost',
        user: 'root',
        database: 'appointment',
        password: 'Jhumpu@234'
})

module.exports= pool.promise();
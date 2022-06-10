const mysql = require('mysql2')

const pool = mysql.createPool({
    //connectionLimit: it is the amount of connctions(or users) using that database 
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'tours'
})

module.exports = pool 
const Pool = require('pg').Pool
require('dotenv').config()

console.log(process.env.NAME, process.env.PASSWORD, process.env.HOST, process.env.DBPORT)

const pool = new Pool({
    user: process.env.NAME,
    password: process.env.PASSWORD,
    host: process.env.HOST,
    port: process.env.DBPORT,
    database: 'todoapp'
})

module.exports = pool
const { Pool } = require('pg')

const conn = new Pool({
    user: 'postgres',
    host : 'localhost',
    database : 'short_links',
    password : '',
    port : 5432
})

module.exports = conn
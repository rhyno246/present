const mysql = require('mysql');
var pool = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'password',
    database : 'nodejs_sql'
});

export default pool;
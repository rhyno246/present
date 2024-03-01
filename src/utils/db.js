const mysql = require('mysql');
var pool = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'admin',
    database : 'nodejs_sql'
});

export default pool;
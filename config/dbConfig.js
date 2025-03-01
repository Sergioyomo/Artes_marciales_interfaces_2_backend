// config/dbConfig.js
const mysql = require('mysql2');

const dbConfig = {
    host: 'turntable.proxy.rlwy.net',
    port: 32785,
    user: 'artesmarciales',
    password: 'artesmarciales',
    database: 'railway',
    dateStrings: true
};

const db = mysql.createConnection(dbConfig);

db.connect(err => {
    if (err) {
        console.error('Error al conectar a la base de datos:', err);
    } else {
        console.log('Conexión exitosa a la base de datos');
    }
});

module.exports = db;

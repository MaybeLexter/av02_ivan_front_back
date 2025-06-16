const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',          
  password: '', 
  database: 'vampiros_db'
});

connection.connect(err => {
  if (err) {
    console.error('Erro ao conectar no MySQL:', err);
    process.exit(1);
  }
  console.log('Conectado ao banco de dados MySQL (vampiros_db)');
});

module.exports = connection;

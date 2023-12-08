import mysql from 'mysql2';

export const db = mysql.createConnection({
  host: 'localhost',
  database: 'cashcore',
  user: 'root',
  password: '',
});

const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  user: 'postgres',
  password: 'onja',
  database: 'mlr1',
  port: 5432,
});

pool.connect((err) => {
  if (err) {
    console.error('Error connecting to PostgreSQL', err.stack);
  } else {
    console.log('Connected to PostgreSQL successfully');
  }
});

module.exports = pool;

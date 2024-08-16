require('dotenv').config(); // Charger les variables d'environnement à partir du fichier .env

const { Pool } = require('pg');

// Construire la chaîne de connexion à partir de la variable d'environnement
const connectionString = process.env.POSTGRES_URL;

console.log('Connecting to PostgreSQL with URL:', connectionString);

const pool = new Pool({
  connectionString: connectionString,
  ssl: {
    rejectUnauthorized: false // Optionnel, en fonction de votre configuration SSL
  }
});

pool.connect((err, client, release) => {
  if (err) {
    console.error('Error connecting to PostgreSQL', err.stack);
  } else {
    console.log('Connected to PostgreSQL successfully');
    release();
  }
});

module.exports = pool;






// const { Pool } = require('pg');

// const pool = new Pool({
//   host: 'localhost',
//   user: 'postgres',
//   password: 'onja',
//   database: 'mlr1',
//   port: 5432,
// });

// pool.connect((err) => {
//   if (err) {
//     console.error('Error connecting to PostgreSQL', err.stack);
//   } else {
//     console.log('Connected to PostgreSQL successfully');
//   }
// });

// module.exports = pool;


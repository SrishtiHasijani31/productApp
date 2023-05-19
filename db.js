const { Pool } = require('pg');

// Create a new pool instance with your database connection details
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'Product',
  password: 'Glasgow',
  port: 5432, // or your PostgreSQL port number
});

module.exports = pool;
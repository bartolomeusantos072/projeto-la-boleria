import pg from 'pg';

const { Pool } = pg;

const database = new Pool({
  user: 'postgres',
  host: 'localhost',
  port: 5432,
  database: 'la_Boleira',
  password: 'thmpv2020'
});

export default database;
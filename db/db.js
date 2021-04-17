const { Pool } = require("pg");
require("dotenv").config();

//config for dev
const devConfig = {
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  database: process.env.PG_DB
};

//postgres config for production
const prodConfig = {
  connectionString: process.env.DATABASE_URL, //heroku addon
  ssl: {
    rejectUnauthorized: false
  }
};

const pool = new Pool(
  process.env.NODE_ENV === "production" ? prodConfig : devConfig
);

module.exports = pool;

const { Client } = require("pg");
require("dotenv").config();

const database = new Client({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: `${process.env.PASSWORD}`,
  database: `${process.env.DATABASE}`,
});

database.connect((err) => {
  if (!err) {
    console.log("connected");
  } else {
    console.log(err);
  }
});

module.exports = { database };

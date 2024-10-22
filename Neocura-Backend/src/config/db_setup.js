const { Client } = require("pg");

const database = new Client({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "0000",
  database: "neocura",
});

database.connect((err) => {
  if (!err) {
    console.log("connected");
  } else {
    console.log(err);
  }
});

module.exports = { database };

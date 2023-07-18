const { Client } = require("pg");

const database = new Client({
  host: "localhost",
  user: "postgres",
  port: 5432,
<<<<<<< HEAD
  password: "21076",
=======
  password: "ahmed308",
>>>>>>> 4f098213e63799d12458cd1b31dc315632048890
  database: "DocNextDoor",
});

database.connect((err) => {
  if (!err) {
    console.log("connected");
  } else {
    console.log(err);
  }
});

module.exports = { database };

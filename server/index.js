const express = require("express");
const app = express();
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "centie",
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Dashboard
app.get("/api/getInnovatorsTotal", (req, res) => {
  const sqlQuery = "SELECT COUNT(innovator_id) FROM innovators";
  db.query(sqlQuery, (err, result) => {
    if (err == null) {
      res.send(JSON.stringify(result[0]["COUNT(innovator_id)"]));
    } else {
      console.error(err);
    }
  });
});

app.get("/api/getInnovationTotal", (req, res) => {
  const sqlQuery = "SELECT COUNT(innovation_id) FROM innovation";
  db.query(sqlQuery, (err, result) => {
    if (err == null) {
      res.send(JSON.stringify(result[0]["COUNT(innovation_id)"]));
    } else {
      console.error(err);
    }
  });
});

app.get("/api/getjournalsTotal", (req, res) => {
  const sqlQuery = "SELECT COUNT(journal_id) FROM journal";
  db.query(sqlQuery, (err, result) => {
    if (err == null) {
      res.send(JSON.stringify(result[0]["COUNT(journal_id)"]));
    } else {
      console.error(err);
    }
  });
});

//users
app.get("/api/getUsers", (req, res) => {
  const sqlQuery = "SELECT * FROM users";
  db.query(sqlQuery, (err, result) => {
    if (err == null) {
      res.send(result);
    } else {
      console.error(err);
    }
  });
});

//products
app.get("/api/products", (req, res) => {
  const sqlQuery = "SELECT * FROM users";
  db.query(sqlQuery, (err, result) => {
    if (err == null) {
      res.send(result);
    } else {
      console.error(err);
    }
  });
});

app.listen(5000, () => {
  console.log("Running on port 5000");
});

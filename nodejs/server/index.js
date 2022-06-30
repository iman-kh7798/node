const express = require("express");
const mysql = require("mysql");
let connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "imandb",
});

connection.connect(function (err) {
  if (err) {
    return console.error("error: " + err.message);
  }
  console.log("Connected to the MySQL server.");
});
const app = express();
app.use(express.json());

app.post("/", function (req, res) {
  const data = req.body;
  console.log(data);
  const searchSql = `SELECT * FROM users name LIKE '%${data?.name}%'`;
  connection.query(searchSql, (err, result) => {
    console.log(err);
    res.send(result);
  });
});

app.post("/create", function (req, res) {
  const data = req.body;
  connection.query(
    `INSERT INTO users (name, sur_name, phone, email) VALUES ('${data.name}','${data.sur_name}','${data.phone}','${data.email}')`,
    (err, result) => {
      if (err) throw err;
      res.send("success");
    }
  );
});

app.get("/:id", function (req, res) {
  const { id } = req.params;
  connection.query(`SELECT * FROM users WHERE id = '${id}'`, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

app.post("/:id", function (req, res) {
  const { id } = req.params;
  const data = req.body;
  connection.query(
    `UPDATE users SET name = '${data.name}', sur_name = '${data.sur_name}', phone='${data.phone}', email='${data.email}' WHERE id = '${id}'`,
    (err, result) => {
      if (err) throw err;
      res.send(result);
    }
  );
});

app.delete("/:id", function (req, res) {
  const { id } = req.params;
  connection.query(`DELETE FROM users WHERE id = '${id}'`, (err, result) => {
    if (err) throw err;
    res.send("succes");
  });
});

app.listen(3000, function () {
  console.log("server started");
});

const { app } = require("../..");

app.post("/", function (req, res) {
    const data = req.body;
    const searchSql = `SELECT * FROM users WHERE name LIKE '%${nullToStr(
      data?.name
    )}%' AND sur_name LIKE '%${nullToStr(
      data?.sur_name
    )}%' AND phone LIKE '%${nullToStr(
      data?.phone
    )}%' AND email LIKE '%${nullToStr(data?.email)}%'`;
    connection.query(searchSql, (err, result) => {
      res.send(result);
    });
  });
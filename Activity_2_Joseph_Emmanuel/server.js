var http = require("http");
var fs = require("fs");
var fs2 = require("fs");
var connect = require("connect");
var serveStatic = require("serve-static");
const bodyParser = require("body-parser");
var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "dbnode",
});

// initializing your app
var app = connect();

app.use(serveStatic("public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use((req, res) => {
  if (req.method === "POST") {
    console.log(req.body);

    // res.write(JSON.stringify(req.body));
    con.connect(function (err) {
      if (err) throw err;
      console.log("Connected!");
      var sql = "INSERT INTO pdb (fname,lname,email) values ? ";

      //   fname: req.body.fname,
      //   lname: req.body.lname,
      //   email: req.body.email,
      var post = [
        [req.body.fname, req.body.lname, req.body.email],
        [req.body.fname2, req.body.lname2, req.body.email2],
      ];
      con.query(sql, [post], (err, ress) => {
        if (err) throw err;
        else {
          fs2.readFile("Tic-Tac-Toe.html", (err, data) => {
            res.write(data);
            res.end();
          });

          console.log("success");
        }

        console.log(ress);
      });
    });
  } else {
    fs.readFile("nodeCode.html", (err, data) => {
      res.write(data);
      res.end();
    });
  }
});

http.createServer(app).listen(8000);

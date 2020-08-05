var http = require("http");
var fs = require("fs");
var connect = require("connect");
var serveStatic = require("serve-static");
const bodyParser = require("body-parser");

// initializing your app
var app = connect();

app.use(serveStatic("public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// app.use((req, res) => {
//   if (req.method === "POST") {
//     console.log(req.body);
//     res.write(JSON.stringify(req.body));
//     res.end();
//   } else {
//     fs.readFile("nodeCode.html", (err, data) => {
//       res.write(data);
//       res.end();
//     });
//   }
// });

http.createServer(app).listen(8000);

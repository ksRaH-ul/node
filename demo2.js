var http = require("http");
var fs = require("fs");
var querystring = require("querystring");

var server = http.createServer(function (req, res) {

  if (req.method === "POST" && req.url === "/login") {
    let body = "";

    req.on("data", chunk => body += chunk.toString());

    req.on("end", () => {
      const parsedData = querystring.parse(body);

      console.log("Login Details:");
      console.log("Username:", parsedData.username);
      console.log("Password:", parsedData.password);

      res.end("Login Successful");
    });
  }

  else if (req.method === "POST" && req.url === "/signup") {
    let body = "";

    req.on("data", chunk => body += chunk.toString());

    req.on("end", () => {
      const parsedData = querystring.parse(body);

      console.log("Signup Details:");
      console.log("Username:", parsedData.username);
      console.log("Password:", parsedData.password);

      res.end("Signup Successful");
    });
  }

  else if (req.url === "/") {
    fs.readFile("default.html", function (err, data) {
      if (err) throw err;
      res.end(data);
    });
  }


  else if (req.url === "/login") {
    fs.readFile("login.html", function (err, data) {
      if (err) throw err;
      res.end(data);
    });
  }

  else if (req.url === "/signup") {
    fs.readFile("signup.html", function (err, data) {
      if (err) throw err;
      res.end(data);
    });
  }

  else {
    res.statusCode = 404;
    res.end("404 Page Not Found");
  }

});

server.listen(3000);

var http = require('http');

var server = http.createServer(function (req, res) {
    if (req.url === '/') {

    res.write("Welcome to ABC College\n");
    res.write("Method: " + req.method + "\n");
    }

   else if (req.url === '/about') {
        var html = `<h1>About ABC College</h1>`;
        res.write(html + "\n");
        res.write("Method: " + req.method + "\n");
    }
    else  {
        res.statusCode = 404;
        res.statusMessage = "Not Found";
        res.write("Page Not Found\n");
        res.write("Method: " + req.method + "\n");
    }

    res.end();
});

server.listen(8080);


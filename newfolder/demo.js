 var http= require('http');
 var mongoclient = require('mongodb').MongoClient;
 var fs = require('fs');
 var querystring =require('querystring');
 var url = "mongodb://localhost:27017/";    
var db;
 var client =new mongoclient(url);
 client.connect()
 .then(()=>{
    console.log("Connected to MongoDB");
     db = client.db("testdb");
     http.createServer((req, res) => {

        if (req.url === '/home') {
            fs.readFile('home.html', (err, data) => {
                if (err) throw err;
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(data);
                res.end();
            });
        } else if (req.url === '/details') {
           db.collection("location").find().toArray()
            .then(locations => {

        fs.readFile('details.html', 'utf8', (err, html) => {
            if (err) {
                res.end("Form file not found");
                return;
            }

            let options = `<option value="">Select Location</option>`;
            locations.forEach(loc => {
                options += `<option value="${loc.item}">${loc.item}</option>`;
            });

            html = html.replace('<!-- LOCATIONS_PLACEHOLDER -->', options);

            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(html);
        });
    });

        }
        else if( req.url=== '/submit' && req.method === 'POST'){   
            var body='';
            req.on('data',chunk=>{
                body+=chunk.toString();
            });
            req.on('end',async()=>{
                var formData=querystring.parse(body);

                await db.collection("details").insertOne({
                    name:formData.name,
                    age:parseInt(formData.age),
                    address:formData.address,
                    location:formData.location   
                })
                res.writeHead(302,{'Location':'/home'});
                res.end();
    });
        }

        else if (req.url === '/info') {
           db.collection("details").find().toArray()
        .then(data => {
            let html = "<h2>Stored Details</h2>";
            data.forEach(d => {
                html += `<p>${d.name} | ${d.age} | ${d.address} | ${d.location}</p>`;
            });
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(html);
        });
        }
        else {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.write('<h1>404 Page Not Found</h1>');
            res.end();
        }


    }).listen(8080);

 })
 .catch((err)=>{
    console.log("Error connecting to MongoDB:", err);
 }  );


    

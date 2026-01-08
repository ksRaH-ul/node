var http=require('http');
var EventEmitter = require('events');
var fs= require('fs');

var eventemitter = new EventEmitter();

eventemitter.on("pageloaded",(pagename)=>{
    console.log(`The ${pagename} page was loaded`);
});


var server=http.createServer((req,res)=>{
 if(req.url==='/about'){
    fs.readFile('about.html',(err,data)=>{
        if(err) throw err;
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data);
        eventemitter.emit("pageloaded","about");
        res.end();
    });
    } else if(req.url==='/contact'){
        fs.readFile('contact.html',(err,data)=>{
            if(err) throw err;
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write(data);
            eventemitter.emit("pageloaded","contact");
            res.end();
        });
    } else{
        res.writeHead(404,{'Content-Type':'text/html'});
        res.write('<h1>404 Page Not Found</h1>');
        
        res.end();
    }
});


server.listen(3000);
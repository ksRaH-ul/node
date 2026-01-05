var http= require('http');

var server= http.createServer(function(req,res){
    if(req.url === '/'){
        res.write("welcome to home page ");
    }
    else if(req.url === '/contact'){
        res.write("cotnact us on contact@email.com ");
    }   
    else if(req.url === '/about'){
        res.write("this is simple Node.js server.");
    }
    else{
        res.write("404 Page not found ");
    }       
    res.end();
});

server.listen(3000);


var fs = require("fs");
var data = 'Books are a uniquely portable magic';

var wrStream = fs.createWriteStream('result.txt');

wrStream.write(data,'UTF8');

wrStream.end();

wrStream.on('finish', function() {
   console.log("Writing has completed.");
});

wrStream.on('error', function(err) {
   console.log(err.stack);
});

var buf1 = new Buffer.from('Hai');
var buf2 = new Buffer.alloc(2);
buf1.copy(buf2);
console.log("Buffer2 has the content : " + buf2.toString());
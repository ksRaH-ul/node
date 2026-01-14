var buf = new Buffer.from("Nodejs is fast");
var a=buf.slice(0,6)
console.log(a.toString());
var buf2 = new Buffer.from("Powerfull");
var b=a.compare(buf2);

if(b<0)
{
console.log("buf1 comes before buf2");

}
else if (b==0)
{
console.log("buf1 is same as buf2");        
}       
else
{
console.log("buf1 comes after buf2");
}      

console.log(a.toJSON());
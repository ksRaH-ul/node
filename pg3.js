function check(name,c,w)
{
   return (name!="unknown")?  ((c*4)-(w*1)): "invalid student";
}

f=check("unknown",4,2);
console.log(f);
console.log(typeof f);


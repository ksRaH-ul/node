var i,j;
var out="";
for(i=5;i>0;i--)
{
    for(j=0;j<i;j++)
    {
        out+="*";
    }
    out+="\n";
}
console.log(out);
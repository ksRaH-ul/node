var i,j,k=4;
var out="";
for(i=0;i<5;i++)
{
    for(j=0;j<5;j++)
    {
        if(i==j|| j==k)
        {
            out+="*";
        }
        
        out+=" ";
    }
    k--;
    out+="\n";
}
console.log(out);
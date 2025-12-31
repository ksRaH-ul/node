var i,j;
var output="";
for(i=0;i<5;i++)
{
    for(j=0;j<5;j++)
    {
        if(j==0||j==4 || i === j)
        {
            output+="*";
        }
        
        else{
            output+=" ";
        }
    }
    output+="\n";
}
console.log(output);

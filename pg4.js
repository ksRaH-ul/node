function updatewallet(name,initial,add,spent)
{
    return (name!="guest")? (initial+add)-spent:"Access Denied";
}
f=updatewallet("guest",1000,500,700)
console.log(f, typeof f);

let data={
    name:"Walter White",
    message:" Welcome to the new platform! Hope you enjoy your time here ",
    func:function()
    {
        console.log(this.name.charAt(0));
        console.log(this.message.length);
        console.log(this.message.slice(0,15));
        console.log(this.message.substring(0,15));
        console.log(this.name.toUpperCase());
        console.log(this.message.toLowerCase());
        console.log(this.message.trim());
        console.log(this.name.split(" "));
        console.log(this.message.search(/welcome/i));
        console.log(this.name.concat(" "+this.message));
        
        
        
        
    }
}
data.func()
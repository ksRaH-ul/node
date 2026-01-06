const fs = require("fs");

fs.writeFile("user.txt", "Welcome John", (err) => {
  if (err) throw err;

  
  fs.readFile("user.txt", "utf-8", (err, data) => {
    if (err) throw err;

    
    const name = data.split(" ")[1]; 

    
    function checkUser(username) {
      if (username === "John") {
        console.log("Valid User");
      } else {
        console.log("Unknown User");
      }
    }

    checkUser(name);
  });
});

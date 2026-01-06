const fs = require("fs");


const content = "Name: Riya\nAge: 22\nCity: Mumbai";

fs.writeFile("profile.txt", content, (err) => {
  if (err) throw err;


  fs.readFile("profile.txt", "utf-8", (err, data) => {
    if (err) throw err;

 
    const lines = data.split("\n");       
    const nameLine = lines[0];            
    const name = nameLine.split(": ")[1]; 

    function verifyProfile(name) {
      if (name === "Riya") {
        console.log("Profile verified");
      } else {
        console.log("Invalid profile");
      }
    }

    verifyProfile(name);


    fs.appendFile("profile.txt", "\nStatus: Active", (err) => {
      if (err) throw err;


      fs.rename("profile.txt", "verified_profile.txt", (err) => {
        if (err) throw err;
        console.log("File renamed to verified_profile.txt");
      });
    });
  });
});

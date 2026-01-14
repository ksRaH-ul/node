const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017/";

MongoClient.connect(url)
  .then(client => {
    const db = client.db("mashupdb");
    const leads = db.collection("leads");

    return leads.insertMany([
      { name: "Arjun", city: "Kannur" },
      { name: "Meera", city: "Kochi" },
      { name: "Lakshmi", city: "Calicut" }
    ])
    .then(() => {
      console.log("Leads inserted");

    
      return leads.findOne(
        { city: "Kochi" },
        { projection: { _id: 0, name: 1, city: 1 } }
      );
    })
    .then(result => {
      console.log("Lead from Kochi:", result);
      client.close();
    });
  })
  .catch(err => {
    console.error(err);
  });

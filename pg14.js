const fs = require("fs");
const path = require("path");

const introPath = path.join(__dirname, "intro.txt");
const conclusionPath = path.join(__dirname, "conclusion.txt");
const outputPath = path.join(__dirname, "full_report.txt");

let introChunks = [];
let conclusionChunks = [];


const introStream = fs.createReadStream(introPath);

introStream.on("data", (chunk) => {
  introChunks.push(chunk);
});

introStream.on("error", (err) => {
  console.error("Error reading intro.txt:", err.message);
});


introStream.on("end", () => {

  const conclusionStream = fs.createReadStream(conclusionPath);

  conclusionStream.on("data", (chunk) => {
    conclusionChunks.push(chunk);
  });

  conclusionStream.on("error", (err) => {
    console.error("Error reading conclusion.txt:", err.message);
  });


  conclusionStream.on("end", () => {
    const introBuffer = Buffer.concat(introChunks);
    const conclusionBuffer = Buffer.concat(conclusionChunks);
    const finalBuffer = Buffer.concat([introBuffer, conclusionBuffer]);

    const writeStream = fs.createWriteStream(outputPath);

    writeStream.write(finalBuffer);
    writeStream.end();

    writeStream.on("finish", () => {
      console.log("Merging complete!");
    });

    writeStream.on("error", (err) => {
      console.error("Error writing full_report.txt:", err.message);
    });
  });
});

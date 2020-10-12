const fs = require("fs");
console.log("Before File Read");

fs.readFile("/file.md", (err, data) => {
    if (err) throw err;
    console.log("File Read Complete");
})

console.log("After File Read");

// In which order will the console logs be printed?
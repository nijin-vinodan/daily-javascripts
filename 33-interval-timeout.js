let timer;

timer = setInterval(() => {
    console.log("Interval Called");
}, 1000);

timer = setTimeout(() => {
    console.log("Timeout Called");
}, 3000);

// Will both setInterval and setTimeout run or just one?
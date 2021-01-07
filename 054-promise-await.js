const run = (id) => {
    return new Promise((resolve, reject) => {
        console.log("Starting", id);
        setTimeout(() => {
            console.log("Stopping", id);
        }, 500);
    });
}

// Case 1
run(1);
run(2);

// Case 2
await run(1);
await run(2);


// Predict the output when Case 1 and Case 2 are run separately.
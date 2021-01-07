const runMe = () => {
    try {
        throw new Error(10);
    } catch (err) {
        err = 5;
        console.log(err);
    }
};

runMe();

// What is the Output?
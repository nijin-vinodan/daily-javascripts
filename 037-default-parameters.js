const add = (a, b) => {
    if (a === undefined) {
        a = 0;
    }

    if (b === undefined) {
        b = 0;
    }

    return a + b;
};

add(1, 2);
add();

// Simply the add() function definition by using default parameters

const numbers = [1, 2, 3, 4, 5];

function shuffle(arr) {
    return arr.sort(() => Math.random() - 0.5);
}

shuffle(numbers);

// Is it possible to do something like numbers.shuffle() like we have numbers.sort()?
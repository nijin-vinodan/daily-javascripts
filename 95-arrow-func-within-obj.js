const tickerA = {
    count: 0,
    increment: () => {
        return ++this.count;
    }
}

const tickerB = {
    count: 0,
    increment: function () {
        return ++this.count;
    }
}

console.log(tickerA.increment());
console.log(tickerB.increment());

// What's the difference?
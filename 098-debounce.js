function debounce(f, ms) {
    let timeout;
    return function () {
        clearTimeout(timeout);
        timeout = setTimeout(function () {
            f.apply(this, arguments);
        }, ms);
    }
}

function print() {
    console.log("Print");
}

let p = debounce(print, 2000);
p();

setTimeout(() => p(), 300);
setTimeout(() => p(), 700);

// What is the Output?
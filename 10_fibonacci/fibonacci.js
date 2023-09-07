const fibonacci = function(x) {
    if (x < 0) {
        return "OOPS";
    }
    let fib = [0, 1];
    if (x < 2) {
        return fib[x];
    }
    else {
        let y = fib.length -1;
        while (y <= x) {
            fib.push(fib[y] + fib[y-1]);
            y = fib.length -1;
        }
        return fib[x];
    }

};

// Do not edit below this line
module.exports = fibonacci;

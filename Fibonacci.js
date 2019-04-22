function Fibonacci(num) {
    // Try avoid the recursive
    var a = 1, b = 0, temp;
    while (num >= 0) {
        temp = a;
        a = a + b;
        b = temp;
        num--;
    }
    return b;
};

function fibonacciRecursive(num) {
    if (num <= 1) return 1;
  
    return fibonacci(num - 1) + fibonacci(num - 2);
};

exports.Fibonacci = Fibonacci;
exports.fibonacciRecursive = fibonacciRecursive;
var Formulas = (function() {

    var formulas = {};

    formulas.basicFactorial = function basicFactorial(n) {
        // basic recursion steps for factorial:
        // from num n -> 1: n = n * (n-1)
        if (n > 1) {
            return n * basicFactorial(n - 1);
        }
        else {
            return 1;
        }
    };

    formulas.stackedFactorial = function stackedFactorial(n) {

        var total = 1;

        if (n > 1) {
            for (var c = n; c > 1; c--) {
                total = total * c;
            }
        }
        return total;
    };

    var fibonacciR = function (n) {
        if (n < 2) {
            return n;
        }
        else {
            return fibonacciR(n - 1) + fibonacciR(n - 2);
        }
    }

    var fibonacciM = (function () {

        // bootstrap the first 2 cases
        var memo = [0, 1];

        var fib = function (n) {
            var result = memo[n];
            if (typeof result !== 'number') {
                result = fib(n - 1) + fib(n - 2);
                memo[n] = result;
            }
            return result;
        };
        return fib;
    }());

    return formulas;

}());

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
    }

    return formulas;

}());

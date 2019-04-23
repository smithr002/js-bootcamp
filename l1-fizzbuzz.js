/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/

/*Invul naam*/

for (var fizzbuzz = 1; fizzbuzz <= 100; fizzbuzz++) {

    if (fizzbuzz % 3 === 0 && fizzbuzz % 5 === 0) {
        console.log("FizzBuzz");
    } else if (fizzbuzz % 5 === 0) {
        console.log('Buzz');
    } else if (fizzbuzz % 3 === 0) {
        console.log("Fizz");
    } else {
        console.log(fizzbuzz);
    }
}

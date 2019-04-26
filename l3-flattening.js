/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/

/*Invul naam*/

var arrays = [[1, 2, 3], [4, 5], [6]];

var flatten = arrays.reduce(
    function (acc, curr) {
        return acc.concat(curr);
    }, []);

console.log(flatten);

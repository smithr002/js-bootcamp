/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/

/*Invul naam*/

function maths(minimum, maximum) {
    if (minimum < maximum) {
        return minimum;
    } else {
        return maximum;
    }
}

console.log(maths(6, 17));

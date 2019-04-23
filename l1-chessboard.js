/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/

/*Invul naam*/

var size = 8;

var check = "";

for (var i = 0; i < size; i++) {
    for (var ii = 0; ii < size; ii++) {
        if ((i + ii) % 2 == 0) {
            check += " ";
        } else {
            check += "#";
        }
    }
    check += "\n";
}

console.log(check);

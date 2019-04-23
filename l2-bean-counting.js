/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/

/*Invul naam*/

function countBs(testString) {
    var counter = 0;
    for (var i = 0; i < testString.length; i++) {
        if (testString[i] === "B") {
            counter++;
        }
    }

    return counter;
}

function countChar(testString, testChar) {
    var counter = 0;
    for (var i = 0; i < testString.length; i++) {
        if (testString[i] == testChar) {
            counter++;
        }
    }

    return counter;
}

console.log(countBs("BBC"));

console.log(countChar("kakkerlak", "k"));

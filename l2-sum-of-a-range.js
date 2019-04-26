/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/

/*Invul naam*/

function range(start, end) {
    var arrayList = [];
    for (var i = start; i <= end; i++) {
        arrayList.push(i);
    }
    return arrayList;
}

function sum(arrayList) {
    var arraySum = 0;
    for (var i = 0; i <= arrayList.length; i++) {
        arraySum = arraySum + arrayList[i];
    }
    return arraySum
}

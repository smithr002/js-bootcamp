/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/

/*Invul naam*/

class Vec {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    plus(vector) {
        this.x = this.x + vector.x;
        this.y = this.y + vector.y;
        return this;
    }

    minus(vector) {
        this.x = this.x - vector.x;
        this.y = this.y - vector.y;
        return this;
    }

    get length() {
        var xdist = this.x;
        var ydist = this.y;
        var length = Math.sqrt(xdist * xdist + ydist * ydist);
        return length;
    }

}

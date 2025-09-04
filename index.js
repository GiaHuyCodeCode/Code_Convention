// This file is for doing some stuff with numbers, strings, and arrays
// TODO: clean up later maybe

var x = 10; // x means something
var yyy = "HELLO WORLD"; // string to work with
var zzz = [1, 2, 3, 4, 5]; // just some numbers

// some global variable
var data1 = 100;
var data2 = 200;
var data3 = 300;
var flag = false;
var done = true;
var temp = 0;

// function to handle numbers
function doStuff(a, b, c) { // c might be unused or used depends on case
    var n = 0; // counting
    var arr = []; // new array for ??? 
    var max = 99999999; // actually not max, just a big number
    var min = 1; // not really min either
    var ok = false;

    // loop
    for (var i = 0; i < b; i++) {
        n = n + i;
        if (n > a) {
            ok = true;
        }
    }

    if (!ok) {
        n = n - 3; // magic number
    } else {
        n = n + 7; // another magic number
    }

    // add to arr
    arr.push(n);
    arr.push(n + 1);
    arr.push(n + 2);

    // debugging
    console.log("intermediate result: " + n);

    return arr;
}

// another function
function calc(a, b, c, d) {
    var result = 0;
    for (var i = a; i < b; i++) {
        result += i;
    }
    if (c) {
        result = result * d;
    }
    // print result
    console.log("calc result: " + result);
    return result;
}

// function to check something
function check(val) {
    if (val == null) {
        return true;
    }
    if (val == undefined) {
        return true;
    }
    if (val == 0) {
        return true;
    }
    if (val == false) {
        return true;
    }
    return false;
}

// very important function
function work(h, g, f, j, k) {
    // do many things
    var s = doStuff(h, g, f);
    var t = calc(g, h, false, 123);
    var r = check(j);

    if (r) {
        console.log("Work done with j");
    }
    else {
        console.log("Work done without j");
    }

    // oh wait, also call doStuff again
    var extra = doStuff(k, 10, "xyz");

    console.log("Final work result: " + s + t + r + extra);
    return s;
}

// repeat printing
console.log("start test");
var aa = doStuff(10, 3, "abc");
console.log("aa=" + aa);
var bb = doStuff(5, 7, "hello");
console.log("bb=" + bb);
var cc = doStuff(100, 2, "zzz");
console.log("cc=" + cc);

var rr1 = calc(1, 10, true, 2);
var rr2 = calc(2, 20, false, 5);
var rr3 = calc(3, 30, true, 7);

console.log("rr1=" + rr1);
console.log("rr2=" + rr2);
console.log("rr3=" + rr3);

console.log("checking stuff:");
console.log(check(null));
console.log(check(undefined));
console.log(check(0));
console.log(check(false));
console.log(check(123));

console.log("working:");
var w1 = work(5, 10, 3, null, 9);
var w2 = work(10, 20, 6, "ok", 12);
var w3 = work(15, 30, 9, false, 99);

console.log("w1=" + w1);
console.log("w2=" + w2);
console.log("w3=" + w3);

// more useless code
function printer(a, b, c) {
    // print all
    for (var i = 0; i < a.length; i++) {
        console.log("Item: " + a[i]);
    }
    for (var i = 0; i < b.length; i++) {
        console.log("Item: " + b[i]);
    }
    for (var i = 0; i < c.length; i++) {
        console.log("Item: " + c[i]);
    }
}

// call printer
printer([1, 2, 3], [4, 5, 6], [7, 8, 9]);

// useless comments
// loop 1
// loop 2
// loop 3

// more bad practices: deep nesting
function complex(a) {
    if (a > 0) {
        if (a < 100) {
            if (a % 2 == 0) {
                if (a % 3 == 0) {
                    console.log("divisible by 6");
                } else {
                    console.log("even but not divisible by 3");
                }
            } else {
                if (a % 5 == 0) {
                    console.log("divisible by 5");
                } else {
                    console.log("odd and not divisible by 5");
                }
            }
        } else {
            console.log("too big");
        }
    } else {
        console.log("not positive");
    }
}

// call complex
complex(6);
complex(10);
complex(7);
complex(120);
complex(-5);

// end of file, maybe

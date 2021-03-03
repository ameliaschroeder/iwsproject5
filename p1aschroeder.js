// function that calculates the distance covered by a projectile in a given time (t) with a given initial x position (xi), a given  initial velocity (v), and a given acceleration (a). 
// x= x0 + vt + 1/2at^2

var xi = 0;
var v = 10;
var t = 5;
var a = 1;

document.writeln("initial x position: " + xi + "<br>");
document.writeln("initial velocity: " + v + "<br>");
document.writeln("acceleration: " + a + "<br>");
document.writeln("time elapsed: " + t + "<br>");


function dist(xi, v, t, a) {
    var x = (xi + (v * t) + 0.5 * (a * (t * t)));
    return x;
}

//test function with values

var x = dist(xi, v, t, a);
document.writeln("distance covered: " + x);

console.log(x + " " + xi + " " + a + " " + t + " " + v);
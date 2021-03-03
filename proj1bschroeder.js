//     Amelia Schroeder 
//     Project 1b (js portion)
//     Due Date: Jan 20, 2021
//     Submission date: Jan 20, 2021

// function that calculates the distance covered by a projectile in a given time (t) with a given initial x position (xi), a given  initial velocity (v), and a given acceleration (a). 
// formula:     x= x0 + vt + 1/2at^2
var roundedXString = 15;
var roundedX = 15;

function dist(xi, v, t, a) {
    var x = (xi + (v * t) + 0.5 * (a * (t * t)));
    return x;
}
// Click event handler for button
function onClickMethod() {

    //xi parsing
    var xi = parseFloat(
        document.getElementById("xinit").value);

    //v parsing
    var v = parseFloat(
        document.getElementById("vel").value);

    //t parsing parsing
    var t = parseFloat(
        document.getElementById("time").value);

    //a parsing
    var a = parseFloat(
        document.getElementById("accel").value);

    //x value after calculation
    var x = dist(xi, v, t, a);

    //rounded x
    var roundedX = Math.round(x * 100) / 100;

    //declare output and designate destination to "calc" input box in html
    var output = document.getElementById("calc1b");

    //set output value to rounded x value 
    output.value = roundedX.valueOf();
}


//initialize function adding click event to button 
function init() {
    var button = document.getElementById("btn");
    button.addEventListener("click", onClickMethod);
}
// execute init method when the window loads
window.addEventListener("load", init);

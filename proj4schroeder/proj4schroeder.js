//      Amelia Schroeder 
//      Project 4 js portion
//      Due Date: Feb 26
//      Submission date: Feb 26

function init() {
    var quizArray = JSON.parse(data); //global data variable
    var question = document.getElementsByClassName("question");

    var len = Array.from(question).length;
    var a = document.getElementsByClassName("a");
    var b = document.getElementsByClassName("b");
    var c = document.getElementsByClassName("c");
    var d = document.getElementsByClassName("d");
    for (let i = 0; i < len; i++) {
        question[i].innerHTML =
            quizArray[i].question;

        //sets the value of each empty quiz answer element to the answer of its respective value from the quiz array
        a[i].innerHTML = "a: " + quizArray[i].a;
        b[i].innerHTML = "b: " + quizArray[i].b;
        c[i].innerHTML = "c: " + quizArray[i].c;
        d[i].innerHTML = "d: " + quizArray[i].d;

    }


    function grade() { //grades the quiz
        var image = document.getElementsByClassName("checkorx"); //variable that gets the (now) empty img elements so we can set the src for each later

        var result = new Array(); //array to store the checked radio button values --> "a"=1, "b"=2, "c"=3, ...

        //set of nested for loops
        //first one finds the radio button options
        //second one finds the checked radio button values

        var ra = document.getElementsByClassName("ra");
        var rb = document.getElementsByClassName("rb");
        var rc = document.getElementsByClassName("rc");
        var rd = document.getElementsByClassName("rd");

        for (var i = 0; i < len; i++) { //loop that runs as many times as there questions
            image[i].style.display = "none"; //creates image element but makes it so it is not displayed

            if (ra[i].checked) {
                var answerValue = 1;
                result.push(answerValue);
            } else if (rb[i].checked) {
                var answerValue = 2;
                result.push(answerValue);
            } else if (rc[i].checked) {
                var answerValue = 3;
                result.push(answerValue);
            } else if (rd[i].checked) {
                var answerValue = 4;
                result.push(answerValue);
            } else {
                result.push(0);
            }

            console.log(result);
        }
        //this for loop takes the result array from the previous nested loop system and compares the values of the checked radio buttons to the "correctAnswer" value for each question in the json file
        // if these values match the source of the empty image value next to the question is set to check.png which is a transparent checkmark, otherwise it sets it to x.png which is a transparent x mark

        for (let i = 0; i < len; i++) {

            //if/else clause checking the values of the results array to those of the correctAnswer value in the JSON file for each quesiton
            if (result[i] == quizArray[i].correctAnswer) { //displays the check image with given styling on questions that are correct
                console.log("correct");
                image[i].src = "images/check.png";

                image[i].style.display = "block";
                image[i].style.width = "10%";
                image[i].style.float = "right";
                image[i].style.backgroundColor = "rgb(202, 217, 207)";

            } else { //displays the x image with given styling on questions that are incorrect or empty
                console.log("incorrect");
                image[i].src = "images/x.png";

                image[i].style.display = "block";
                image[i].style.width = "10%";
                image[i].style.float = "right";
                image[i].style.backgroundColor = "rgb(202, 217, 207)";
            }
        }
    }

    var qhint = document.getElementsByClassName("hint"); //hets hint elements
    var chk = document.getElementsByClassName("show"); //gets checkbox elements

    function showHint() {
        for (i = 0; i < len; i++) {
            if (chk[i].checked) {
                qhint[i].innerHTML = quizArray[i].hint;
            } else {
                qhint[i].innerHTML = null;
            }
        }
    }

    //runs the showHint function if a the show hint checkbox is checked for a given quesiton
    for (i = 0; i < len; i++) {
        chk[i].addEventListener("click", showHint);
    }


    //runs grade() when button id="submit_btn" is clicked
    let submitbtn = document.getElementById("submit_btn");
    submitbtn.addEventListener("click", grade);


}
//executes init() when page loads
window.addEventListener("load", init);
//      Amelia Schroeder 
//      Project 5 (js portion)
//      Due Date: March 4
//      Submission date: March 4

//function that checks that all required input fields are filled and displays a error message if they are not
function validateForm(e) {
    //gets all the instances of class="required" (all in text input elements)
    var requiredField = document.getElementsByClassName("required");

    //creates array from how many class = "required" instances there 
    var len = Array.from(requiredField).length;

    for (let i = 0; i < len; i++) {
        //gets values of required fields as deliniated by class name
        var rFieldValue = requiredField[i].value;
        //gets hidden alert paragraph elements
        var alertP = document.getElementsByClassName("alertP");

        //displays error message next to required field if it is not filled and prevents submission
        if (rFieldValue == "") {

            //required field alert styling
            alertP[i].style.display = "inline";
            alertP[i].style.fontSize = "12px";
            alertP[i].style.fontFamily = "sans-serif";
            alertP[i].style.color = "red";
            alertP[i].style.margin = "0.2em";

            //prevents submission
            e.preventDefault();
        } else {
            //hides error message if filled
            alertP[i].style.display = "none";
        }
    }
}

//function showing delivery instructions element if checkbox is checked
function showDelInstruct(chk) {
    //gets checkbox element
    var chk = document.getElementById("dInstrucChk");

    //gets delivery instruction input box element 
    var dInstruc = document.getElementById("dInstruc");

    //gets delivery instruction label element
    var dInstrucLabel = document.getElementById("dInstrucLabel");

    //shows the optional delivery instructions if the checkbox is checked
    if (chk.checked == true) {
        dInstruc.style.display = "inline";
        dInstrucLabel.style.display = "inline";
        dInstruc.style.width = "100%";

    } else {
        //hides label and textarea
        dInstruc.style.display = "none";
        dInstrucLabel.style.display = "none";
    }
}

//checks email for @ symbol with regular expression
function checkEmail(e) {
    //gets email input value
    var email = document.getElementById("email").value;

    //creates new regular expression that checks for @ symbol
    var re1 = new RegExp("@");

    //gets email error alert element
    var emailAlertP = document.getElementById("emailAlertP");

    //displays error message if email field does not contain @ symbol and prevents submission
    if (re1.test(email) == false) {
        emailAlertP.innerHTML = "Please enter a valid Email address";
        emailAlertP.style.display = "inline";
        emailAlertP.style.float = "right";
        emailAlertP.style.fontSize = "12px";
        emailAlertP.style.fontFamily = "sans-serif";
        emailAlertP.style.margin = "0.2em";
        emailAlertP.style.color = "red";

        e.preventDefault();
    } else {
        emailAlertP.style.display = "none";
    }
}

//runs on window load
function init() {

    //hides all of the error messages 
    var requiredField = document.getElementsByClassName("required");
    var alertP = document.getElementsByClassName("alertP");
    var len = Array.from(requiredField).length;
    for (let i = 0; i < len; i++) {
        alertP[i].style.display = "none";
    }

    //gets form element and adds event listener to submit button
    var f = document.getElementsByName("orderForm");
    f[0].addEventListener("submit", validateForm);
    f[0].addEventListener("submit", checkEmail);

    //runs the show optional delivery instructions function
    showDelInstruct();

}

window.onload = init;
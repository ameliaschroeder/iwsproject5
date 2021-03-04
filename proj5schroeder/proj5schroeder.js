//function that checks that all required input fields are filled and displays a error message if they are not
function validateForm(e) {
    //gets all the instances of class="required" (all in text input elements)
    var requiredField = document.getElementsByClassName("required");

    //creates array from how many class = "required" instances there 
    var len = Array.from(requiredField).length;

    for (let i = 0; i < len; i++) {
        //gets values of required fields as deliniated by class name
        var rFieldValue = requiredField[i].value;

        var alertP = document.getElementsByClassName("alertP");

        if (rFieldValue == "") {
            alertP[i].style.display = "inline";

            //prevents submission
            e.preventDefault();
        } else {
            alertP[i].style.display = "none";
        }
    }
}


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
    } else {
        dInstruc.style.display = "none";
        dInstrucLabel.style.display = "none";

    }
}

function checkEmail(e) {
    var email = document.getElementById("email").value;
    var re1 = new RegExp("@");
    var emailAlertP = document.getElementById("emailAlertP");
    if (re1.test(email) == false) {
        emailAlertP.innerHTML = "Please enter a valid Email address";
        emailAlertP.style.display = "inline";
        e.preventDefault();
    }
}

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
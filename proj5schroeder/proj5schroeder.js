//function that checks that all required input fields are filled and displays a error message if they are not
function validateForm(e) {

    //gets all the instances of class="required" (all in text input elements)
    var requiredField = document.getElementsByClassName("required");

    //gets the divs of all the required input fields
    var rInputDivs = document.getElementsByClassName("reqInputDiv");

    //creates array from how many class = "required" instances there 
    var len = Array.from(requiredField).length;

    for (let i = 0; i < len; i++) {
        //gets values of required fields as deliniated by class name
        var rFieldValue = requiredField[i].value;

        //gets divs of required inputs
        var rInputDiv = rInputDivs[i];

        if (rFieldValue == "") {
            //creates a p element to put the alert in
            var alertP = document.createElement("p");
            //creates text inside p element
            var node = document.createTextNode("Field is Required");
            //puts the text into the p
            alertP.appendChild(node);

            rInputDiv.appendChild(alertP);

            //prevents submission
            e.preventDefault();
        }
    }
}



function init() {
    var f = document.getElementsByName("orderForm");
    f[0].addEventListener("submit", validateForm);
}
window.onload = init;
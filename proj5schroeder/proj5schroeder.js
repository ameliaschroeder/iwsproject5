function init() {
    var fName = document.orderForm.firstName.value

    if (fName == "") {
        var fNameDiv = document.getElementById("fnInput");

        var alertP = document.createElement(p);
        var node = document.createTextNode("Please Enter a Name");
        alertP.appendChild(node);

        fNameDiv.appendChild(alertP);

        //prevents submission
        e.preventDefault();
    }

}
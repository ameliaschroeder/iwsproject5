//     Amelia Schroeder 
//     Project 2a (js portion)
//     Due Date: Feb 1
//     Submission date: Jan 31

//get the names of all cities in a given subcountry and country
//all variables are labeled 1 because they are all attached to button1 and I didn't want the functions to get mixed up
function getCities() {
    var cityArray1 = JSON.parse(data); //parsing JSON data
    var requestedCtry = document.getElementById("countryinput").value; //getting info from text input field in html
    var requestedSc = document.getElementById("subctryinput").value;
    var display1 = ""; //declares display1 as empty string to be filled
    for (let ct1 of cityArray1) { //declares ct1 as variable with the object cityArray as a value
        var ctry1 = ct1.country; //sets variable value to value of "country" key in cityArray
        var sc1 = ct1.subcountry;
        let cityName1 = ct1.name;
        if (ctry1 == requestedCtry && sc1 == requestedSc) { //filters out all key-value pairs of the cityArray that don't match the country and subcountry vlues that the user inputs
            display1 += `${cityName1}\n`; // "+=" adds to the display value and `${}` interpolates the cityName value into the blank display string that we already declared - \n adds a line break after each value instance
        }
    }
    output1.value = display1; //assigns the textfield (output1) value to funciton output
}

//get the country and subcountry of a given city 
//all variables labeled 2 because attached to button2
//functions the same as the first funciton
function getCityInfo() {
    var cityArray2 = JSON.parse(data);
    var requestedCity = document.getElementById("cityinput").value;
    var display2 = "";
    for (let ct2 of cityArray2) {
        var ctry2 = ct2.country;
        var sc2 = ct2.subcountry;
        let cityName2 = ct2.name;
        if (cityName2 == requestedCity) {
            display2 += `${sc2}, ${ctry2}\n`;
        }
    }
    output2.value = display2;
}

//attach event handlers to btn1 and btn2
function init() {
    var button1 = document.getElementById("btn1");
    button1.addEventListener("click", getCities);
    var button2 = document.getElementById("btn2");
    button2.addEventListener("click", getCityInfo);
}
// Invoke init method
window.addEventListener("load", init);

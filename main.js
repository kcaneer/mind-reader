var heading = document.getElementById("heading").innerHTML
var text = document.getElementById("text").innerHTML

var state = 1

var symbols = ["!", "@", "#", "$", "%", "&", "*", "+", "~", "^"]

var selected = null

function init() {
    updatePage()
}
//random symbol generator
//create function that displays + for any number divisible by 9
//create function that randomly displays symbols for the other numbers
//use for loop
//

function randomizer (){
    var character = symbols[Math.floor(Math.random() * 10)]
    var string = "";
    for (i = 0; i <= 99; i++) {
        if (i % 9) {
             var ninth = symbols[Math.floor(Math.random() * 10)]
             string = string + i + ":" + ninth + "<br>"
        }
        else {
            string = string + i + ":" + character + "<br>"
            selected = character
        }
    }
    return string
}

function reStart() {
    state = 1;
    updatePage()
}

function nextPage () {
    console.log (state);
    state++;
    updatePage()
}

function updatePage() {
    if (state == 1) {
        document.getElementById("heading").innerHTML = "I can read your mind.";
        document.getElementById("text").innerHTML = "       ";
        document.getElementById("btnrst").style.display = "";
        document.getElementById("btnnxt").style.display = "";
    }
    else if (state == 2) {
        document.getElementById("heading").innerHTML = "Pick a number 1-99";
        document.getElementById("text").style.display = "";
        document.getElementById("btnrst").style.display= "";
        document.getElementById("btnnxt").style.display = "";
    }
    else if (state == 3) {
        document.getElementById("heading").innerHTML = "If your number has 2 digits add them together";
        document.getElementById("text").innerHTML = "Ex: 12 is 1+2=3";
        document.getElementById("btnrst").style.display= "";
        document.getElementById("btnnxt").style.display = "Next";
    }
    else if (state == 4) {
        document.getElementById("heading").innerHTML = "Subtract your new number from the original number.";
        document.getElementById("text").innerHTML = "Click Next to continue";
        document.getElementById("btnrst").style.display= "";
        document.getElementById("btnnxt").style.display = "Next";
    }
    else if (state == 5) {
        var string = randomizer();
        document.getElementById("heading").innerHTML = string;
        document.getElementById("text").innerHTML = "Choose the symbol that matches your number";
        document.getElementById("btnrst").style.display= "Reset";
        document.getElementById("btnnxt").style.display = "Reveal";
    }
    else if (state == 6) {
        document.getElementById("heading").innerHTML = "Your symbol is...<br>" + selected
        document.getElementById("text").style.display = "None";
        document.getElementById("btnrst").style.display= "Reset";
        document.getElementById("btnnxt").style.display = "None";
    }
}
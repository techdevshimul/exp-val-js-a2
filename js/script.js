// Get Elements From Document
let form = document.getElementById("validation-form");
let fullName = document.getElementById("fullName");
let userName = document.getElementById("username");
let email = document.getElementById("email");
let number = document.getElementById("number");
let zip = document.getElementById("zip");

// Add Event Listener
form.addEventListener("submit", validate);

// Functions & Variable Declarations
let fullNameExp = /(^[a-zA-Z][a-zA-Z\s]{0,40}[a-zA-Z]$)/;
let userNameExp = /^[a-zA-Z0-9]+$/;
let emailExp = /^([a-zA-Z0-9]\.?)+[^.]@([a-zA-Z0-9]\.?)+[^.]$/;
let numberExp = /^(\+)?(88)?01[0-9]{9}$/;
let zipExp = /^\d{4}$/;

function validate(e) {

    validateExp(fullName, fullNameExp, "Full Name");  
    validateExp(userName, userNameExp, "Username");
    validateExp(email, emailExp, "Email");    
    validateExp(number, numberExp, "Number");  
    validateExp(zip, zipExp, "Zip"); 

    e.preventDefault();
}

function validateExp(ele, exp, labelName){

    let label = ele.previousElementSibling;

    if (ele.value != "" && exp.test(ele.value)) {        
        label.innerHTML = `${labelName}<span> (Valid!)</span>`
        label.children[0].className = "valid";
    } else {        
        label.innerHTML = `${labelName}<span> (Invalid!)</span>`
        label.children[0].className = "invalid";
    }
}
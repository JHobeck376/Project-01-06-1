/*
    Project 01-06-1
    
    Author: Jacob Hobeck
    Date:   8.16.18
    
    Filename: script.js
*/

"use strict";

// global variables
var formValidity = true;

// function 
function validateRequired() {
    var inputElms = document.querySelectorAll("#contactinfo input");
    var errorDiv = document.getElementById("errorText");
    formValidity = false;
    var fieldsetValidity = true;
    var elementNum = inputElms.length;
    var currentElement;
    try {
        for (var i = 0; i < elementNum; i++){
            currentElement = inputElms[i];
            if (currentElement.value === ""){
                currentElement.style.background = "rgb(255, 233, 233)";
                fieldsetValidity = false;
            } else {
                currentElement.style.background = "white";
            }
        }
        if (fieldsetValidity === false){
            throw "Please fill out all of the Required fields.";
        } else {
            errorDiv.style.display = "none";
            errorDiv.innerHTML = "";
        }
    } catch (msg) {
        errorDiv.style.display = "block";
        errorDiv.innerHTML = msg;
        formValidity = false;
    }
}

// function to validate form
function validateForm(submit) {
    // This disables the submit button
    if (submit.preventDefault){
        submit.preventDefault();
    } else {
        submit.returnValue = false;
    }
    formValidity = true;
    
    validateRequired();
    
    if (formValidity === true){
        document.getElementsByTagName("form")[0].submit();
    }
}

// function to create event listeners
function createEventListeners() {
    var form = document.getElementsByTagName("form")[0];
    if (form.addEventListener) {
        form.addEventListener("submit", validateForm, false);
    } else if (form.attachEvent) {
        form.attachEvent("onsubmit", validateForm);
    }
}

// page load event listeners
if (window.addEventListener) {
    window.addEventListener("load", createEventListeners, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", createEventListeners);
}

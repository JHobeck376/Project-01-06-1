/*
    Project 01-06-1
    
    Author: Jacob Hobeck
    Date:   8.16.18
    
    Filename: script.js
*/

"use strict";

// global variables
var formValidity = true;

// function to validate form
function validateForm() {
    alert("success");
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

"use strict";
/*
   Author: Min Li
   Student ID: 301130589
   Date: Sept 25, 2021

   Filename: app.js
*/

(function () {
    // global variable
    let send = document.getElementById("sendBtn");
    let clear = document.getElementById("clearBtn");
    let iptElements = document.querySelectorAll("#sendinfo input");
    let formValidity = true;
    
    /* validate form */
    function validateForm(evt) {
        if (evt.preventDefault) {
        evt.preventDefault(); // prevent form from submitting
        } else {
        evt.returnValue = false; // prevent form from submitting in IE8
        }
        
        formValidity = true; // reset value for revalidation

        // check the fields can not be blank
        (function () {
            let errDiv = document.getElementById("errMsg");
            let elemCount = iptElements.length;
            let requiredValidity = true;
            let currtElement;

            try {
                for (let i = 0; i < elemCount; i++) {
                    currtElement = iptElements[i];
                    if (currtElement.value === "") {
                        currtElement.style.background = "rgb(255,233,233)";
                        requiredValidity = false;
                    } else {
                        currtElement.style.background = "white";
                    }
                }

                if (requiredValidity === false) {
                    throw "Please do not leave blank."
                }
                errDiv.style.display = "none";
                errDiv.innerHTML = "";
            }
            catch(msg) {
                errDiv.style.display = "block";
                errDiv.innerHTML = msg;
                formValidity = false;
            }
        })();

         //check the email address that should contain "@" and "."
        (function () {
            let emailErrDiv = document.getElementById("errEmail");
            let at = iptElements[3].value.indexOf("@");
            let dot = iptElements[3].value.lastIndexOf(".");
            let emailValidity = true;
        
            try {
            if (at < 1 || dot < at + 2 || dot + 2 >= iptElements[3].value.length) {
                iptElements[3].style.background = "rgb(255,233,233";
                emailValidity = false;
            } else {
                iptElements[3].style.background = "white";
            }
        
            if (emailValidity === false) {
                throw "Email address is not valid.";
            }
            emailErrDiv.style.display = "none";
            emailErrDiv.innerHTML = "";
            }
            catch (msg) {
            emailErrDiv.style.display = "block";
            emailErrDiv.innerHTML = msg;
            formValidity = false;
            }
        })();
    
        //validateNumbers();
        if (formValidity === true) {
        alert ("Thanks for for sending me a message, I will reply as soon as possiable.");
        window.location.href = "/home";
    
        }
    } 
 
    // create event listeners
    function createEventListeners() {        
        send.addEventListener("click", validateForm);
    
        clear.addEventListener("click",                
                                function () { //clear the form
                                    for (var i = 0; i<iptElements.length; i++) {
                                    iptElements[i].value = "";
                                    }
                                }()
        );

        console.log("App started...");
    }


    window.addEventListener("load", createEventListeners);
})();
//# sourceMappingURL=app.js.map
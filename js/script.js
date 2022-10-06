// Navigation Bar - Mobile Version Controls

const navSlide = () => {
    const burgerMenu = document.getElementsByClassName("burger-menu")[0];
    const navBar = document.getElementsByClassName("nav-links")[0];

    burgerMenu.addEventListener("click", () => {
        // Toggle Nav
        navBar.classList.toggle("active");
    });
};

navSlide();


// Customized Form Controls 

$(function() {
    $("#reservation-date").datepicker({
        minDate: 0,
        maxDate: "+2M +15D",
        altFormat: "mm-dd-yy",
        dateFormat: 'MM d, yy', 
    });
});

$(document).ready(function() {
    $("#reservation-time").timepicker({
        timeFormat: 'h:mm p',
        interval: 30,
        minTime: '10',
        maxTime: '10:30pm',
        // defaultTime: '10',
        startTime: '10:00',
        dynamic: false,
        dropdown: true,
        scrollbar: true,
    });
});




// Form Submissions

let formOne = document.getElementById("form-1");
let formTwo = document.getElementById("form-2");
let clientName = document.getElementById("first-name");
let clientNumber = document.getElementById("phone-number");
let clientEmail = document.getElementById("email-address");
let formConfirmMsg = document.getElementById("form-success");
let date;
let time;
let partySize;


function getFormOneInfo(){
    date = $("#reservation-date").datepicker("getDate");
    time = $("#reservation-time").val();
    partySize = document.getElementById('party-size');
    let value = partySize.options[partySize.selectedIndex].text;
    console.log("The selected reservation day is : " + date)
    console.log("The selected reservation time is: " + time)
    console.log("The selected party size is: " + value);  
}

function getFormTwoInfo(){
    clientNameValue = clientName.value;
    clientNumberValue = clientNumber.value;
    clientEmailValue = clientEmail.value;
    console.log("The reservation name entered is : " + clientNameValue)
    console.log("The phone number entered is: " + clientNumberValue)
    console.log("Your email address entered is: " + clientEmailValue);  
}

const checkInputs = () => {
    formOne.addEventListener("submit", (e) => {
        e.preventDefault();
    });
    
    formOne.addEventListener("submit", () => {
        formOne.classList.toggle("hidden");
        formTwo.classList.toggle("active");
    })
    
    formTwo.addEventListener("submit", (e) => {
        e.preventDefault();
    });
    
    formTwo.addEventListener('submit', () => {
        formTwo.classList.toggle("hidden")
        formConfirmMsg.classList.toggle("active")
    })
}

checkInputs();



















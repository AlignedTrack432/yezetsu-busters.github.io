const element = document.getElementById("invitesOwed");
let invitesOwed = 0;
const min = 1;
const max = 20;

// Initial generation
const initialRandom = Math.floor(Math.random() * (max - min + 1)) + min;
invitesOwed = initialRandom;
element.innerHTML = "Invite links owed by Yezetsu: " + invitesOwed;

// Update loop
var mainLoopId = setInterval(function () {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    invitesOwed += randomNumber;
    // Changed randomNumber to invitesOwed here to show the total
    element.innerHTML = "Invite links owed by Yezetsu: " + invitesOwed;
}, 500);
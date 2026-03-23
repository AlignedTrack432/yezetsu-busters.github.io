const element = document.getElementById("pointsOwed");
let pointsOwed = 0;
const min = 1000;
const max = 5000;

// Initial generation
const initialRandom = Math.floor(Math.random() * (max - min + 1)) + min;
pointsOwed = initialRandom;
element.textContent = "Points owed by Yezetsu: " + pointsOwed;

// Update loop
var mainLoopId = setInterval(function () {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    pointsOwed += randomNumber;
    // Changed randomNumber to pointsOwed here to show the total
    element.textContent = "Points owed by Yezetsu: " + pointsOwed;
}, 500);
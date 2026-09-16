let name = prompt('enter your name').trim().toLowerCase();
let age = Number(prompt('enter your age:').trim());
if (18 >= age) {
    console.log('Sorry, you cannot enter.')
} else if (age >= 21 && name  === "nino") {
    console.log('Welcome, VIP!')
} else if (age % 2 === 0 || name === "giorgi") {
    console.log("You get a free drink!")
} else {
    console.log('Welcome in. Enjoy your evening.')
};
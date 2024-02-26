console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";

const receivedPassword = "h4x0r1337";

if (SUPER_SECRET_PASSWORD === receivedPassword){
    console.log("Welcome! You are logged in as Brunhilde1984.");
} else {
    console.log("Access denied!");
}

// Part 2: Even / Odd
const number = 13;

if (number % 2 === 0) {
    console.log("even number");
} else {
    console.log("odd number");
}

// Part 3: Hotdogs
const numberOfHotdogs = 99;

if (numberOfHotdogs <= 5) {
    console.log("2€ per hotdog");
} else if (numberOfHotdogs > 5 && numberOfHotdogs <= 100){
    console.log("1.50€ per hotdog");
} else if (numberOfHotdogs > 100 && numberOfHotdogs < 1000000){
    console.log("1€ per hotdog");
} else if (numberOfHotdogs >= 1000000){
    console.log("0.10€ per hotdog");
} else {
    console.log("No Hotdog for you");
}

// Part 4: Daytime
const currentHour = 17;

let statement = "";
statement = currentHour < 17 ? "Still need to learn..." : "Partytime!!!";
console.log(statement);

// Part 5: Greeting
const username = "Roland";

const greeting = "Hello " + (username === "Roland" ? "Coach" : username) + "!";

console.log(greeting);

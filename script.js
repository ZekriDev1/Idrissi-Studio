// JavaScript code snippet
function greet(name) {
    console.log("Hello, " + name + "!");
}

function calculateSquare(num) {
    return num * num;
}

function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function reverseString(string) {
    return string.split("").reverse().join("");
}

function countVowels(string) {
    const vowels = "aeiouAEIOU";
    let count = 0;
    for (let char of string) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

function formatDate(date) {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
}

function sumArray(arr) {
    return arr.reduce((total, num) => total + num, 0);
}

// You can continue adding more functions or code as needed...

const prompt = require('prompt-sync')();

function greet(namePassedIn, daysPassedIn) {
  return `Welcome to SALT, ${namePassedIn}.\n` +
    `Today it is ${daysRemaining} days left until the course starts.`; 
}

// Main program
const name = prompt('What is your name? ');
const startDate = prompt('When does the course start? ');

const daysRemaining = Math.ceil((new Date(startDate).getTime() - new Date().getTime())/(1000*60*60*24));

const greeting = greet(name, daysRemaining);

console.log(greeting);

module.exports.greet = greet;
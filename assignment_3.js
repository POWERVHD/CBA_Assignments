/* 

1. Order Total Calculator

Write a function that takes price and quantity as parameters and returns the total bill amount.
Then rewrite the same using an arrow function.

*/

function calc_tot(priceValue, itemCount) {
return priceValue * itemCount;
}
console.log(calc_tot(250, 3));

const calc_tot_arrow = (priceValue, itemCount) => priceValue * itemCount;
console.log(calc_tot_arrow(250, 3));

console.log("\n")

/*
2. Age Validator

Create a function that accepts age and returns:

"Eligible to vote" if age ≥ 18

"Not eligible" otherwise.


*/

function checkVotingAge(userAge) {
    if (userAge >= 18) {
        return "Eligible to vote";
    } else {
        return "Not eligible";
    }
}
console.log(checkVotingAge(17));

console.log("\n")

/* 
3. Discount Finder

Write a function that takes originalPrice and discountPercent and returns the final price after discount.
*/

function getFinalPrice(originalAmount, discountRate) {
    let discountValue = (originalAmount * discountRate) / 100;
    return originalAmount - discountValue;
}

console.log(getFinalPrice(1000, 20));

console.log("\n")


/* 

4. Username Formatter

Create an arrow function that takes firstName and lastName and returns a string like:
"Welcome, John Doe!"

*/
const formatUserName = (firstName, lastName) => {
    return "Welcome, " + firstName + " " + lastName + "!";
};

console.log(formatUserName("Kshitij", "Prasad"));

console.log("\n")


/* 
5. Temperature Converter

Write a function that converts Celsius to Fahrenheit and returns the result.

*/

function convertToFahrenheit(celsiusValue) {
    return (celsiusValue * 9) / 5 + 32;
}

console.log(convertToFahrenheit(30));

console.log("\n")



/* 
6. Bank Balance Scope

Create a global variable balance = 5000.
Inside a function, declare another variable balance = 2000.
Print both values and observe variable shadowing.

*/
let balance = 5000;

function checkBalance() {
    let balance = 2000;
    console.log(balance);
}

console.log(balance);
checkBalance();

console.log("\n")

/* 

7. Office Login System

Create a variable role = "Admin" outside a function.
Inside the function, change role to "User" and print both values.
Explain which one is used where.

*/
let role = "Admin";

function updateRole() {
    role = "User";
    console.log(role);
}

console.log(role);
updateRole();

console.log("\n")


/*

8. Counter Bug

Create a variable count = 0.
Inside a function, declare let count = 10.
Try to increment both and check which one changes.

*/

let count = 0;

function increaseCount() {
    let count = 10;
    count++;
    console.log(count);
}

count++;
console.log(count);
increaseCount();

console.log("\n")

/* 

9. Shopping Cart

Create an array cart = ["Milk", "Bread", "Eggs"].

Print the first and last item

Add "Butter" to the cart.

*/
let cart = ["Milk", "Bread", "Eggs"];

console.log(cart[0]);
console.log(cart[cart.length - 1]);

cart.push("Butter");
console.log(cart);


console.log("\n")



/* 

10. Student List

Create an array of 5 student names.
Write a function that prints the 2nd and 4th student.

*/
let students = ["Aman", "Kshitij", "Kunal", "Malik", "Vikram"];

function showSelectedStudents() {
    console.log(students[0]);
    console.log(students[4]);
}

showSelectedStudents();

console.log("\n")


/*
11. Bus Queue System (shift)

Create an array of people in a bus queue.
Remove the first person using shift() and print the updated queue.

*/

let busQueue = ["Aman", "Kshitij", "Kunal", "Pooja"];

busQueue.shift();
console.log(busQueue);

console.log("\n")

/* 

12. Movie Ticket Line (unshift)

Create an array of people waiting.
A VIP arrives — add them at the beginning using unshift().

*/
let waitingLine = ["Aman", "Kshitij", "Kunal"];

waitingLine.unshift("VIP");
console.log(waitingLine);

console.log("\n")

/*

13. Undo Feature (pop)

Create an array of actions:
["Typed text", "Bold applied", "Image added"]
Remove the last action using pop().

*/
let actions = ["Typed text", "Bold applied", "Image added"];

actions.pop();
console.log(actions);

console.log("\n")

/*

14. Notification System (push)

Create an empty array notifications.
Add 3 notifications using push() and print the array.

*/
let notifications = [];

notifications.push("New message");
notifications.push("Friend request");
notifications.push("App update");

console.log(notifications);

console.log("\n")


/*

15. Chat Application Queue

Create an array messages = ["Hi", "How are you?", "Bye"]
Perform these steps:

Add "Welcome" at the end

Remove the first message

Add "Admin joined" at the start

Remove the last message
Print the final messages list.

*/
let messages = ["Hi", "How are you?", "Bye"];

messages.push("Welcome");
messages.shift();
messages.unshift("User joined");
messages.pop();

console.log(messages);

console.log("\n")

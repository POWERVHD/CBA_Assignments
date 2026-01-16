/*
1. Creating & Accessing Arrays
Create an array called colors with 5 color names.
Print the first, middle, and last elements.

Given:
let marks = [78, 85, 90, 66, 88];
Access and print the second highest mark.
*/

let colors = ["Red", "Blue", "Green", "Yellow", "Purple"];

console.log(colors[0]);
console.log(colors[Math.floor(colors.length / 2)]);
console.log(colors[colors.length - 1]);


let marks = [78, 85, 90, 66, 88];

let sortedMarks = [...marks].sort((a, b) => b - a);
console.log(sortedMarks[1]);

console.log("\n")



/*
2. Using push(), pop(), shift(), unshift()
Create an empty array tasks.
Add 3 tasks using push()
Remove the last task using pop() and display it.

Given:
let queue = ["A", "B", "C"];
Add "Z" at the beginning
Remove the first element and print the updated array.
*/


let tasks = [];
tasks.push("Task 1");
tasks.push("Task 2");
tasks.push("Task 3");
console.log("Tasks:", tasks);
let removedTask = tasks.pop();
console.log("Removed task:", removedTask);
console.log("Updated tasks:", tasks);


let queue = ["A", "B", "C"];
queue.unshift("Z");
queue.shift();
console.log("Updated queue:", queue);

console.log("\n")

/*
3. Using splice() & slice()
Given:
let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
Remove "Mango" using splice().
From the same array, create a new array with only "Banana" and "Mango" using slice().
Insert "Pineapple" and "Kiwi" at index 2 using splice().
*/


let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

fruits.splice(2, 1);
console.log(fruits);

fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

let selectedFruits = fruits.slice(1, 3);
console.log( selectedFruits);

fruits.splice(2, 0, "Pineapple", "Kiwi");
console.log(fruits);

console.log("\n");

/*
4. Iterating Arrays
Use a for loop to print all elements of:
let numbers = [10, 20, 30, 40];
Use forEach() to print each student name with the message:
"Hello <name>".
Use map() to create a new array where each number is squared:
let nums = [2, 4, 6, 8];
*/


let numbers = [10, 20, 30, 40];
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

let students = ["Amit", "Neha", "Rahul"];
students.forEach(function(name) {
  console.log("Hello " + name);
});

let nums = [2, 4, 6, 8];
let squaredNums = nums.map(function(num) {
  return num * num;
});
console.log(squaredNums);
console.log("\n")

/*
5. Object Creation & Property Access
Create an object student with properties:
id, name, course, marks.
Print the student name and course.
*/

let student = {
  id: 101,
  name: "Kshitij",
  course: "JavaScript",
  marks: 88
};

console.log("Student Name:", student.name);
console.log("Course:", student.course);
console.log("\n")

/*

6. Dot vs Bracket Notation
Given:
let user = {
  name: "Ravi",
  age: 25,
  "home city": "Delhi"
};
Access all properties correctly.

*/


let user = {
  name: "Ravi",
  age: 25,
  "home city": "Delhi"
};


console.log(user.name);
console.log(user.age);           
console.log(user["home city"]);
console.log("\n")

/*
7. Nested Objects
Create an object company with:
company = {
  name: "TechSoft",
  address: {
    city: "Bangalore",
    pincode: 560001
  }
}
Print the city name.
*/

company = {
  name: "TechSoft",
  address: {
    city: "Bangalore",
    pincode: 560001
  }
}
console.log(company.address.city);
console.log("\n")

/*

8. Object.keys() & Object.values()
Given:
let laptop = {
  brand: "HP",
  price: 55000,
  ram: "16GB"
};
Print all keys
Print all values.

*/

let laptop = {
    brand: "HP",
    price: 55000,
    ram: "16GB"
};

console.log(Object.keys(laptop));
console.log(Object.values(laptop));
console.log("\n")

/*
9. Real-World Mini Task
Create an array of objects called employees:
[
  { id: 1, name: "Amit", salary: 40000 },
  { id: 2, name: "Neha", salary: 55000 },
  { id: 3, name: "Ravi", salary: 60000 }
]
Tasks:
Print all employee names using map()
Print employees earning more than 50000
Display all keys of the first employee object

*/

let employees = [
    { id: 1, name: "Amit", salary: 40000 },
    { id: 2, name: "Neha", salary: 55000 },
    { id: 3, name: "Ravi", salary: 60000 }
];

let employeeNames = employees.map((person) => person.name);
console.log(employeeNames);

let highEarners = employees.filter((person) => person.salary > 50000);
console.log(highEarners);

console.log(Object.keys(employees[0]));



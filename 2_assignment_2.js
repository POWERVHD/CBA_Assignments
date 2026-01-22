//Print all even numbers from 0 to 20
function even() {

    for(let i = 0; i < 20; i++) {
        if(i % 2 === 0) {
            console.log(i);
        }
    }
}
even();
console.log("\n");

//Check if number is positive, negative or zero
function check_number(num) {
    if(num > 0) {
        console.log("+ve");
    } else if(num < 0) {
        console.log("-ve");
    } else {
        console.log("zero");
    }
}
check_number(5);
check_number(-3);
check_number(0);
console.log("\n");

// Use ternary operator to check even or odd
function even_odd_ternary() {

    let number = 7;
    let result = (number % 2 === 0) ? "Even" : "Odd";
    console.log(result);

}
even_odd_ternary();
console.log("\n");

// Loop through an array and stop when value is 50
function loop_until_50() {
    let arr = [10, 25, 40, 50, 60, 70];

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === 50) {
            console.log("found 50 stop");
            break;
        }
        console.log(arr[i]);
    }
}
loop_until_50();
console.log("\n");

// Skip all the multiples of 3 suing continue
function skip_multiples_of_3() {
    for(let i = 1; i <= 20; i++) {
        if(i % 3 === 0) {
            continue;
        }
        console.log(i);
    }

}
skip_multiples_of_3();
console.log("\n");
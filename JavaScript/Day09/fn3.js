// Write a function which accepts a number and create a random between 1 to number
// number - 10 [1,10]

function randomNumber(number) {
    randomNum = Math.floor(Math.random() * number) + 1;
    console.log("Number = ", number, " Random = ", randomNum);
}
randomNumber(6);
randomNumber(6);
randomNumber(6);
randomNumber(6);
randomNumber(6);
randomNumber(6);
randomNumber(6);
randomNumber(6);
randomNumber(6);
randomNumber(6);

// Create a function -> takes 3 numebr display sum and average

function sumAvg(a, b, c) {
    let sum = a + b + c;
    let avg = sum / 3;
    console.log(`Numbers: ${a}, ${b}, ${c}`);
    console.log("Sum = " + sum);
    console.log("Average = " + avg);
}

sumAvg(10, 20, 30);

// Create a function -> Takes a number and x iteration display table of number till x iteration

function multiTable(number, x) {
    console.log(`Multiplication Table of ${number} till ${x} iterations : `);
    for (let i = 1; i <= x; i++) {
        console.log(`${number} x ${i} = ${number * i}`);
    }
}

multiTable(5, 10);
/* 
WAP to print the following pattern : 

* * * * *
* * * *
* * *
* *
*
* *
* * *
* * * *
* * * * *

*/

let n = 5; 
console.log();

// Upper half
for (let i = n; i >= 1; i--) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += " * ";
    }
    console.log(row);
}

// Lower half
for (let i = 2; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += " * ";
    }
    console.log(row);
}

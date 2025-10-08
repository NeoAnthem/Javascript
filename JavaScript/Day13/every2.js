/*
1. Check if all element in array are multiple of 10 or not
[10,100,90,60,30];
*/

let nums = [10, 100, 90, 60, 30];

let allMultipleOf10 = nums.every(num => num % 10 === 0);
if (allMultipleOf10) {
    console.log("All elements are multiples of 10");
} else {
    console.log("All elements are not multiples of 10");
}
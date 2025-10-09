/*
2. WAP to create a function which accepts array and return minimum element present in that array
function min(arr){
}
*/

const min = (arr) => {
    let minimum = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < minimum) {
            minimum = arr[i];
        }
    }
    return minimum;
};

// Example
let numbers = [10, 5, 20, -3, 15];
console.log("Minimum element =", min(numbers)); // Output: -3

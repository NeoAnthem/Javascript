/*
Task:
1. For the given start state of array change to final state
start -> ["november","march","december","july"]
final ->["july","june","december","january"]
*/

// Start array
let months = ["november","march","december","july"];
console.log("Array before changes : \n" , months);
// Change to final state
months[0] = "july";     // replace "november"
months[1] = "june";     // replace "march"
months[2] = "december"; // stays same (optional reassign)
months[3] = "january";  // replace "july"

console.log("Array after changes : \n" , months); // ["july","june","december","january"]

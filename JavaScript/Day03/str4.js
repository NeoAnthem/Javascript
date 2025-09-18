// 2. WAP to check whether the character at the given index is in lower case or not -> Hello SPRK -> index = 5 -> o -> lower case

let str = "Hello SPRK";  
let index = 3; // check character at index 5

// make sure index is valid
if (index >= 0 && index < str.length) {
    let ch = str.charAt(index); // get character at index
    if (ch >= 'a' && ch <= 'z') {
        console.log(`Character '${ch}' at index ${index} is lowercase.`);
    } else {
        console.log(`Character '${ch}' at index ${index} is NOT lowercase.`);
    }
} else {
    console.log("Invalid index!");
}

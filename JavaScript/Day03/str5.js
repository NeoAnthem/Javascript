// 3. Good or bad string -> If string starts with uppercase and have length more than 5 characters then display good string

let str = "I love programming";
let str1 = "hi";

// check str
if (str.length > 5 && str[0] >= 'A' && str[0] <= 'Z') {
    console.log(`"${str}" is a Good String`);
} else {
    console.log(`"${str}" is a Bad String`);
}

// check str1
if (str1.length > 5 && str1[0] >= 'A' && str1[0] <= 'Z') {
    console.log(`"${str1}" is a Good String`);
} else {
    console.log(`"${str1}" is a Bad String`);
}

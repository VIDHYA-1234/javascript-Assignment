// Even numbers are divisible by 2 and the remainder is zero.
//  How do you check, if a number is even or not using JavaScript? 
//  Create a program which checks that the given number is even or odd.

let userNum = prompt ("give number for checking the given number is even or odd");
if(userNum%2===0){
    console.log("number is even")
}
else{
    console.log("number is odd")
}
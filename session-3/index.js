// This is a comment in JavaScript
// You can see where this file is connected to your HTML in the index.html on line 14
let a =5;
let b= 10;
const c = a+b;

console.log(a+b); // outcome is 15

a=20; 

console.log(a+b); //outcome is 30

console.log(c);// outcome is 30

function sayHey (){
    console.log ("Hey!")
}

function conversation () {
    sayHey();
    console.log ("How are you?");
    console.log ("Goodbye");
}

conversation ();
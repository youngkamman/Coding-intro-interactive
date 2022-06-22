console.log("Hello, universe")

const firstName = "Kamerron"

let age = 26;

const iscool = true;

let height;
// console.log(typeof firstName)
// console.log(typeof age)
// console.log(typeof iscool)
// console.log(typeof height)

let x = 4;
let y = 10;
let z = 7 + 9;
let sum = x + y + z;
sum = x + y - z;
let diff = (x + y) - (y+ 2)
console.log(sum)


let string = "Hello, Universe"

//let welcomestring = string + ''+ firstName

let welcomeString = `Hello, Universe ${firstName}`;
console.log(welcomeString)

if (age >= 21){
    console.log("you can drink ${firstName}")
} else {
    console.log("you got some growing up to do")
}


let score = 78
let passing = 40 

if (score > passing){
    console.log("you passed")
} else{
    console.log("try again")
}


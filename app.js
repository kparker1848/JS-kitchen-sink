// This variable contains my name
let name = "Elliott";
// This variable contains the number of states
const states = 50;
//Variable x is the sum of 5 and 4
let x = 5 + 4;
function sayHello() {
    alert("Hello World!");
}
sayHello();
function checkAge(name, age) {
    if (age < 21) {
        alert("Sorry " + name + ", you aren't old enough to view this page!");
    }
}
checkAge("Charles", 21);
checkAge("Abby", 27);
checkAge("Abby", 27);
checkAge("James", 18);
checkAge("John", 17);

let faveVeg = ["onions", "peppers", "spinich"]
for (let i of faveVeg) {
    console.log(i);
}

let pet = {
    name: "Pumpkin",
    breed: "Tabby"
};
console.log(pet.name);
console.log(pet.breed);

let myArray = [
    {
        name: "Daisy",
        age: 13
    },
    {
        name: "Mae",
        age: 35
    },
    {
        name: "Katrina",
        age: 23
    },
    {
        name: "Fauna",
        age: 25
    },
    {
        name: "Bones",
        age: 12
    }]
for (let i = 0; i < myArray.length; i++) {
    checkAge(myArray[i].name, myArray[i].age);
}
function getLength(str) {

    if (str.length % 2 == 0) {
        console.log("The world is nice and even!")
    }
    else {
        console.log("The world is an odd place!")
    }
}
getLength("Hello World")
/*
let marks = [35, 45, 65, 88, 99, 77, 78];
let sum = 0;
let avg = 0.0;
for (let index = 0; index < marks.length; index++) {
  sum += marks[index];
}
avg = sum / marks.length;
console.log("Marks avg : ", avg);

let heroes = ["Zabi", "Maheboob", "Sallu", "Hyder", "Haqq", "Rab", "Faiz"];
for (let index = 0; index < heroes.length; index++) {
  console.log("Heroes are :", heroes[index]);
}
let heroes = ["Zabi", "Maheboob", "Sallu", "Hyder", "Haqq", "Rab", "Faiz"];
for (let el of heroes) {
  console.log("Names :", el);
}
let items = [250, 300, 600, 50, 900, 800, 700, 1000];
for (let i = 0; i < items.length; i++) {
  console.log(`Iteam are: ${items[i]}`);
  let offer = items[i] / 5;
  items[i] -= offer;
  console.log(`Discount on each Iteam are: ${items[i]}`);
}

let foodItem = ["apple", "guava", "banana", "tamoto", "pine apple"];
console.log(foodItem);
foodItem.push("mango", "chini");
console.log(`when we used push method its appending 
the elements at last ${foodItem}`);
let deletedItem = foodItem.pop();
console.log(`when we used pop method its deleting 
the elements at last ${deletedItem}`);
console.log(foodItem);

let studentNames = ["Salma", "Zubear", "Tasleem"];
let newStudent = ["Kareena", "Katrina"];
let newNames = ["Farhan", "Fareed"];
let totalStudent = studentNames.concat(newStudent, newNames);
// console.log(totalStudent.shift());
let newDa = totalStudent.slice(1, 4);
console.log("new Data :", newDa);

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(array);
let deletedItem = array.splice(2, 2, 101, 102);
console.log(deletedItem);
console.log(array);

function mathCalculator() {
  let priciple = 2000;
  let time = 2;
  let rate = 3;
  let simpleInterest = (priciple * time * rate) / 100;
  console.log("simple Interest Is : ", simpleInterest);
  let pi = 3.14;
  let r = 5;
  let areaOfSquare = pi * r * r;
  console.log("Area of cirle is:", areaOfSquare);
}
mathCalculator();

function sum(x, y) {
  s = x + y;
  return s;
}
let value = sum(100, 900);
console.log("Sum of two number : ", value);

const arrowSum = (a, b) => {
  s = a + b;
  //   console.log(s);
  return s;
};
let result = arrowSum(88888, 7777);
console.log("Result : " + result);

let inputString = prompt("Enter the string :");
let str = inputString.toLowerCase();
function countVowels(str) {
  let count = 0;
  for (const char of str) {
    // console.log(char);
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }
  return count;
}
console.log("Number of count: ", countVowels(str));
*/
alert("home");
console.log("Welcome to the Frontend programming");

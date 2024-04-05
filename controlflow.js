//1. Write a program that takes in an array of numbers and consoles the first four items multiplied by itself  and the last two added by 10. Return the array with the new values
let num1 = [3,4,2,8,9,5,6,1];
function operatingArray(){
let num2 = num1.slice(0,4).map(element => element*element);
let num3 = num1.slice(-2,).map(element => element+=10);
let num4 = num2.concat (num3);
console.log(num4);
return num4
}
operatingArray();
//2. Write a program that takes in the following array and use a while loop to iterate and break when the item is equal to the fourth index :let arrNum = [1,2,3,4,5,6,7,8,9];
let arrNum = [1,2,3,4,5,6,7,8,9];
function Num (){
    let i = 0;
    while (i===arrNum[5]) {
       
        console.log(arrNum[i]);
        break;
    };
}
Num(arrNum);
//3. Write a function that takes in a an array of strings and use a continue statement when the item is at the second index:  let fruits= ['apple','plum','banana','strawberries','kiwi']
let fruits = ['apple','plum','banana','strawberries','kiwi'];
function fruitsLength() {
    for (let i = 0; i < fruits.length; i++) {
        if (i === 2) 
        continue;
    };
    console.log(fruits);
}
fruitsLength(fruits)
//4. Write a function that accepts an array of strings and console.logs each element using a for loop.
let strArrays = ['Mango', 'Kiwi', 'Apple', 'banana'];
// let newStrings = [];
function randomStrings() {
    for (let i = 0; i < strArrays.length; i++) {
       
        console.log(strArrays[i]);
        
    }
}
randomStrings(strArrays)
//5. Write a JavaScript function that takes a string as input and reverses it using a while loop. The function should return the reversed string.
let scriptStr = ['cat', 'dog','cow', 'milk'];
// let newStrings = [];
function reverseStrings() {
    for (let i = 0; i < scriptStr.length; i++) {
       let y = scriptStr[i].reverse();
        console.log(y);
        
    };
}
reverseStrings(y)
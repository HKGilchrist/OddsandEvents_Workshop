/*
Goal: 
- Create an app that allows users to enter a number.
- That number gets placed in a number bank. 
- The user can sort the numbers in the bank into 2 categories: odd & even. 
*/
//
let numberBankArr = [];
let oddNumbersArr = [];
let evenNumbersArr = [];
//
const number = document.getElementById("numberInput");
const numBankInput = document.getElementById("numberBank");
const evenNumInput = document.getElementById("evens");
const oddNumInput = document.getElementById("odds");
const addNumButton = document.getElementById("addNumButton");
const sortOneButton = document.getElementById("sortOne"); // Sort one number
const sortAllButton = document.getElementById("sortAll"); // Sort all numbers.

// Event Listener for "Add Number" button to add input to Number Bank.
addNumButton.addEventListener("click", (event) => {
  // console.log("I am in the listener", number.value);
  numberBankArr.push(number.value);
  numBankInput.innerHTML = numberBankArr;
  event.preventDefault();
});

// Sort 1 Button
sortOneButton.addEventListener("click", (event) => {
  const firstNum = numberBankArr.shift();
  if (firstNum % 2 === 0) {
    evenNumbersArr.push(firstNum);
  } else {
    oddNumbersArr.push(firstNum);
  }
  evenNumInput.innerHTML = evenNumbersArr;
  oddNumInput.innerHTML = oddNumbersArr;
  numBankInput.innerHTML = numberBankArr;
  event.preventDefault();
});

// Sort All Button
sortAllButton.addEventListener("click", (event) => {
  for (let i = 0; i < numberBankArr.length; i++) {
    if (numberBankArr[i] % 2 === 0) {
      evenNumbersArr.push(numberBankArr[i]);
    } else {
      oddNumbersArr.push(numberBankArr[i]);
    }
  }
  numberBankArr = [];
  evenNumInput.innerHTML = evenNumbersArr;
  oddNumInput.innerHTML = oddNumbersArr;
  numBankInput.innerHTML = numberBankArr;
  event.preventDefault();
});

// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a string and returns a string with a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.

//Pseudocode:
// input: create a test using expect statements using the provided variables and outputs
// output: create a function that allows the test to pass
// First I'm going to create a describe create a test using the describe, it and expect method .toEqual the given outputs using the three provided variables.
// Next I'm going to create a function using map to store the characters as numbers in the string. in the return statement I'm going to use str.replace to replace the characters with the declared numbers and use => map to replace the characters with the numbers.

// a) Create a test with expect statements using the variables provided.
describe("codedMethod", () => {
    const secretCodeWord1 = "Lackadaisical"
    const secretCodeWord2 = "Gobbledygook"
    const secretCodeWord3 = "Eccentric"
    
    it("takes in a string and returns a string with a coded message", () => {
      expect(codedMethod(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
      expect(codedMethod(secretCodeWord2)).toEqual("G0bbl3dyg00k")
      expect(codedMethod(secretCodeWord3)).toEqual("3cc3ntr1c")
    })
  })
// output: ReferenceError: codedMethod is not defined

// const secretCodeWord1 = "Lackadaisical"
//  Expected output: "L4ck4d41s1c4l"
// const secretCodeWord2 = "Gobbledygook"
//  Expected output: "G0bbl3dyg00k"
// const secretCodeWord3 = "Eccentric"
//  Expected output: "3cc3ntr1c"

// b) Create the function that makes the test pass.

const codedMethod = (str) => {
    const map = {
      'a': '4',
      'e': '3',
      'i': '1',
      'o': '0',
      'E': '3'
    }
    
    return str.replace(/[aeioE]/g, (char) => map[char])
  }
console.log(codedMethod);

//PASS  ./code-challenges.test.js
// codedMethod
// ✓ takes in a string and returns a string with a coded message (5 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total

// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

//Pseudocode: 
//Input: Create a test using the provided variables and outputs.
//Output: create a function that allows the test to pass
// first I'm going to create a test with the provided variables, and in the expect statement I'm going to pass the "letterOutcome" variable that I've created, as well as fruitArray and each letter variable. 
// For the function I'm going to create a higher order function using letterOutcome and pass two parameters. I'm then going to make all the letters within the array lowercase because Apricot has a capital a and will fail the test. 
//(I was stuck here for a long time because I kept skimming over the fact that the variables are lowercase and Apricot was capatilized.)
// Next I need to return the array filtered into lowercase and the array's only containing words with a or e in them. 

// a) Create a test with expects statement using the variable provided.
describe("letterOutcome", () => {
    const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"];
    const letterA = "a";
    const letterE = "e";
  
    it("takes in an array of words and a single letter and returns an array of all the words containing that particular letter", () => {
        expect(letterOutcome(fruitArray, letterA)).toEqual(["Mango", "Apricot", "Peach"]);
        expect(letterOutcome(fruitArray, letterE)).toEqual(["Cherry", "Blueberry", "Peach"]);
        
    });
  });

//ReferenceError: letterOutcome is not defined

// const letterA = "a"
// Expected output: ["Mango", "Apricot", "Peach"]
// const letterE = "e"
// Expected output: ["Cherry", "Blueberry", "Peach"]

// b) Create the function that makes the test pass.

const letterOutcome = (words, letter) => {
    const lowercaseLetter = letter.toLowerCase();
    return words.filter(word => word.toLowerCase().includes(lowercaseLetter));
  };
  //Output:  PASS  ./code-challenges.test.js
//   letterOutcome
//   ✓ takes in an array of words and a single letter and returns an array of all the words containing that particular letter (4 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.

//Pseudocode: 
// input: create a test with expect statements using provided variables
// output: create a function that allows the test to pass
//First I'm going to create a test using expect statements using the provided variables, as well as fullHouse as the describe variable. If it's a full house hand return true, if not return false.
// Next I'm going to create a function using the fullHouse variable that takes in an array as its parameter. Next use map to keep track of occurences of each card in the array. Next I need to iterate over each element using forEach method.
// next create a variable that uses spread operator to get new array with that value of that cards.includes. It will then check if the value 2 is included and if it is there is atleast one pair in the hand.
// Using the same method check to see if there is a value of three for a three of a kind.
// return if it has a pair && has a three of a kind. If true, there's at least one pair of cards and a three of a kind. If not return false.

// a) Create a test with expect statements using the variable provided.
describe("fullHouse", () => {
    const hand1 = [5, 5, 5, 3, 3];
    const hand2 = [5, 5, 3, 3, 4];
    const hand3 = [5, 5, 5, 5, 4];
    const hand4 = [7, 2, 7, 2, 7];
  
    it("should return true for being a full house", () => {
      expect(fullHouse(hand1)).toEqual(true);
      expect(fullHouse(hand2)).toEqual(false);
    });
  
    it("should return false for not being a full house", () => {
      expect(fullHouse(hand3)).toEqual(false);
      expect(fullHouse(hand4)).toEqual(true);
    });
  });
  
// const hand1 = [5, 5, 5, 3, 3]
// Expected output: true
// const hand2 = [5, 5, 3, 3, 4]
// Expected output: false
// const hand3 = [5, 5, 5, 5, 4]
// Expected output: false
// const hand4 = [7, 2, 7, 2, 7]
// Expected output: true

// b) Create the function that makes the test pass.

const fullHouse = (hand) => {
    const cardCount = new Map();
    hand.forEach((card) => cardCount.set(card, (cardCount.get(card) || 0) + 1));
    const hasTwo = [...cardCount.values()].includes(2);
    const hasThree = [...cardCount.values()].includes(3);
    return hasTwo && hasThree;
  };

  //output: PASS  ./code-challenges.test.js

// fullHouse
//   ✓ should return true for a full house hand
//   ✓ should return false for a non-full house hand

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total
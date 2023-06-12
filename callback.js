function greet(name, callback) {
    console.log("Hello, " + name + "!");
    callback();
  }
  
  function sayGoodbye() {
    console.log("Goodbye!");
  }
  
  greet("John", sayGoodbye);

//   Question 1: Write a function calculate that takes two numbers
//  and a callback function. The function should perform a calculation
//  (such as addition, subtraction, multiplication, or division) on the 
// two numbers and invoke the callback with the result.
function calculate(num1,num2,callback) {
    let multiplication=num1*num2
    callback(multiplication)
    
}
function result(multiplication){
    console.log(multiplication);
}
let num1=5
let num2=5
calculate(num1,num2,result)

//   Question 2: Create a function mapArray that takes an array of numbers and a callback function. The function should apply the callback function to each element of the array and return a new array with the modified values.
  
//   Question 3: Write a function filterArray that takes an array of numbers and a callback function. The function should filter out the elements from the array that satisfy a specific condition defined by the callback function and return a new array with the filtered values.
  
//   Question 4: Implement a function findElement that takes an array and a callback function. The function should return the first element in the array that satisfies the condition specified by the callback function. If no element satisfies the condition, it should return undefined.  

// Write a function capitalizeNames that takes an array of names and
//  a callback function. The function should capitalize each name in
//  the array and invoke the callback with the modified array.
function capitalizeNames(array,callback) {
    let capitalizedWords=[]
    array.forEach(word => {
        const capitalizedWord = word.toUpperCase();
        capitalizedWords.push(capitalizedWord);
      });
      callback(capitalizedWords)
    
  

    
}
function capitalized(capitalizedWords) {
    console.log(capitalizedWords);
    
}
let array=["rita","wendy","kimmy","hailey"]
capitalizeNames(array,capitalized)

// Create a function calculateAverage that takes an array of numbers
//  and a callback function. The function should calculate the average 
// of the numbers in the array and invoke the callback with the result.
function calculateAverage(numbers,callback) {
    let sum=0;
    for(let i=0;i<numbers.length;i++){
        sum+=numbers[i]
    }
  let average=sum/numbers.length
  callback(average)  

}
function total(average) {
    console.log(average);
}
let numbers=[5,5,10,20,30]
calculateAverage(numbers,total)

// Write a function checkEvenNumbers that takes an array of 
// numbers and a callback function. The function should check 
// if all numbers in the array are even and invoke the callback with a boolean result.

// Implement a function removeDuplicates that takes an array 
// of values and a callback function. The function should remove
//  duplicate values from the array and invoke the callback with the modified array.
function removeDuplicates(array,callback) {
    let removed=[];
    for(let x=0;x<array.length;x++){
        if(!removed.includes(array[x])){
            removed.push(array[x])
        }
    }
    callback(removed)
   
    
}
function remove(removed) {
    console.log(removed);
}
let array1=["rita","rita","wendy","wendy","kimmy","kimmy","kimani","kimani"];
removeDuplicates(array1,remove)


// Create a function findMaxValue that takes an array of
//  numbers and a callback function. The function should 
// find the maximum value in the array and invoke the callback with the result.
function findMaxValue(nums,callback) {
    let max=nums[0];
    for(let z=0;z<nums.length;z++){
        if (nums[z]>max) {
            max=nums[z]
        }
    }
    callback(max)
}
function largest(max) {
   console.log(max); 
}
let nums=[2,4,8,10,98]
findMaxValue(nums,largest)
// Write a function convertToUpperCase that takes a string and a
//  callback function. The function should convert the string to
//  uppercase and invoke the callback with the modified string.
function convertToUpperCase(string,callback) {
    let upper=string.toUpperCase()
    callback(upper)
}
function answer(upper) {
    console.log(upper);
}
let string="callbacks are great!"
convertToUpperCase(string,answer)


// Implement a function reverseArray that takes an array and a callback function. The function should reverse the elements in the array and invoke the callback with the reversed array.

// Create a function calculateFactorial that takes a number and a callback function. The function should calculate the factorial of the number and invoke the callback with the result.

// Write a function checkPalindrome that takes a string and a callback function. The function should check if the string is a palindrome and invoke the callback with a boolean result.

// Implement a function shuffleArray that takes an array and a callback function. The function should shuffle the elements in the array and invoke the callback with the shuffled array.

// Create a function getSquareRoots that takes an array of numbers and a callback function. The function should calculate the square root of each number in the array and invoke the callback with a new array containing the square roots.

// Write a function filterStrings that takes an array of strings and a callback function. The function should filter out the strings from the array that satisfy a specific condition defined by the callback function and return a new array with the filtered values.

// Implement a function findLongestWord that takes an array of words 
// and a callback function. The function should find the longest word 
// in the array and invoke the callback with the result.
function findLongestWord(words,callback) {
    let longer=words[0]
    for(let w=0;w<words.length;w++){
        if (words[w].length>longer.length) {
            longer=w
        }
    }
    callback(longer)

    
}
function longest(longer) {
    console.log(longer);
}
let words=["kimberly","arlette","mwangi","aaliyah","kimani"]
findLongestWord(words,longest)

// Create a function sortNumbers that takes an array of numbers and a callback function. The function should sort the numbers in ascending order and invoke the callback with the sorted array.


// Implement a function calculateTotal that takes an array of numbers and a callback function.
//  The function should calculate the total sum of the numbers in 
// the array and invoke the callback with the result.
function calculateTotal(numbers,callback) {
    let sum=0;
    for(let i=0;i<numbers.length;i++){
        sum+=numbers[i]
    }
    callback(sum)
    
}
function total(sum) {
    console.log(sum);
}
let numbers1=[2,3,4,5,6,7,8,9,10];
calculateTotal(numbers1,total)

// Create a function truncateStrings that takes an array of strings 
// and a callback function. The function should truncate each string in the array to a specified length and invoke the callback with the modified array.

// Write a function checkPrimeNumbers that takes an array of numbers and a callback function. The function should check if all numbers in the array are prime and invoke the callback with a boolean result.

// Implement a function countOccurrences that takes an array and a callback function. The function
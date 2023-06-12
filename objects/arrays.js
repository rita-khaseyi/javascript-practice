// Create an array called fruits with the elements "apple", "banana", and "orange".
let fruits = new Array("apple", "banana",  "orange");
console.log(fruits);

// Add the element "grape" to the end of the fruits array.
fruits.push("grape");
console.log(fruits);

// Remove the first element from the fruits array.
let indexing=0
fruits.shift(indexing);
console.log(fruits);

// Check if the fruits array contains the element "banana".
let checking=fruits.includes("banana");
console.log(checking);

// Find the index of the element "orange" in the fruits array.
let elements=fruits.indexOf("orange");
console.log(elements);

// Create a new array called numbers with the elements 1, 2, 3, 4, and 5.
let numbers= new Array(1,2,3,4,5);
console.log(numbers);

// Calculate the sum of all the numbers in the numbers array.
sum=0;
numbers.forEach((num)=>{
sum+=num;


})
console.log(sum);




// Double the value of each number in the numbers array.
numbers.forEach((nums)=>{
    console.log(nums*2);

});


// Filter the numbers array to create a new array called evenNumbers that contains only the even numbers.
let evenNumbers=numbers.filter(number=>number %2==0);
console.log(evenNumbers);

// Sort the numbers array in ascending order.
let sorting= numbers.sort();
console.log(sorting);

// Reverse the numbers array.
let reversed=numbers.reverse()
console.log(reversed);

// Combine the fruits and numbers arrays into a single array called combined.
let combined=fruits.concat(numbers);
console.log(combined);
console.log(numbers);
// Write a function that takes an array of numbers as input and returns the sum of all the numbers.

function sums(ints) {
    let sum=0;
    for (let i = 0; i < ints.length; i++) {
        sum  +=numbers[i]
        
    }
    console.log(sum);
   
    
}
let ints=[2,3,4,5,6]
sums(ints)


// Write a function that takes an array of strings as input and returns 
// a new array with only the strings that have a length greater than 5.
function longer(strings) {
    let longerarr=[];
    for(let i=0;i<strings.length;i++){
        if (strings[i].length>5) {
            longerarr.push(strings[i]);
            
        }
        
    }
    console.log(longerarr);
    
}
let strings=["rita","patricia","atong","kevine","nali"]
longer(strings)
// Write a function that takes an array of numbers as input and returns a new array with only the even numbers.

// Write a function that takes an array of strings as input and returns a new array with the strings sorted in alphabetical order.

// Write a function that takes an array of numbers as input and returns the largest number in the array.

// Write a function that takes an array of strings as input and returns the number of strings that start with the letter 'A'.

// Write a function that takes an array of numbers as input and returns a new array with each number squared.

// Write a function that takes two arrays as input and returns a new array with elements that are common to both arrays.

// Write a function that takes an array of numbers as input and returns the average of all the numbers.

// Write a function that takes an array of strings as input and returns a new array with the first letter of each string capitalized.
// Write a function that takes an array of numbers as input and returns a new array with only the unique numbers (i.e., removing any duplicates).
// Write a function that takes an array of strings as input and returns true if all the strings in the array are of the same length, and false otherwise.
// Write a function that takes two arrays as input and returns a new array containing the elements from both arrays, without any duplicates.
// Write a function that takes an array of objects, where each object represents a person with properties like "name" and "age". The function should return the name of the oldest person in the array.
// Write a function that takes an array of numbers as input and returns the second smallest number in the array.
// Write a function that takes an array of strings as input and returns the most frequent string in the array. If there are multiple strings with the same highest frequency, return the one that comes first in the array.
// Write a function that takes an array of numbers as input and returns a new array with the numbers sorted in descending order.
// Write a function that takes an array of strings as input and returns a new array where each string is reversed.
// Write a function that takes an array of objects, where each object represents a student with properties like "name" and "score". The function should return an array of the names of the top three students with the highest scores.
// Write a function that takes two arrays of numbers as input and returns true if the two arrays have at least one element in common, and false otherwise.
// Write a function that takes an array of strings as input and returns true if all the strings in the array are palindromes, and false otherwise. (A palindrome is a word that is the same when read forwards and backwards, e.g., "level" or "madam".)
// Write a function that takes an array of numbers as input and returns the product of all the positive numbers in the array.







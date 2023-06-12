//Write a for...of loop that iterates over an array of numbers and logs each number to the console.
let num=[10,20,3,8,7,9,12];
for(let x of num){
    console.log(x);
}

//Create an array of strings and use a for...of loop 
//to concatenate all the strings into a single sentence.
let strings=["rita","ray","rachel","rakkem","roro"];
let sentence=''
for (let string of strings) {
    sentence+=string+' ';
    

}
console.log(sentence)

//Write a for...of loop that iterates over a string and logs each character to the console.

function string2(string1) {
    for (let string of string1) {
        console.log(string);
    }
}
let string1="rita";
string2(string1);

//Create an object with key-value pairs representing items in a shopping cart. Use a for...of loop 
//to calculate the total price of all items in the cart.
let shopping = {
    milk:100,
    eggs:50,
    fish:300,
    flour:200

    
  };
  let total = 0;

for (const item in shopping) {
  total += shopping[item];
}
console.log(`The total price of all items in the cart is $${total.toFixed(2)}.`);
//to fixed method rounds of the answer to 2 decimal places

//Write a for...of loop that iterates over an array of objects representing books, 
//and logs the title and author of each book to the console.
function book(array) {
    for (let arr of array) {
       
       console.log(`${arr.title} by ${arr.author}`);
    }
}
let books =[ {
    title: 'The Hitchhiker\'s Guide to the Galaxy',
    author: 'Douglas Adams',
    published: 1979
  },
  {
    title:'ritas memoir',
    author:'rita',
    published:2030

  },
]
book(books);

//Create an array of numbers and use a for...of loop to calculate the sum of all the numbers.
function sumnumbers(number) {
    let sum=0;
    for (let num of number) {
       sum +=num
     
        
    }
    console.log(sum)
}
let number=[1,2,3,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
sumnumbers(number);

//Write a for...of loop that iterates over an array of words 
//and logs each word to the console in reverse order.

function reverse(words) {
    for (const word of words) {
        let reversedWord = '';
        for (let i = word.length - 1; i >= 0; i--) {
          reversedWord += word[i];
        }
        console.log(reversedWord);
      }
}
let words=["rita","zippy","trishia","kimmy","kush"]
reverse(words)

//Write a function that takes a string as an argument and returns the string reversed using a for loop.

function reversing(wording) {
    for(let word of wording){
        let empty='';
        for(let i=word.length -1; i>=0;i--){
            empty+=word[i];

        }
        console.log(empty)

    }
}
let wording=["trish","kim","roro","rita","aliyah"];
reversing(wording)

//Create an array of objects representing students, with properties for name and grade. 
//Use a for...of loop to calculate the average grade of all students.
let students=[
    {
        name:'rita',
        grade:79,
        school:'st'


    },
    {
        name:'KIMMY',
        grade:90,
        school:'st'
    },
    {
        name:'aliyah',
        grade:75,
        school:'st'
    }
]
let sum=0;
for (let arr of students) {
    sum+=arr.grade
    console.log(sum)
}
let totals=sum/students.length
console.log(totals)

//Write a for...of loop that iterates over an array of numbers 
//and logs the square of each number to the console.
function squares(nums) {
    for(let num of nums){
        console.log(num **2)
    }
}
let nums=[2,4,6,8,10];
squares(nums);

//Create an array of strings and use a for...of loop to count the number of vowels in all the strings combined.
const strings2 = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
let vowelCount = 0;

for (const str of strings2) {
  for (const char of str) {
    if (/[aeiou]/i.test(char)) {
      vowelCount++;
    }
  }
}

console.log(vowelCount);

// Write a for...of loop that iterates over an array of numbers and logs each number to the console.
function numbers(array) {
    for(let i=1;i<array.length;i++){
        console.log(i)
    }
}
let array=[1,2,3,4,5]
numbers(array)



// Write a for...of loop that iterates over a string and logs each character to the console.
// Create an object with key-value pairs representing items in a shopping cart. Use a for...of loop to calculate the total price of all items in the cart.
// Write a for...of loop that iterates over an array of objects representing books, and logs the title and author of each book to the console.
// Create an array of numbers and use a for...of loop to calculate the sum of all the numbers.
// Write a for...of loop that iterates over an array of words and logs each word to the console in reverse order.
// Create an array of objects representing students, with properties for name and grade. Use a for...of loop to calculate the average grade of all students.
// Write a for...of loop that iterates over an array of numbers and logs the square of each number to the console.
// Create an array of strings and use a for...of loop to count the number of vowels in all the strings combined.


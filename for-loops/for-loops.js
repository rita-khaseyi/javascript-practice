//Write a for loop that iterates through an array of numbers and adds 1 to each number.
function iterate(array) {
    for (let x = 0; x < array.length; x++) {
       
        array[x] +=1;
       
        
    }
    return array
}
let array=[2,3,4,5,6,7];
console.log(iterate(array));

//Write a for loop that iterates through an array of strings and concatenates them together into a single string.
function concat(array) {
    let  result=''
    for (let z = 0; z < array.length; z++) {
        
        result += array[z];
        
    }
    return result
    
}
let array1=['rita','ora']
console.log(concat(array1));

//Write a for loop that iterates through an array of objects and logs the value of a specific property for each object.


//Write a for loop that iterates through an array of numbers and logs the largest number.
function largest(array) {
    let large=array[0];
    for (let x = 0; x < array.length; x++) {
       if (array[x]>large) {
        large=array[x];
       }
        
    }
    return large
}
let num=[2,4,7,9];
console.log(largest(num));

//Write a for loop that iterates through an array of numbers and logs the sum of all the numbers.
function sumation(array) {
    let sum=0;
    for (let z = 0; z < array.length; z++) {
        sum+=array[z]
        
    }
    return sum
    
}
let nums=[3,4,5,];
console.log(sumation(nums));

//Write a for loop that iterates through an array of numbers and logs the product of all the numbers.
function product(array) {
    let multiply=1;
    for (let x = 0; x < array.length; x++) {
        multiply*=array[x]
        
    }
    return multiply
}
let nums1=[1,2,3,4,5,6,7,8,9];
console.log(product(nums1));

//Write a for loop that iterates through an array of numbers and logs only the even numbers.
function even(array) {
    for (let s = 0; s < array.length; s++) {
        if (array[s] %2==0) {
            console.log(array[s]);
        }
        
    }
}
let number=[1,2,3,4,5,6,7,8,9,10];
even(number);

//Write a for loop that iterates through an array of numbers and logs only the odd numbers.
function odd(array) {
    for (let v = 0; v < array.length; v++) {
        if (array[v] %2==1) {
            console.log(array[v])
        }
      
        
    }
}
let numb=[1,2,3,4,5,6,7,8,9,10];
odd(numb);

//Write a for loop that logs the numbers 1 to 10 to the console.
function print() {
    

for (let x = 0; x <=10; x++) {
    console.log(x)
}
}
print()

//Write a for loop that logs the even numbers between 1 and 20 to the console.
for (let e = 0; e <=20; e++) {
   if (e %2==0) {
    console.log(e)
   }
    
}

//Write a for loop that logs the sum of the numbers 1 to 10 to the console.
function addition() {
    

sum=0;
for (let f = 0; f <=10; f++) {
   sum+=f;
   
    
}
console.log(sum);
}
addition(); 

//Write a for loop that logs the numbers 1 to 100 to the console, but logs "Fizz" for multiples of 3, "Buzz" for multiples of 5, 
//and "FizzBuzz" for multiples of both 3 and 5.
function multiples() {
for (let x = 0; x <+100; x++) {
    if ((x %3==0 && x %5==0) ) {
        console.log("fizzbuzz");
    }
    else if (x %3==0) {
        console.log("fizz")
    }
    else if (x %5==0) {
        console.log("buzz")
    }
    else{
        console.log(x)
    }
    
}
}
multiples();



//Write a for loop that calculates the sum of the first 100 positive integers.
sum=0
for (let x = 1; x <=100; x++) {
    sum +=x
    
}
console.log(sum);

//Write a for loop that takes an array of numbers and prints out the sum of all the numbers in the array.
function sumArray(array) {
    let sum =0;
    for (let y = 0; y < array.length; y++) {
        sum +=array[y];
        
    }
    return sum
}
let arrays=[2,3,4,5,6,7,8,9,10];
console.log(sumArray(arrays));

//Write a for loop that takes an array of strings and prints out the length of each string.
function stringLength(array) {
    for (let a = 0; a < array.length; a++) {
        console.log(array[a].length)
        
    }
}
let strings=['ree','riri','ritah','kimberly']
stringLength(strings);

//Write a for loop that takes an array of numbers and prints out the average of all the numbers in the array.

function average(array) {
    let sum=0;
    for(let d=0;d<array.length;d++){
        sum+=array[d];

    }
    let averag=sum/array.length
    console.log(`The average of ${array} is ${averag}`)
}
let numbers=[2,3,4,5,6,7,8,9,10];
average(numbers)

//Write a for loop that takes an array of strings and prints out only the strings that have a length of 5 or more.
function strings1(array) {
    for(let i=0;i<array.length;i++){
        if(array[i].length>5){
            console.log(array[i])
        }
        
        
    }
    
    

}


let rita=['ritah','kimberly','kevine','khaseyi'];
strings1(rita);

//Write a for loop that takes an array of numbers and prints out only the numbers that are divisible by 3.
function divisiblity(array) {
    for(let x=0;x<array.length; x++){
        if (array[x] %3==0) {
            console.log(array[x])
        }
    }
}
let div=[2,3,4,5,6,7,8,9,12];
divisiblity(div);

//Write a for loop that takes an array of strings and prints out only the strings that start with the letter 'A
function stringcheck(array) {
    for(let s=0;s<array.length;s++){
        if (array[s][0]==='A') {
            console.log(array[s])
        }
    }
}
let strn=["Anita","Annet","Aliyah","Rita","ryan","alpha"];
stringcheck(strn);

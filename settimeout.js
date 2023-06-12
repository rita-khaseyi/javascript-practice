// function greet(name) {
//     console.log("Hello, " + name + "!");
//   }
  
//   setTimeout(greet, 2000, "John");
//   let count = 5;

//   function countdown() {
//     if (count > 0) {
//       console.log(count);
//       count--;
//       setTimeout(countdown, 1000);
//     } else {
//       console.log("Go!");
//     }
//   }
  
//   countdown();
//   const work=()=>{
//     console.log("let us work")
// }
// work()
// function reminder() {
//     console.log("please attend meeting")
// }
// setTimeout(reminder,4000)
// const takebreak=()=>{
//     console.log("please rest")
// }
// takebreak()
// //Question 1: Write a program that displays "Hello, World!"
// //  after a delay of 2 seconds using setTimeout.
// function greetings() {
//   console.log("Hello world!");

  
// }
// setTimeout(greetings,2000) 

// // Question 2: Implement a countdown timer that starts from 10 and displays
// //  the remaining time after a delay of 1 second using setTimeout.
// let counts=10
// function countdown1() {
//   if (counts>0) {
//     console.log(counts);
//     counts --
//     setTimeout(countdown1,1000)
    
//   }
// }
// countdown1()


// // Question 3: Create a function that generates a random number
// //  between 1 and 10 after a delay of 3 seconds using setTimeout. Display the generated number.

// // Question 4: Write a program that fades out an HTML element gradually over a duration of 5 seconds using setTimeout. Decrease the opacity by 0.1 every 1 second.

// // Question 5: Implement a function that displays a random quote
// //  from an array of quotes after a delay of 4 seconds using setTimeout.
// //  The quotes should be stored in an array, and the program should select
// //  a random quote using Math.random().

// // Question 6: Create a function called delayedExecution that takes
// //  a function as input and executes it after a delay of 1 second using setTimeout.
// function delayedExecution(callback) {
//   setTimeout(callback,1000)
  
// }
// function calling(callback) {
//   console.log("this is a callback function");
// }
// delayedExecution(calling)

// // Question 7: Write a program that prints the current time every second using setTimeout.

// // Question 8: Implement a function called debounce that 
// // takes a callback function as input and ensures that 
// // the callback is only executed after a delay of 500
// //  milliseconds has passed since the last invocation using setTimeout.
// function debounce(callback) {
//   setTimeout(callback,500)
  
// }
// function excecute(callback,num1,num2) {
//   let results=5*10
//   console.log(`result is ${results}`);
  
// }
// debounce(excecute)


// // Question 9: Create a program that displays a notification message after a random delay between 2 and 5 seconds using setTimeout
// . The message should be chosen randomly from an array of messages.
let message=new Array( notifications ); // a random number between 0 and 10 and  

// // Question 10: Write a function that repeats a given function every 2 seconds using setTimeout until a specified number of repetitions is reached.

// // Question 11: Implement a function called animateSequence that displays a sequence of images in an HTML element. Each image should be shown for 2 seconds using setTimeout before transitioning to the next image.

// // Question 12: Create a program that plays a sound after a delay of 3 seconds using setTimeout.
// function sound() {
//   console.log("boom");
  
  
// }
// setTimeout(sound,3000)


// // Question 13: Write a function that changes the background color of an HTML element after a delay of 1 second using setTimeout.

// // Question 14: Implement a program that scrolls the page to the top after a delay of 2 seconds using setTimeout.

// // Question 15: Create a function that displays a random number
// //  between 1 and 100 after a delay of 3 seconds using setTimeout.
// function displayRandomNumber() {
//   setTimeout(function() {
//     var randomNumber = Math.floor(Math.random() * 100) + 1;
//     console.log(randomNumber);
//   }, 10000);
// }

// // Call the function to start the delay
// displayRandomNumber();


// Question 16: Write a program that changes the font size of a text after a delay of 1 second using setTimeout.

// Question 17: Implement a function that displays a loading spinner for 3 seconds using setTimeout.

// // Question 18: Create a program that moves an element on the screen after a delay of 2 seconds using setTimeout.

// // Question 19: Write a function that shows a modal dialog after a delay of 1 second using setTimeout.

// // Question 20: Implement a program that highlights a specific element after a delay of 2 seconds using setTimeout.

// // Feel free to code the solutions for these questions on your own. Happy coding!

// function countdown(seconds) {
 
//   for(let i=0; i<seconds;i++){
//     if(i<=10){
//       seconds--
//       var timeout=(setTimeout,1000 );
//     }
//     else if(i==0){
//       clearInterval(timeout)
//       console.log("it is done");
//     }
//   }
// }
// let seconds=10
// countdown(seconds)
function countdown(seconds) {
  var intervalId = setInterval(function() {
    console.log(seconds);
    seconds--;

    if (seconds < 0) {
      clearInterval(intervalId);
      console.log("Countdown finished!");
    }
  }, 1000);
}

let seconds = 10;
countdown(seconds);







 
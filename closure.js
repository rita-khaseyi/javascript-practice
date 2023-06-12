const add=(a)=>{
    let num=20;
    const subtract=(b)=>{
        return num+b-a
    }
    return subtract;
}
let nums=add(50);
console.log(nums)
console.log(nums(25));
function outerFunction() {
    var outerVariable = 'I am from the outer function';
  
    function innerFunction() {
      console.log(outerVariable);
    }
  
    return innerFunction;
  }
  
  var closure = outerFunction();
  closure(); // Output: I am from the outer function
 
  // Write a function called createIncrementer 
// that returns an inner function. The inner
//  function should increment a counter variable 
// and return its value. The counter variable should
//  be accessible only through the inner function, 
// using closure. 
function createIncrementer() {
    let counter=0;
    function adds() {
        counter ++
        console.log(counter)
    }
    return adds
    
}
var closure=createIncrementer()
closure()

function user(name) {
    return function calling() {
        console.log(`hello ${name}`)
        
    }
    
}
let name="Rita"
var closure=user(name)
closure();


function addBy(num) {
    return function () {
        var adds=20+num
        console.log(adds)
    }
}
let num=10;
// var closure=addBy(num)
// closure()
let nums1=addBy(50);
console.log(nums1(50))
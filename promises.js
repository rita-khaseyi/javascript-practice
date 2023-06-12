let sucess=true;
let promise=new Promise((resolve,reject)=>{
    if (sucess) {
        resolve("I succeeded")
    }
    else{
        reject("i am still looking for a job")
    }

}).then(()=>{console.log("i will work hard")})
   .catch(()=>{console.log("take more time to upskill")})
   .finally(()=>{console.log("I am still worthy")})
console.log((promise))   


let sucesss=true
const myPromise = new Promise((resolve, reject) => {
    // Perform asynchronous operation
  
    if (sucesss) {
      resolve("imade it"); // Pass the result to resolve
    } else {
      reject("you cant keep a promise"); // Pass an error to reject
    }
  });
console.log(myPromise)  

function delayedPromise(delay) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Promise resolved after " + delay + " milliseconds");
      }, delay);
    });
  }
  
  // Usage example:
  delayedPromise(2000)
    .then((message) => {
      console.log(message);
    })
    .catch((error) => {
      console.error(error);
    });


    
  
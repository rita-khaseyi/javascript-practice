// //returns part of a string
// let word="absolutely"
// console.log(word.length);
// console.log(word.substring(4,-4));
// //replacing a string
// let food ="chapati"
// let food1=food.replace(/chapati/gi,"samosa")
// console.log(food1);
// //inserting a string at a given index
// let countries="kenya,uganda,tanzania,Ethiopia"
// let add="Rwanda"
// let pos=5
// let result=[countries.slice(0,pos)+","+add+countries.slice(pos)]
// console.log(result);
// //to lower case
// console.log(countries.toLowerCase())
// //to uppercase
// console.log(countries.toUpperCase())
// //removing whitrespaces from both ends of a string
// let sentence="   I am an introverted human  "
// console.log(sentence.trim());
// //changes a tring to an array
// let sen=sentence.split()
// console.log(sen);
// //slicing a string
// let all=sentence.slice(5,8)
// console.log(all);
// //count the number of times  a word exists in a string
// const stat="rita loves being selfless"
// var line1= (stat.match(/loves/gi)).length;
// console.log(line1);
// //finding the last element in the array
// arry=["rita","zee",24,78,"false"]
// let aray=arry[arry.length -1]
// console.log(arry)
// //converting an array to a string
// let words=["RIta","El","kimberly","Alen"]
// let word1=words.join()
// console.log(word1)
// //sort a string
// var sorting=[17,60,5,4,2,3,90,8,71,8]
// let sorted=sorting.sort((a,b)=>a-b)
// console.log(sorted)

// var arr = ["apple", "mango", "apple",
// "orange", "mango", "mango"];

// //mergesort

// function mergesort(array) {
//     if (array.length<2) {
//         return array;
        
//     }
//     let middle=Math.floor(array.length/2);
//     let left=array.slice(0,middle);
//     let right=array.slice(middle);
//     return merge(mergesort(left),mergesort(right));

// }

// function merge(left,right) {
//     let sorted=[]
//     while (left.length && right.length) {

//         if (left[0]<=right[0]) {
//             sorted.push(left.shift());
//         }
//         else{
//             sorted.push(right.shift());
//         }
//     }
//     return [...sorted,...left,...right]
// }
// let array=[43,54,6,8,19,90,13,5,3,122,16,9,1,2];

// console.log(mergesort(array));

// function binarysearch(arrays,target) {
//     let left=0;
//     let right=arrays.length-1;
//     while (left<=right) {
//         let mid=Math.floor((left+right)/2);
//         if (target===arrays[mid]) {
//             return mid;
//         }
//         else if (target<arrays[mid]) {
//             right=mid -1;
//         }
//         else{
//             left=mid+1
//         }
//     }
//     return null



// }
// let arrays=mergesort(array);
// let target=90;
// console.log(binarysearch(arrays,target));


// let str="beautiful";
// let str1=str.slice(-4);
// console.log(str1);

// let str2="I was feeling hungry today";
// let str3="eat";
// let str4=[str2.slice(0,4) + str3 + str2.slice(4)]
// console.log(str4)

// let str5="the quick brown fox jumps over the lazy dog"
// let str6=(str5.match(/the/gi)|| []).length;
// console.log(str6);

// //join()
// //returns a new string by joining all the elements in an array
// let arr1=['YAMAHA','BAJAJ','HONDA','TVS'];
// console.log(arr1.join());
// //.pop() Removes and returns the last element in an array 
// //if no index is paased to it
// let arr2=['YAMAHA','BAJAJ','HONDA','TVS'];
// console.log(arr2.pop());
// //.PUSH() adds new items to the end of an array
// //and returns the new length of the array
// let arr3=['YAMAHA','BAJAJ','HONDA','TVS'];
// console.log(arr3.push("Duccati",'royal'));
// console.log(arr3)
// //.shift() removes the first element and returns it
// let arr4=['YAMAHA','BAJAJ','HONDA','TVS']
// console.log(arr4.shift());
// console.log(arr4);
// //.unshift() add elements at the beginning of an array
// //and returns new length
// let arr5=['YAMAHA','BAJAJ','HONDA','TVS'];
// console.log(arr5.unshift("ducatti","royal","sbw"))
// console.log(arr5);
// //.concat() joins two or more arrays
// //and returns new array containing joined array
// let arr6=['YAMAHA','BAJAJ','HONDA','TVS'];
// let arr7=[ 'ducatti', 'royal', 'sbw', 'YAMAHA', 'BAJAJ', 'HONDA', 'TVS' ]
// let arr8= arr6.concat(arr7);
// console.log(arr8);
// //.sort()sorts the element and overwrites the original array
// //sorts in ascending order
// let arr9=['YAMAHA','BAJAJ','HONDA','TVS'];
// let arr91=arr9.sort();
// console.log(arr91);
// //.splice() adds or removes elements in an array
// let arr0=['YAMAHA','BAJAJ','HONDA','TVS'];
// arr0.splice(2,3,"a,","b","c");
// console.log(arr0);
// //slice()slices out a piec of an array and creates a new array
// let rita=["i ","love" ,"3am"," music"]
// let rita1=rita.slice(1,2)
// console.log(rita1);

// //reverse() reverse oder of element in an array
// let rita2=["i ","love" ,"3am"," music"];
// rita2.reverse()
// console.log(rita2);
// //isArray()checks if an object is an array
// let rita3=["i ","love" ,"3am"," music"];
// console.log(Array.isArray(rita3));

// //indexof() returns the first index position of 
// //the specified value returns-1 if value not there
// let rita4=["i ","love" ,"3am"," music"]
// console.log(rita4.indexOf("love"));
// //lastIndexOf() returns the last index positon
// //of a specified index returns -1 if not present
// let rita5=["i ","love" ,"3am"," music","i"]
// console.log(rita5.lastIndexOf("i"));
// //find()returns the first elemnt satisfying
// //the provide testing function returns undefined 
// //if no values satisfies
// //does it work on numbers only??
// const arra=[5,12,8,130,44];
// const found=arra.find((Element)=>Element <= 8);
// console.log(found)

// //includs()returns true if an array contains the specified value
// console.log(arra.includes(8));
// //entries()
// //

// function merges(tri) {
//     if (tri.length<2){
//         return tri;
//     }
//     let mids=Math.floor(tri.length/2);
//     let left=tri.slice(0,mids);
//     let right=tri.slice(mids)
//     return mergingd(merges(left),merges(right));
// }
// function mergingd(left,right) {
//     let sortings=[];
//     while (left.length && right.length) {

//         if (left[0]<=right[0]) {
//             sortings.push(left.shift());
//         }
//         else{
//             sortings.push(right.shift());
//         }
//     }
   
//     return[...sortings,...left,...right];
// }
// let tri=[24,6,5,3,8,1,2,9,17];
// console.log(merges(tri));

// function search(rit,targets) {
//     let leftindex=0;
//     let rightindex=rit.length-1;
//     while (leftindex<=rightindex) {
//         let middle=Math.floor((leftindex+rightindex)/2);
//         if(targets===rit[middle]){
//             return middle;
//         }
//         else if (targets < rit[middle]) {
//             rightindex=middle -1;
//         }
//         else{
//             leftindex=middle+1;
//         }
//     }
//     return null;
// }
// let rit=merges(tri);
// let targets=17;
// console.log(search(rit,targets));
//  let rit1="I am a javascript lover";
//  let rit2= rit1.slice(-6);
//  console.log(rit2);
  
//  let rit3=rit1.replace(/javascript/gi,"coding");
//  console.log(rit3);

//  let rit4= rit3
//  let replaced="and music"
//  let newrep=rit3.slice(0,13).concat(" ", replaced, rit3.slice(13));
//  console.log(newrep);
//  console.log(newrep.split());
//  let rit5=newrep.match(/a/gi).length;
//  console.log(rit5);
//  let rit6=["coding","is","always","fun","if","you","solve","the","problem","before","coding"];
//  console.log(rit6)
//  console.log(rit6.join());
//  console.log(rit6.pop());
//  console.log(rit6.shift());
//  console.log(rit6);
//  console.log(rit6.unshift("i ","love","coding",","))
//  console.log(rit6)
//  let arri7=rit2.concat(" ", rit1," ", rit3);
//  console.log(arri7);
//  ar=rit6.sort();
//  console.log(ar);
//  let ar1=rit6.splice(2,3,"rita","loves","coding");
//  console.log(ar1);
//  let ar2=rit6.reverse();
//  console.log(ar2);


 function looping(array) {
    for (let v = 0; v < array.length; v++) {
        console.log(v);
        
    }
 }
 let array=["ree","wesh","alli","alen"]
 console.log(looping(array));
// // Student Grades: Create an object representing a student,
//  which includes their name and an array of grades. Write a 
//  function to calculate the average grade for the student.
const Student = {
    name: "John",
    grades:[79,87,96,76,65,78],
   }
   function  avarages(Student) {
    let sum=0
    for(let i=0;i<Student.grades.length;i++){
        sum+=Student.grades[i]

    }
    const avag=sum/Student.grades.length
    return avag
    
    

    
  };
  const averageGrade = avarages(Student);
console.log("Average Grade:", averageGrade);

 
const libraryCatlog={books:[
    {
        title:"born a crime",
        author:"trevor noah",
        year:2021
    },
    {
        title:"desparados",
        author:"miguel cruiz",
        year:2018
    },
    {
        title:"run amanda run",
        author:"ree",
        year:2024
    }
]};

// // Product Inventory: Create an object representing a product inventory. 
// The inventory should store a collection of products, each represented by 
// an object with properties like name, price, and quantity. Write functions to 
// add a new product to the inventory, update the quantity of a product, and 
// calculate the total value of the inventory.
// const productINventory=[
//     {name:"soap",Price:200,quantity:5},
//     {name:"book",Price:100,quantity:10},
//     {name:"cake",Price:150,quantity:15}
// ]
// function addProduct(product) {
//     if (product!=productINventory) {
//         productINventory.push(product)
        
//     }
//     else{
//         console.log("product already present");
//     }
    
    
// }
// let product={name:"cookie",Price:300,quantity:10}
// addProduct(product)

const productInventory = [
  { name: "soap", price: 200, quantity: 5 },
  { name: "book", price: 100, quantity: 10 },
  { name: "cake", price: 150, quantity: 15 }
];

function addProduct(product) {
  const existingProductIndex = productInventory.findIndex(p => p.name === product.name);
  if (existingProductIndex === -1) {
    productInventory.push(product);
  } else {
    console.log("Product already present");
  }
}

let newProduct = { name: "cookie", price: 300, quantity: 10 };
addProduct(newProduct);

console.log(productInventory);


// // Phone Directory: Create an object representing a phone directory.
//  The directory should store a collection of contacts, each represented 
//  by an object with properties like name and phone number. Write functions
//   to add a new contact to the directory, search for a contact by name, and
//    delete a contact.

const phoneDirectory=[
    {name:"rita",phonenumber:722402144},
    {name:"tricia",phonenumber:757770427},
    {name:"wendy",phonenumber:789674333},
]
function addnew(phone) {
    let indexcheck=phoneDirectory.findIndex(p=>p.name===phone.name)
    if (indexcheck=== -1) {
        phoneDirectory.push(phone)
        
    }
    else{
        console.log("product already exists");
    }
}
let newphone={name:"kimmy",phonenumber:0757770}
addnew(newphone)
console.log(phoneDirectory);
function search(names) {
    let searching=phoneDirectory.findIndex(p=>p.name===names)
    if (searching=== -1) {
        console.log("name not found");
    }
    else{
        console.log("name is present");
    }
    
}
let names="kimmy";
search(names);
function deleting(contact) {
    let cont=phoneDirectory.findIndex(e=>e.name===contact.name)
    if (cont=== -1) {
        console.log("contact not found");
    }
    else{
        phoneDirectory.splice(cont, 1);
      console.log(phoneDirectory);
    }

}
let contact={name:"rita",phonenumber:0722402144}
deleting(contact);
console.log(phoneDirectory);


// // Bank Account: Create an object representing a bank account.
//  The account should have properties like account number, account 
//  holder name, and balance. Write functions to deposit money into 
//  the account, withdraw money from the account, and check the account balance.
const bankaccount=[
    {acountnumber:456789,holdername:"kimani",balance:300},
    {acountnumber:56987,holdername:"waithera",balance:500},
    {acountnumber:67895,holdername:"rita",balance:2000}
    
]
function widthraw(account,amount) {
    let finding=bankaccount.findIndex(p =>p.acountnumber === account.acountnumber)
    if (finding === -1) {
      console.log("account not found");  
    
    }
    else{
        account.balance+=amount
        console.log(account.balance);
    }
}
let account={acountnumber:456789,holdername:"kimani",balance:300};
let amount=60000;
widthraw(account,amount)




// Create an object representing a car with properties like make, model, 
// and year. Print out the car's details in the format "The [year] [make] [model]."
const car={
    make:"bugatti",
    model:"trish",
    year:2023

}
printdetails=()=>{
    console.log(`The ${car.make} ${car.model} ${car.year} is being driven`);
}
printdetails()

// Write a function that takes an object as an argument and 
// returns the number of properties in the object.

// Write a function that takes an object representing 
// a person with properties like name, age, and city.
//  Add a method to the object that prints out a greeting
//  message like "Hello, my name is [name]. I am [age] years old, and I live in [city]."
function person(name,age,city) {
    this.name=name;
    this.age=age;
    this.city=city;

    this.greet=function(){
        console.log(`Hello my name is ${this.name}.I am ${this.age},and I live in ${this.city}`);
    }
   

}
let person1=new person("rita",22,"Nairobi");
person1.greet()

// Write a function that takes an object as an argument and
//  returns an array containing all the keys of the object.
function kays(obj) {
    console.log(Object.keys(obj));
}
let student={
    name:"rita",
    school:"akirachix",
    class:"anita borg"
}
kays(student)
// function getKeys(obj) {
//     return Object.keys(obj);
//   }
  
//   const person1 = {
//     name: "John",
//     age: 25,
//     city: "New York"
//   };
  
//   const keys = getKeys(person1);
//   console.log(keys); // Output: ["name", "age", "city"]
  
// Create a function that takes two objects and checks
//  if they have the same properties (keys) and values.
//  Return true if they are identical and false otherwise.
function checkkeys(obj1,obj2) {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    if (keys1.length !== keys2.length) {
        return false;
      }
      for (let key of keys1) {
        if (obj1[key] !== obj2[key]) {
          return false;
        }
      }
      return true;
    
}
const obj1 = { name: "John", age: 30, city: "New York" };
const obj2 = { name: "John", age: 30, city: "New York" };
const obj3 = { name: "Jane", age: 25, city: "London" };

console.log(checkkeys(obj1, obj2)); // Output: true
console.log(checkkeys(obj1, obj3)); // Output: false


    
  
    



// Write a function that takes an array of objects representing students,
//  each with properties like name and grade. Calculate and print 
// the average grade of the students.
function grade(student) {
    let total=0
    for (let i = 0; i < student.length; i++) {
       
        total+=student[i].grades
    }
   const averageGrade=total/student.length;
   console.log('Average grade:', averageGrade)
    
}
let students=[
    {name:"Rita",
     grades:80},
     {name:"wendy",grades:75}

]
grade(students)


const books = [
    { title: 'The Catcher in the Rye', author: 'J.D. Salinger', publicationYear: 1951,
    isAvailable: true },
    { title: 'Great Expectations', author: 'Charles Dickens', publicationYear: 1861,
    isAvailable: false },
    { title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', publicationYear:
    1866, isAvailable: true },
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', publicationYear: 1925,
    isAvailable: false },
    { title: 'The Odyssey', author: 'Homer', publicationYear: -800, isAvailable: true },
    ];
    
    // Write a JavaScript program that performs the following tasks:
    // 1. Create a function called getAvailableBooks that returns an array of all available
    // books.
    function getAvailableBooks(books) {
        let booksarr=[]
        for (const book of books) {
            if (book.isAvailable===true) {
               booksarr.push(book) 
            }
            
        }
        console.log(booksarr);
    }
    getAvailableBooks(books)

    // 2. Create a function getBooksByAuthor that takes an author's name as an argument and
    // returns an array of all books by that author.
    function getBooksByAuthor(author) {
        let bookarray=[]
        for (const book of books) {
            if (book.author===author) {
                bookarray.push(book)
            }
        }
        console.log('Authors books:',bookarray);

    }
    let author="Charles Dickens"
    getBooksByAuthor(author)
    


    // 3. Create a function addNewBook that takes a book object as an argument and adds it
    // to the library, ensuring that the new book has all required properties (title, author,
    // publicationYear, and isAvailable).
    function addbook(book) {
        const requiredProperties = ["title", "author", "publicationYear", "isAvailable"]
        for (const property of requiredProperties) {
            if (!book.hasOwnProperty(property)) {
              console.log(`Missing required property: ${property}`);
              return;
            }
        }
        books.push(book);
          console.log("New book added to the library.");
       
        
    }
    const book1 = {
        title: "Book 1",
        author: "Author 1",
        publicationYear: 2022,
        isAvailable: true
      };
      
      const book2 = {
        title: "Book 2",
        author: "Author 2",
        publicationYear: 2023
        // Missing isAvailable property
      };
      addbook(book1);
      addbook(book2);
      console.log(books);
    
      
      
      
      
     
      
     
      
    // 4. Create a function checkoutBook that takes a book title as an argument and changes
    // the book's isAvailable property to false. If the book is not found in the library, the
    // function should return a message indicating that the book is not available.
    function checkoutBook(title) {
        let finding=books.find(b=>b.title===title)
        if (!finding) {
            console.log("book is not available");
        }
        else{
            finding.isAvailable =false
            console.log(books);
            console.log(`Checked out book: ${title}`)
            

        }
        
    }
    let title='The Catcher in the Rye'
    checkoutBook(title)

   
    // 5. Create a function returnBook that takes a book title as an argument and changes the
    // book's isAvailable property to true. If the book is not found in the library, the function
    // should return a message indicating that the book does not belong to the library.

    function returnBook(title) {
       let finding=books.find(b=>b.title===title)
       if (!finding) {
        console.log("book does not belong to the library");
       } 
       else{
        finding.isAvailable=true
        console.log(`returned book: ${title}`);
       }
    }
    let titles="Great Expectations"
    returnBook(titles)

//   Write a function countProperties(obj) that takes an
//  object as input and returns the number of properties
//  (keys) present in the object.


// Write a function reverseObject(obj) that takes an object as input and returns a new object where the keys and values are reversed. For example, if the input object is { a: 1, b: 2, c: 3 }, the output should be { 1: 'a', 2: 'b', 3: 'c' }.

// Write a function getAverageAge(people) that takes an array of people objects, where each object has a name and age property, and calculates the average age of all the people in the array.

// Write a function mergeObjects(obj1, obj2) that takes two objects as input and returns a new object that combines the properties of both objects. If there are overlapping keys, the value from obj2 should overwrite the value from obj1.

// Write a function getNestedValue(obj, path) that takes an object and a string representing a nested path, and returns the value at that nested path in the object. For example, if the input object is { a: { b: { c: 42 } } } and the input path is "a.b.c", the output should be 42.


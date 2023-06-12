// Create a Rectangle class with properties width and height.
//  Include methods to calculate the area and perimeter of the rectangle.
class Rectangle{
    constructor(width,height){
        this.height=height
        this.width=width
    }
     calculateArea() {
       let area=this.width*this.consoleheight 
    console.log(`area: ${area}`);
        
    }
    calculatePerimeter(){
        let perimiter=(this.width+this.height)*2
        console.log(`perimeter:${perimiter}`);
    }
}
let rectangle=new Rectangle(4,5);
rectangle.calculateArea(4,5)
rectangle.calculatePerimeter(4,5)

// Create a Circle class with a property radius. 
// Include methods to calculate the area and circumference of the circle.
class Circle{
    constructor(radius){
        this.radius=radius
    }
    area(){
        const circlearea=Math.PI*this.radius*this.radius
        console.log(`area:${circlearea}`);
    }
    circumference(){
        const circum=(Math.PI *this.radius)*2
        console.log(`circumference:${circum}`);
    }
}
let circle=new Circle(5)
circle.area()
circle.circumference()

// Create a Person class with properties name and age. 
// Include a method that prints out a greeting message 
// with the person's name and age.
class Person{
    constructor(name,age){
        this.name=name
        this.age=age
    }
    greet(){
        console.log(`hello my name ${this.name} and i am ${this.age}`);
    }
}

// Create a BankAccount class with properties accountNumber 
// and balance. Include methods to deposit money, withdraw money,
//  and get the current balance.
class BankAccount{
    constructor(accountNUmber,balance){
        this.accountNUmber=accountNUmber
        this.balance=balance
    }
    widthraw(amount){
        if (this.balance>=amount) {
            this.balance-=amount
            console.log(`widthrawal successful your balance is now ${this.balance}`);
        }
        else{
            console.log("not enough money in your account");
        }


    }
    deposit(amount){
        this.balance+=amount
        console.log(`deposited ${amount} your balance is ${this.balance}`);

    }
    balancecheck(){
        console.log(`your balance is ${this.balance}`);
    }
}
let account1=new BankAccount(234566,500)
account1.widthraw(500);
account1.deposit(10000)
account1.balancecheck()

// Create a TodoList class that represents a collection of tasks.
//  Include methods to add a task, mark a task as completed,
//  and get the total number of tasks.
  
class TodoList {
    constructor() {
      this.tasks = []
    }
  
    addTask(task) {
      this.tasks.push(task);
      console.log(this.tasks);
    }
  
    getTotalTasks() {
      let total = this.tasks.length;
      console.log(total);
    }
  }
  
  let task1 = new TodoList(["read javascript"]);
  task1.addTask("eat cookies");
  task1.getTotalTasks();
  
   




// Create a Student class with properties name and grades. 
// Include methods to add a grade, calculate the average grade,
//  and get the student's grade summary (e.g., highest grade, lowest grade).
class Student{
    constructor(name){
        this.name=name
        this.grades=[]
    }
    addgrade(grade){
        this.grades.push(grade)

    }
    
}
// Create a Person class with properties like name and age. Implement a method greet() that logs a greeting message with the person's name and age.

// Create a Rectangle class with properties width and height. Implement methods to calculate the area and perimeter of the rectangle.

// Create a BankAccount class with properties accountNumber and balance. Implement methods to deposit and withdraw funds from the account.

// Create a Student class with properties name, grade, and subjects. Implement a method addSubject(subject) that adds a subject to the student's list of subjects.

// Create a Product class with properties name, price, and quantity. Implement methods to calculate the total value of the product (price * quantity) and check if the product is in stock.

// Create a Rectangle class that has width and height properties. Include methods to calculate the area and perimeter of the rectangle.

// Implement a Person class with name and age properties. Add a method that prints out a greeting message with the person's name and age.

// Create a BankAccount class with accountNumber and balance properties. Include methods to deposit and withdraw funds from the account, and also a method to check the current balance.

// Design a Student class with name, grade, and an array of subjects. Implement methods to add a subject to the student's subjects list, calculate the average grade, and display the student's information.

// Build a Product class with name, price, and quantity properties. Implement methods to increase or decrease the quantity of the product, and calculate the total value (price * quantity).
// Create a Person class with name and email properties. Implement a method that checks if the person's email is valid (e.g., contains '@' symbol).

// Design a Circle class with a radius property. Add methods to calculate the circumference and area of the circle.

// Implement a Library class with an array of books as a property. Include methods to add a book to the library, search for a book by its title, and display all the books in the library.

// Create a Bank class with an array of accounts. Each account should have properties like accountNumber, accountHolder, and balance. Implement methods to add a new account, find an account by account number, and calculate the total balance of all accounts.

// Build a TodoList class with an array of tasks as a property. Include methods to add a task, mark a task as completed, and display all the tasks in the list.
// Create a Circle class that has a radius property. Include methods to calculate the circumference and area of the circle.

// Implement a Book class with title, author, and publicationYear properties. Add a method that returns a formatted string with the book's information.

// Design a Playlist class with name and tracks properties. Include methods to add a track to the playlist, remove a track, and shuffle the tracks.

// Create a Bank class that manages multiple BankAccount instances. Include methods to add a new account, get the total balance of all accounts, and find the account with the highest balance.

// Build a TodoList class that keeps track of tasks. Each task should have a description and completed status. Include methods to add a new task, mark a task as completed, and get the count of incomplete tasks.


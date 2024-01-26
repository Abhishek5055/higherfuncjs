// //this keyword 
// // refers to an object that is executing the current piece of code.
// const student = {
//     name:"Abhishek",
//     eng:99,
//     maths:100,
//     phy:99,
//     social:98,
//     getAvg(){
//         let avg = (this.eng+this.maths+this.phy+this.social)/4;
//         console.log(avg);
//         console.log(this.name)
//     }
// }
// student.getAvg()

// // try and catch
// // the try  allows you to define a block of code to be tested for errors while it is being executed
// // the catch allows you to define a block of code to be executed . if an error occurs in try block

// try{
//     console.log(a);
// }
// catch(e){
//     console.log(e);
// }


// // Miscellaneous Topics

// //Arrow functions
// let sum = (a,b) =>{
//     console.log(a+b);
// };
// sum(2,3)

// //ex:2
// let cube = (n) =>{
//     console.log(n*n*n);
// };
// cube(3);

// // ex:3
// let pow = (a,b) => {
//     console.log(a**b)
// }
// pow(2,3)

// // arrow function without argument
// const hello = () =>{
//     console.log("Hello world");
// }
// hello()

// //Implicit return
// const add = (a, b) => a + b;
// console.log(add(3, 5)); 

// //Set TimeOut Functions
// console.log("Hi there");
// setTimeout( 
//     () => {
//         console.log("Abhishek Home")
//     },4000)
// console.log("Welcome to");


// //setInterval
// let id = setInterval( () =>
// {
//     console.log("Hi");
// },2000)
// console.log(id) // by getting the value we can stop the function

// // this keyword with arrow functions and normal functions

// const student = {
//     name:"Abhi",
//     marks: 94.40,
//     prop:this, //global scope

//     getname: function (){
//         console.log(this);
//         return this.name; // 'Abhishek'
//     },
//     getMarks : () =>
//     {
//         console.log(this); // parent's scope -> window
//         return this.marks; 
//     },
//     getInfo1: function () {
//        setTimeout( () =>   //arrow function
//        {
//         console.log(this); // student
//        },2000)
//     },
//     getInfo2: function () {
//         setTimeout( function ()  //normal function
//         {
//          console.log(this); // window
//         },2000)
//     }
// }

//Practice Questions
// // write an arrow function that returns the square of a number 'n';
// let sqr = (n) => n*n;
// console.log(sqr(5));

// // practice Question 2
// // write a function that prints "HelloWorld" 5 times at intervals of 2s each
// let id = setInterval(()=>
// {
//     console.log("Hello World")
// },2000)

// setTimeout (()=>{
//     clearInterval(id);
//     console.log("Clear Interval")
// },10000)


// const arrayAverage = (arr) => {
//     console.log((arr[0]+arr[1]+arr[2]+arr[3]) / arr.length);
// }
// arrayAverage([2,3,4,5]);

// let n = 10;
// const isEven = (n) =>
// {
//     if(n%2==0){
//         console.log("Even")
//     }
// }
// isEven(10)

//Question 3
// here we get a output as undefined
// const object = {
//     message:'Hello, World!',

//     logMessage(){
//         console.log(this.Message);
//     }
// };
// setTimeout(object.logMessage, 1000);

// //Question4
// let length = 4;
// function callback(){
//     console.log(this.length);
// }
// const object = {
//     length:5,
//     method(callback) {
//         callback();
//     },
// };

// object.method(callback, 1, 2);
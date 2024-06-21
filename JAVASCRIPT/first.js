// let a="HTML"
// let b="CSS"
// let c="JS"
// console.log(a+" is used for structure\n"+b+" is used for style\n"+c+" is used for function");
//----------------------------------------------------------------------------------------------
// Variable hoisting:
// if you are trying to, do the variable hoisting with let and const variable ,
//then the values are going into the Temporal Dead Zone(TDZ) then we cant access the values from TDZ
//---------------------------------------------------------------------------------------------------

// console.log(`Html is used for structure 
// Css is used for style 
// Js is used for function`)

// console.log(`${a} is used for structure 
// ${b} Css is used for style 
// ${c} Js is used for function`);

// taking input from the user

// let fname=prompt("Enter your name")
// console.log(fname)

// let fname=prompt("enter your name")
// let age=prompt("enter your age")
// let role=prompt("enter your role")
// console.log(`my name is ${fname} and 
// i am ${age} year old and 
// i am working as a ${role}`)

// let n1=parseInt(prompt("Enter n1 value"))
// let n2=parseInt(prompt("enter n2 value"))
// console.log(`Addition of ${n1} and ${n2} is ${n1+n2}`);

// let x=[10,20,30,40] 
// console.log(x) // array datatype is the output
// console.log(x[2]); // number  data type is the output

// Array methods:
//-----------------
// deleting the elements from array(by default it will delete the last element)
// let x=[10,20,30,40,50]
// x.pop()
// console.log(x); // [10,20,30,40]

// Adding elements into array( add elements at last position)
// let x=[10,20,30,40,50]
// x.push(60) // [10 20 30 40 50 60]
// console.log(x); 
// x.push(70,80) // [10 20 30 40 50 60 70 80]
// console.log(x);

// deleting the element at first index
// let x=[10,20,30,40,50]
// x.shift()
// console.log(x);

// adding elements at first index
// let x=[10,20,30,40,50]
// x.unshift("new")
// console.log(x);

// include is used to check the given element is present in array or not
// let x=[10,20,30,40,50]
// let y=x.includes("hi")
// console.log(y); // false

// indexOf is used to give the index postion of particular element,if element is not found it will give -1 as output
// let x=[10,20,30,40,50]
// let y=x.indexOf(60)
// console.log(y); //-1
// let z=x.indexOf(50) //4
// console.log(z);

//------------------------------------------------------------------------------
// splice method: is used to delete the values in between elements and it will accept min two arguments and max n
//---------------------------------------------------------------
// syntax a.splice(start index,delete count,element to be added)
//---------------------------------------------------------------
// slice wiill affect the original array and add the elements
// we need to print oroginal array,no need to store in another variable

//----------------------------------------------------------------------
// slice method: it is going to accept two arguments(start index,end index)
//------------------------------------------------------------------------
// syntax:a.slice(start index,end index) start and end index
//----------------------------------------------------------
// it will not affect the original array and cant add the elements.
// we need to take the another variable and store and print 
// it will always ignore ending index.

// splice
//=======

// let a=[10,20,30,40]
// a.splice(1,2,"new")
// console.log(a);
// let b=[10,20,30,40]
// b.splice(0,0,0)
// console.log(b);

//slice
//======

// let a=[10,20,30,40]
// a.slice(1,2) // it will not affect the original array your trying to do like this
// console.log(a);
// let b=a.slice(1,2) // it will start from index 1 and it will return before end index element and ignore end index element
// console.log(b);
// let c=a.slice(0,3)
// console.log(c);

// console.log(1+"a") //1a
// console.log(1-"a"); // NaN
// console.log(1+1); // 2
// console.log("a"+1);  //a1
// console.log("a"-1);  // NaN

// Nested Arrays
// let a=[10,20,30,40]
// let b=[50,60,70,80]
// let s=["hi","hello"]
// let c=[a,b]  // [[10,20,30,40],[50,60,70,80]]
// console.log(c)
// let d=c[0] //[10,20,30,40]
// console.log(d)
// // concat method
// let e=a.concat(b,s) //[10,20,30,40,50,60,70,80,'hi','hello']
// console.log(e)
// let f=c[2]
// console.log(f) // undefined

//======================================================
// Object: in js objects are represented by using {} and 
//in js objects are stored in the form of key-value pair
//======================================================
// let student={

// }
//console.log(student)  // empty object {}

// let student={
// 	name:"Nandu",
// 	age:23,
// 	add:"ongole"
// }
// console.log(student) // total objects details will be printed
// console.log(student.name); // only name value will be printed
// console.log(student.age); // only age value will be printed
// student.age=25          // updating the age
// console.log(student);
// console.log("============================");
// student.id  // undefined key
// console.log(student);
// student.marks="8CGPA" // adding  the new attribute into the objects directly with value 
// console.log(student);
// delete student.marks // delete the marks attribute from the object
// console.log(student);

// let person={
// 	name1:"Nandu",
// 	role:"SW-Dev",
// 	skills:["Java","SQL","JS"],
// 	frnd:[
// 		{fname:"Ram",skill:["finance","banking"]},
// 		{fname:"Praveen",sk:["java","sql"]},
// 		{fname:"Vamsi",s:["Data e","typing"]}	        
//       ]
// }
// console.log(person.skills[0]);
// console.log(person.frnd[1])
// console.log(person.frnd[2].s[1])
//  person.skills.splice(2,1,"JAVA","Js")
//  console.log(person);


// let a="Nandu"
// let b="SW Engineer"
// let c=["Java","SQL","JS"]
// let f=["\n1.Vamsi","2.Ram","3.Praveen"]
// console.log(`my name is ${a}
// i am working as ${b}
// these are my skills ${c}
// i have few friends they are ${f[0]}\n${f[1]}\n${f[2]}
// `);

// let person={
// 	name1:"Nandu",
// 	role:"SW-Dev",
// 	skills:["1.Java","2.SQL","3.JS"],
// 	frnd:[
// 		{name:"1.Ram",skills:["finance","banking"]},
// 		{name:"2.Praveen",skills:["java","sql"]},
// 		{name:"3.Vamsi",skills:["Data e","typing"]}	        
//       ]
// }
// console.log(`my name is ${person.name1}
// I am Working as ${person.role} 
// these are my skills\n${person.skills[0]} \n${person.skills[1]}\n${person.skills[2]}
// I have few friends \n${person.frnd[0].name}\n${person.frnd[1].name}\n${person.frnd[2].name}`);

// let address={
// 	city:"Ongole",
// 	state:"Andhra"
// }
// let empDetails={
// 	empId:123,
// 	eCom:"TCS"
// }
// let skills=["JAVA","SQL",'JS']

// let person={
// 	name:"Nandu",
// 	age:23,
// 	address,
// 	empDetails,
// 	skills
// }
// console.log(person);
// console.log(person.address.city);
// console.log(person.empDetails.eCom);
// console.log(person.skills[0]);

// let arr=["JAVA","SQL","JS"]

// let web4=arr[0]
// let web5=arr[1]
// let web6=arr[2]
// console.log(web4,web5,web6);

// let[web1,web2,web3]=arr
// console.log(web1,web2,web3);

//Function Types:
//=============================================================================
// Normal Function: this is normal type function 
// which contain function is the keyword along with identifier(function name) with block
//====================================================================================
// Anonymous Function: a function without function name and we cant call this function
//=====================================================================================
// Function With Expression: this also same as anonymous function.
//but here we are going to store an anonymous in separate variable

// Normal Function:
// function greet()
// {
// 	console.log("Hi Good Morning");
// }
// greet() // Hi Good Morning
// console.log(greet); // Whole Function is the output
// console.log(greet()); // Hi Good Morning and Undefined is the output

//Anonymous Function:
// function ()  //Function statements require a function
// {
// 	console.log("Hello HI");
// }

// Function With Expression:
// let x=function ()
// {
// 	console.log("This is Function With Expression");
// }
// x() // This is  Function With Expression
// console.log(x); //whole function is output
// console.log(x()); //it will print both as the output

// console.log("Hello");
// function x()
// {
// 	// Here JS Engine Again Creates Another Context call Local Execution Context.
// 	// LEC contains two phases 1. Variable Phase and 2.Execution Phase
// 	let a=20
// 	a=30
// 	console.log(a);
// 	console.log("This Is X function");
// }
// function y()
// {
// 	let b=40
// 	console.log(b);
// 	console.log("this is y function");
// }
// y()
// x()

// console.log("Hello");
// let a=10
// function x()
// {
// 	let a="hi"
// 	console.log(a);
// }
// x()
// function y()
// {
// 	let b=20
// 	console.log(b);
// }
// //console.log(b); // here b is not defined in Global Execution Context.
// y()
// console.log("End");


//Functions:
// named block of instructions which is used to perform a specific TextTrackList.
// Function gets executed only when it is ChannelSplitterNode.applythe main advantage og functyion is,we can achieve code reusability.
// main purpose: code reusability,which means-code once decalred we can use anywhere

// Note:
// syntax to create a function:
// Generally,we ca create a function in 2 ways:
// 1.using function declaration statement(function statement)
// 2.function Expression.

// 1. FUNCTION DELCARATION STATEMENT:
// function identifier(parameter1.parameter2,......)
// {
// 	statements
// }

// Parameterized Function
// parameters: if we pass variable through function body is konwn as parameters
// arguments: if we pass values through the function call is known as arguments

// function add(a){
// 	console.log(a);
// }
// add(4) // output 4
// add(["hi","Hello"]) // data type is array o/p: hi,hello
// add({name:"nandu"}) // data type is object o/p: name:nandu

// Return statement in function body
//=============
// Type:1
//=============
// function x()
// {
// 	return "hi"
// }
// x()  // no output-blank
// let y=x() //y="hi"
// console.log(y);  // hi
// console.log(x);  // whole function body is the output
// console.log(x()); // hi is the output
//=============
// Type 2
//==============

// function x()
// {
// 	console.log("Hello");
// 	return 10
// }
// x() // only hello is the output
// let y=x() //y=10
// console.log(y); // 10
// console.log(x()); // hello and 10 is the output
//======================
// Type 3

//===============
// function x()
// {
// 	console.log("Hello");
// 	return 20  // if we are writing any statements after return statement 
// 	//it is not going to be executed because it is ignored.and statemets are hiding
// 	console.log("Bye"); 
// }
// x()   // only  hello 
// let y=x()
// console.log(y);  // hello and 20 is the output
// console.log(x()); // hello and 20

//===============================================================
// Closure : this concept occur when we have nested function
// Closure means: all the child function is practice and remembering all the variables 
//of its parent function variable
//===========================================================
// let a=10
// function x()
// {
// 	let b=20
// 	function y()
// 	{
// 		return b
// 	}
// 	return y
// }
// let z=x()
// console.log(z);
// let m=z()
// console.log(m);


//==============================
// Calling Anonymous Function
//=============================
// IIFE (IMMEDIATE INVOKE FUNCTION EXPRESSION)
//  (function()
//  {
// 	console.log("IFFE");
//  })();

//  (function(){
//   console.log("Function");
 
//  })();

//=======================================================================================
// Arrow Function : it is a one type of function ,here no need to mention function keyword
// by using this symbol like =>
// no need of  function block ,only one statement is enough
// here return keyword is not working ,this is wokrs in function body only(a function contain function keyword)
// disadvantage: here we doesnot use argument keyword in arrow function.
//===============================================================================================
// syntax: let add=()=>{ log(" hello")}

// let add=(a,b)=>{
// 	return a+b
// }
// let add1=(a,b)=>a+b
// console.log(add1(4,4));
// //===============
// let greet=a=>a
// console.log(greet("hello"));

// function x(a,b=0)
// {
// 	console.log(a+b);
// }
// x(4,6)


//=================================================================================================
// Higer Order Function:
// A function which accepts  arguments as the another function is called Higer Order Function.
// Call Back Function:
// 	Which function acting as a argument to the higher order function is called Call Back Function
//====================================================================================================

// function x(a,b)
// {
// 	console.log(a,b);
// 	b();
// }
// x(10,function(){console.log("Hello");}) // here x is higer order function and function(log("hello")) is a call back funtion
// x(10,()=>console.log("Good Morning"));

// function x(a,b,task) // x is a higer order function 
// {
// 	console.log(a);
// 	console.log(b);
// 	console.log(task);
// 	let value=task(a,b)
// 	console.log("value of call back"+value);
// }
// x(10,20,(m,n)=>m+n)  // here 3rd argument is a Call back function
// x(10,20,(m,n)=>m-n) 
// x(5,20,(m,n)=>m*n)
// x(10,15,(m,n)=>m/n)  
// x(10,20,(m,n)=>m%n) 


// function x(a,b,task) // x is a higer order function 
// {
	
// 	console.log(task);
// 	let value=task(a,b)
// 	console.log("value of call back"+value); // Undefined
// }
// x(10,20,(m,n)=>console.log(m+n)) // 30

// let person={
// 	fname:"Nandu",
// 	age:23,
// 	greet:(a)=>{
// 		console.log(a);
// 	}
// }
// person.greet("Hello") // this object method: a method nothing but which is present in the object 
// console.log("Hello") // this is built-in method

//===========================================================================
// Constructor: here function name should be in Capital letter(only first letter)
// not mandatory ,just for developer understand
//===========================================================================
// function Person(pname,page)
// {
// 	this.name=pname
// 	this.age=page
// }
// let o1=new Person("Nandu",23)
// console.log(o1); // output is whole function object
// console.log(o1.page); // output is undefined ,here page doest have value
// console.log(o1.name); // output is Nandu ,because name var holds the value of pname

// let o2=new Person("Siri",23)
// console.log(o2);

// function Sample()
// {

// }
// let s1=new Sample()
// console.log(s1); // Empty Object
// console.log(s1.age); // undefined

//=============================================================================================
// Spread Operator(...): is used to spred the items or unpacked the values 
// this operator is used in arrays,object,,,,
// Rest parameter(...): is uded to packed the values and this can be used in the inside function
// this operator is must be the last parameter of formal parameter in the fuxction
//=================================================================================================
//=====================
// spread
//=================
// let a=[10,20,30,40]
// let b=[50,60,70,80]
// let c=[...a,b]
// console.log(c); // all a elements and arry[4] of b array
// let d=[...a,...b]
// console.log(d); // merge all the elements present in both var a,b


// function x(a,b)
// {
// 	console.log(a,b);
// }
// x(10,20,30,40,50) // 10,20

//==================
// Rest Parameter
//================
// function x(a,...b) // 10, whole values of b parameter
// {
// 	console.log(a,b);
// }
// x(10,20,30,40,50) 

// function x(...a,...b) // a rest parameter must be the last in a parameter
// {
// 	console.log(a,b);
// }
// x(10,20,30,40,50)

//========================================
// Spread Operator In Object:
//========================================
// let person={
// 	name:"Nandu",
// 	age:23
// }
// let details={
// 	empid:123,
// 	desig:"Software",
// 	...person  // spread operator 

// }
// console.log(details)// both objects.

// let nums=[10,20,-10,100,30,40]
// console.log(nums); // whole array with elements
// console.log(...nums); //whole array elements


//==============================
// Math Operations:
//===============================

// let max1=Math.max(10,100)
// console.log(max1); // max element

// let maxValue=Math.max(nums)
// console.log(maxValue); // NaN because there is no second element to compare

// let max2=Math.max(...nums)
// console.log(max2); // 100 because we use spread

// let min1=Math.min(...nums)
// console.log(min1); // -10

// let r=Math.random()*1000
// console.log(r); // random value

// let c=Math.ceil(10.5)
// console.log(c); // 11
// let c1=Math.ceil(10.4)
// console.log(c1); // 11
// //===========================
// let r=Math.round(10.5)
// console.log(r); //11
// let r1=Math.round(10.4)
// console.log(r1); // 10

// let f=Math.floor(10.5)
// console.log(f);  // 10

// let f1=Math.floor(10.4)
// console.log(f1);// 10


//==========================
// Comparision Operator
//=========================
// let a=10
// let b=10
// console.log(a==b); // true
// let a=10
// let b="10"
// console.log(a==b); // true in js data type is ignored

// let a=10
// let b="10"
// console.log(a===b); // false.

//========================================================
// Object Methods:
//========================================================

// let person={
// 	name:"Nandu",
// 	age:23,
// 	skills:["java","sql","JDBC"]
// }

// let keys=Object.keys(person)
// console.log(keys);  // only keys

// let value=Object.values(person)
// console.log(value); // only values

// let entry=Object.entries(person)
// console.log(entry); // both keys & values

// let person1={
// 	name:"nandu",
// 	age:23,
// 	skills:["java","sql","js"]
// }
// let person2={
// 	name:"Vamsi",
// 	age:24,
// 	skills:["java","sql"]
// }
// function greet()
// {
// 	console.log(this);
// }
// greet(person1) // it is going to window object it contains built in methods. window object nothing but golbal objects
// function greet(a,b)
// {
// 	console.log(this,a,b);
// }
// Call method is used to accept the arguments in normal way.
// greet.call(person1,10,20)  // call method is used to call the particular object based on this keyword 
// it takes an arguments as normal parameters

// function greet(a,b)
// {
// 	console.log(this,a,b);
// }
// greet.apply(person1,[10,20]) // apply method is used to call the particular object based on this keyword
// //  it accepts an arguments in array type only

//=================================================================
// important concept
//=========================
// bind method: this method is used to bind the function with object permenantly
//=========================

// let emp={
// 	name:"nandu",
// 	age:23
// }
// function x(a,b,c)
// {
// 	console.log(this); // emp object
// 	console.log(a); // ud
// 	console.log(b); // ud
// 	console.log(c); // ud
// }
// let y=x.bind(emp) // here x function binding with the emp object
// y()
// x() // window object,ud,ud,ud .because we cant bind with any object 

//=======================================================================
// Array Iteration Methods:
// for in
// for of
// forEach
// map
//=======================================================================
//==============================================================
// for in: which is used to prints the index values of an array.
//==============================================================

// let arr=[10,20,30,40,50]
// for(let x in arr)
// {
// 	console.log(x); // index number as output
// }
//======================================================================
// for of: which is used to print the values of an array.
//=====================================================================
// let arr=[10,20,30,40,50]
// for(let x of arr)
// {
// 	console.log(x); // values of an array as a output
// }
//======================================================================
// forEach: which is used to print the both values and index of an array
// it is a higer order function.
// this method will not return anything ,it will return undefined
//======================================================================

// let arr=[10,20,30,40]
// arr.forEach(function(ele)
// {
// 	console.log(ele); // here print only values of an array
// })

// let arr=[10,20,30,40]
// arr.forEach(function(ele,index)
// {
// 	console.log(ele,index); // here print both the values and index of an array
// })

//====================================================================
// map: this is similar to forEach method except one difference.
// map will return the value of an array.
// it is in-built higher order function
//====================================================================

// let arr=[10,20,30]
// // let y=arr.forEach((s,r)=>{
// // 	console.log(s,r); // here prints both the value and index of an array
// //      return s,r // undefined
// // })
// // console.log(y); // undefined

// let a=arr.map((w,q)=>{
// 	//console.log(w,q); // it prints both values and index of an array
// 	return [w,q] // it will return both index position of an array and values
// })
// console.log(a);


// let arr=[10,20,30,40]
// let y=arr.map((x)=>{
// 	return x+10

// })
// console.log(y);

// let arr=[10,20,30,40]
// let y=arr.filter((x)=>{
// 	return x<30
// })
// console.log(y);

// let books=[
// 	{bookname:"html",bprice:1500},
// 	{bookname:"css",bprice:1200},
// 	{bookname:"js",bprice:1700},
// 	{bookname:"RJ",bprice:1400},
	
// ]
// let cart=books.filter((book)=>{
// 	return book.bprice>1200
// })
// console.log(cart);

// let getGSTPrice=cart.map((book)=>{
// 	let gst=book.bprice*30/100
// 	book.bprice=book.bprice+gst
// 	return book
// })
// console.log(getGSTPrice);

// let finalPrice=getGSTPrice.reduce((acc,cv)=>{

// 	return acc+cv.bprice

// },0)
// console.log(finalPrice);

// reduce method is going to accept two arguments one is call by function and
// second is accumulator
// and call back function is accept two parameters that is accumulator and current value.

//=======================================================================================================================
//========================
// DOM: web browser api,helps us to manipulate the data by using js.in js all tags or elements considered as object.
//========================





























































































































































































































































































































































































































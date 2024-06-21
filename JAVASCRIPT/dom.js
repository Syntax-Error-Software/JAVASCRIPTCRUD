// //========================================================================================
// // DOM: stands forDocument Object Model, it is a web browser api.
// //helps us to manipulate the data by using js.
// // by using this we connected to UI through JS
// // which is acting as interface between the js and web browser
// // which is present in inside BOM(Browser Object Model).
// // bom contains many built in objects in window.
// // document is the one inbuilt object present inside the DOM.
// //========================================================================================
// // it is some selectors/METHODS
// //document.getElementById():which is used to target an id elements and which tag having id as selector
// //document.getElementsClassName():which is used to target an class elements which tag having class as selector
// //document.getElementsByTagName(): to target tag name
// //document.querySelector() : to targate anyone with representation and return only one element as node list
// //document.querySelectorAll(): to targate anyone with representation and return multiple elements as node list
// //===========================================
// // let headingEle=document.getElementById("a")
// // console.log(headingEle.innerText);  // targeting content present in the tag
// // headingEle.style.backgroundColor="blue"// applying the color of content present in the tag
// // headingEle.innerText="DOCUMENT OBJECT MODAL" // updating the content present in the tag

// // let divtag=document.getElementById("a")
// // console.log(divtag);
// // divtag.innerHTML="<h1>HELLO THIS</h1"

// // console.log(divtag);

// // DOM:
// // Document Object Model,it is a browser api,which is used to target an element through js
// // it is a inbuilt object

// // let div=document.getElementById("a")
// // //console.log(div);
// // div.innerHTML="<h1>Hello</h1>"
// // let div=document.getElementById("a")
// // console.log(div);
// // div.style.backgroundColor="blue"

// // let divs=document.getElementsByClassName("a")
// // console.log(divs);
// // // let checkTypeArray=Array.isArray(divs) // here isArray checks the type of array and return boolean values
// // // console.log(checkTypeArray);

// // // Array.isArray():
// // // here Array is a object and isArray is a method which is used to check the type of array and return boolean values



// // let pureArray=Array.from(divs) // form is used to conver array like structure into pure array
// // // console.log(Array.isArray(pureArray));// true
// // // console.log(Array.isArray(divs));// flase

// // // pureArray.forEach(()=>{
// // // 	console.log("Hi"); // it prints 3 times hi
// // // })
// // // pureArray.forEach((element)=>{
// // // 	console.log(element); // it prints 3 times of whole div tag content
// // // })

// // pureArray.forEach((ele)=>{
// // 	ele.style.backgroundColor="red" // it prints same background color of 3 div tags
// // })

// // let paragraph=document.getElementsByTagName("p")
// // console.log(paragraph);
// // let purePara=Array.from(paragraph)
// // console.log(Array.isArray(purePara));

// // purePara.forEach((ele)=>{
// // 	ele.style.backgroundColor="red"
// // })

// // getElementsByTagName:
// // let headingTag=document.getElementsByTagName("h1")
// // console.log(headingTag); // html collection

// // let pureHeading=Array.from(headingTag)
// // console.log(pureHeading); // all h1 tags
// // pureHeading.forEach((ele)=>{
// // 	console.log(ele); // all h1 tags with content
// // 	console.log("hi");  // it will print 6 times hi
// // 	ele.style.backgroundColor="blue"  // it will apply the blue color for all the h1 tags
// // })

// // querySelector():
// // it will target any tags like id,class .
// // target element by tag name and along with representation of tags.
// // it will return only single element.

// //let x=document.querySelector("#a")
// //console.log(x); // it will return only h1 tag

// // let y=document.querySelectorAll("h1")
// //console.log(y); // it will print all h1 tags with class ids and return Node List

// //====================================================
// // Node list:
// //====================================================
// // it will return node list.
// // it is a array like structure
// // it will support forEach method only directly
// // it will not support map method.
// // here no need to convert array like structure into pure array
// // we target all the elements dorectly

// //==============================================
// // Html Collection:
// //==============================================
// // it will return html collection
// // it is a array like structure and not a pure array
// // if you want to convert array like structure to pure array we use from method along with Array object.
// // it will does not support both forEach and map method  directly


// // // querySelectorAll():
// // it will target any tags like id,class .
// // target element by tag name and along with representation of tags.
// // it will return multiple elements.

// // y.forEach((ele)=>
// // {
// // 	console.log(ele);  // it will print all the h1 tages 
// // 	ele.style.backgroundColor="blue"  // it will apply blue color to the all the h1 tags
// // })

// // Event Listeners:
// // onclick: which is used to perform a specific taks.
// // function x()
// // {
// // 	console.log("Welcome to the Dynamic web page"); // it will print on the console window
// // 	// whenever click on the greeting button
// // }

// // function changeColor()
// // {
// // 	let x=document.querySelector("h1")
	
// // 	x.innerText="Welcome to the dynamic web page"
// // 	x.style.backgroundColor="blue"
// // }
// //========================================================================================
// // onclick: for one left click it will change its color
// //ondblclick: for 2 left clicks it will move to next different color
// //oncontextmenu: for on right one click
// //onmousedown:clcik the left mouse and dont release
// //onmouseup
// //onmouseover:just palace over the button or text it will  change it color
// //onmouseout: when come back to the button after mouse over it will change to next color
// //===========================================================================================
// //
// // function x()
// // {
// // 	document.body.style.backgroundColor="blue"
	
// // }
// // function y()
// // {
// // 	document.body.style.backgroundColor="yellow"
// // }
// // function z()
// // {
// // 	document.body.style.backgroundColor="aqua"
// // }
// // function a()
// // {
// // 	document.body.style.backgroundColor="gree"
// // }
// // function b()
// // {
// // 	document.body.style.backgroundColor="red"
// // }

// // function x()
// // {
// // 	document.body.style.backgroundColor="green"
// // }
// // function y()
// // {
// // 	document.body.style.backgroundColor="blue"
// // }
// // function a()
// //  {
// //  	document.body.style.backgroundColor="violet"
	
// //  }
// //  function b()
// //  {
// //  	document.body.style.backgroundColor="indigo"
// //  }
// //  function c()
// //  {
// //  	document.body.style.backgroundColor="blue"
// //  }
// //  function d()
// //  {
// //  	document.body.style.backgroundColor="green"
// //  }
// //  function e()
// //  {
// //  	document.body.style.backgroundColor="yellow"
// //  }
// //  function f()
// //  {
// //  	document.body.style.backgroundColor="orange"
// //  }
// //  function g()
// //  {
// //  	document.body.style.backgroundColor="red"
// //  }
// //  function x()
// //  {
// // 	//document.body.style.backgroundColor="violet"
// // 	let a=document.querySelector("button")
// // 	document.body.style.backgroundColor="violet"
	
// //  }

// function a()
//  {
//  	document.body.style.backgroundColor="violet"
	

	
//  }
//  function b()
//  {
//  	document.body.style.backgroundColor="indigo"
//  }
//  function c()
//  {
//  	document.body.style.backgroundColor="blue"
//  }
//  function d()
//  {
//  	document.body.style.backgroundColor="green"
//  }
//  function e()
//  {
//  	document.body.style.backgroundColor="yellow"
//  }
//  function f()
//  {
//  	document.body.style.backgroundColor="orange"
//  }
//  function g()
//  {
//  	document.body.style.backgroundColor="red"
//  }
// //===============================
// //  function a()
// //  {
// //  	document.body.style.backgroundColor="violet"
	

	
// //  }
// //  function b()
// //  {
// //  	document.body.style.backgroundColor="indigo"
// //  }
// //  function c()
// //  {
// //  	document.body.style.backgroundColor="blue"
// //  }
// //  function d()
// //  {
// //  	document.body.style.backgroundColor="green"
// //  }
// //  function e()
// //  {
// //  	document.body.style.backgroundColor="yellow"
// //  }
// //  function f()
// //  {
// //  	document.body.style.backgroundColor="orange"
// //  }
// //  function g()
// //  {
// //  	document.body.style.backgroundColor="red"
// //  }
// //==================================================================
// // adding all the events at a time
// //=====================================
// // let section=document.querySelector("section")
// // let buttons=document.querySelectorAll("button")
// // let p=document.querySelector("p")
// // buttons.forEach((element)=>{
// // 	element.addEventListener("click",()=>{
// // 		section.style.background=element.innerText
// // 	})
// // 	element.addEventListener("mouseover",()=>{
// // 		p.innerText=`click the button to get ${element.innerText} background`
// // 		element.style.background=element.innerText

// // 	})
// // 	element.addEventListener("mouseout",()=>{
// // 		p.innerText="CLICK THE BUTTON TO CHANGE THE BACKGROUND COLOR"
// // 		element.style.background="black"

// // 	})
// // })
// //===================================================================================
// // Creating the elements using JavaScript
// //==================================================================================== 
// // let h1=document.createElement("h1")
// // let para=document.createElement("p")
// // let div=document.createElement("div")

// // h1.innerText="HELLO WELCOME TO WEB"
// // document.body.append(h1)
// // para.innerText="Hello How Are You"
// // document.body.append(para)
// // div.innerText="Hello This Is Div"
// // div.innerHTML="<h1>This Inside Div</h1>"
// // document.body.append(div)

// // let ol=document.createElement("ol")
// // let li1=document.createElement("li")
// // let li2=document.createElement("li")
// // let li3=document.createElement("li")

// // li1.innerText="Mango"
// // li2.innerText="Banana"
// // li3.innerText="Guva"

// // ol.appendChild(li1)
// // ol.appendChild(li2)
// // ol.appendChild(li3)

// // document.body.append(ol)

// let inputs=document.querySelectorAll("input")
// function formHandle()
// {
// 	event.preventDefault()
// 	console.log(inputs[0].value);
// 	console.log(inputs[1].value);
// 	console.log(inputs[2].value);
// }
  
// let person={
// 	name:"Nandu",
// 	age:23
// }
// let person1=person
// person1.name="Mahendra"
// console.log(person1);
// console.log(person);

// let arr=[10,20,30,40]
// let arr1=arr
// arr1[0]="hi"
// console.log(arr1);
// console.log(arr);

// let a="hello"
// console.log(a[0]);//h

// let b="hello"
// b[0]="m"
// console.log(b);// hello

// console.log(1+1);
// console.log(1+"1");
// console.log(1-1);
// console.log(1-"1");
// console.log(1-"a");


// console.log(typeof null);// object
// let a=10
// let b=20
// console.log(a==b);// false
// console.log(a===b);//false

// let x=10
// let y="10"
// console.log(x==y);// true
// console.log(x===y);//false

// console.log(undefined==undefined);//true
// console.log(undefined===undefined);//true

// console.log(undefined==null);//true
// console.log(undefined===null);//false

// console.log(true==1);//true
// console.log(true===1);//false
// console.log(true==0);// false
// console.log(true===0);//false

// console.log(false==0);//true
// console.log(false===0);//false
// console.log(false==1);//false
// console.log(false===1);//false

// console.log(NaN==Number);
// console.log(NaN===Number);

// console.log(typeof NaN);
// console.log(NaN);

// let arr1=[10,20,30,40]
// let arr2=[10,20,30,40]
// let arr3=arr1
// console.log(arr1==arr2);// false
// console.log(arr1==arr3);//true


// function x()
// {
// 	console.log("Hello");
// }
// x()

// let x=function ()
// {
// 	console.log("Hi");
// }
// x()// hi
// console.log(x);// function body
// console.log(x());// hi and undefined

// function add(a,b)
// {
// 	console.log(a+b);
// }
// add(4,4)//8
// add(4)//NaN
// console.log(add);//function body
// console.log(add());// NaN and undefined

// function x()
// {
// 	console.log("hello");
// 	function y()
// 	{
// 		console.log("Hi");
// 	}
// 	y()
// }
// x()

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
// console.log((z));
// let m=z()
// console.log(m);

// (function (){
// 	console.log("IIFE");
// })()

// let add=(a,b)=>a+b
// 	console.log(add(4,4));

// let add=()=>
// 	console.log(add("Hello"));

// let greet=a=>a
//  console.log(greet("hello"));

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
// 	// let value=task(a,b)
// 	// console.log("value of call back"+value);
// }
// x(10,20,(m,n)=>m+n) 

// let a=[10,20,30]
// let b=[40,50,60]
// let c=[...a,b]
// console.log(c);
// let d=[...a,...b]
// console.log(d);

// let person={
// 	name:"Nandu",
// 	age:23
// }
// let details={
// 	empid:123,
// 	desig:"Software",
// 	...person // spread operator
// }
// console.log(details);

function x(a,...b)
{
	console.log(a,b);
}
x(10,20,30,40,40)


let section=document.querySelector("section")
let buttons=document.querySelectorAll("button")
let p=document.querySelector("p")

buttons.forEach((element)=>
{
	element.addEventListener("click",()=>{
		section.style.background=element.innerText
	})
	element.addEventListener("mouseover",()=>{
		p.innerText=`click the button to get ${element.innerText} background`
		element.style.background=element.innerText

	})
	element.addEventListener("mouseout",()=>{
		p.innerText="CLICK THE BUTTON TO CHANGE THE BACKGROUND COLOR"
		element.style.background="black"

	})
})
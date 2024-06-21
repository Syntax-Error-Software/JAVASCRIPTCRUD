let inputs=document.querySelectorAll("input")
let button=document.querySelector("button")
let table=document.querySelector("table")
let row

function formHandle()
{
	event.preventDefault()
	let name=inputs[0].value
	let salary=inputs[1].value
	let company=inputs[2].value

	let tr=document.createElement("tr")
	let td1=document.createElement("td")
	let td2=document.createElement("td")
	let td3=document.createElement("td")
	let td4=document.createElement("td")

	let update=document.createElement("button")
	let deletee=document.createElement("button")

	if(button.innerText=="SUBMIT")
	{
		update.innerText="UPDATE"
		deletee.innerText="DELETE"

		td1.innerText=name
		td2.innerText=salary
		td3.innerText=company
		td4.appendChild(update)
		td4.appendChild(deletee)

		tr.append(td1,td2,td3,td4)
		table.appendChild(tr)

		inputs[0].value=""
		inputs[1].value=""
		inputs[2].value=""

		update.addEventListener("click",()=>{
			inputs[0].value=name
			inputs[1].value=salary
			inputs[2].value=company

			button.innerText="UPDATE"
			row=tr

		})
		deletee.addEventListener("click",()=>{
			tr.remove()
		})
	}
	else if(button.innerText=="UPDATE")
	{
		row.cells[0].innerText=name
		row.cells[1].innerText=salary
		row.cells[2].innerText=company

		inputs[0].value=""
		inputs[1].value=""
		inputs[2].value=""

		button.innerText="SUBMIT"
			
       
	}

}
function over()
{
	let name=inputs[0].value
	let salary=inputs[1].value
	let company=inputs[2].value

	if(name==""||salary==""||company=="")
	{
		// alert("Fields Are Empty")
		button.style.backgroundColor="red"
		button.style.cursor="not-allowed"
	}
	else
	{
		button.style.backgroundColor="green"
		button.style.cursor="pointer"
      
	}

}
function out()
{
	button.style.backgroundColor="blue"
	button.style.display="inline"

}

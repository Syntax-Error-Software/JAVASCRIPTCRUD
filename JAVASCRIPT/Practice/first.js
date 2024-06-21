// let inputs=document.querySelectorAll("input")
// let button=document.querySelector("button")
// let table=document.querySelector("table")
// let row



// // function formHandle()
// // {
// // 	event.preventDefault()
// // 	let name=inputs[0].value
// // 	let salary=inputs[1].value
// // 	let company=inputs[2].value

// // 	if(name=="" || salary=="" || company=="")
// // 	{
// // 		alert("Input Fields Are Empty");
// // 	}
// // 	else
// // 	{
// // 		let tr=document.createElement("tr")
// // 		let td1=document.createElement("td")
// // 		let td2=document.createElement("td")
// // 		let td3=document.createElement("td")
// // 		let td4=document.createElement("td")
// // 		let update=document.createElement("button")
// //         let deletee=document.createElement("button")
// //         update.innerText="Update"
// //         deletee.innerText="Delete"

// // 		td1.innerText=name
// // 		td2.innerText=salary
// // 		td3.innerText=company
// // 		td4.appendChild(update)
// // 		td4.appendChild(deletee)

// // 		tr.appendChild(td1)
// // 		tr.appendChild(td2)
// // 		tr.appendChild(td3)
// // 		tr.appendChild(td4)

// // 		table.appendChild(tr)
// // 		update.addEventListener("click",()=>{
// // 			inputs[0].value=name
// // 		    inputs[1].value=salary
// // 		    inputs[2].value=company
// // 		})

// // 		inputs[0].value=""
// // 		inputs[1].value=""
// // 		inputs[2].value=""
// // 	}
	
// // }

// // updation and deletion code.
// function formHandle()
// {
// 	    event.preventDefault()
// 	    let name=inputs[0].value
// 	    let salary=inputs[1].value
// 	    let company=inputs[2].value

	
// 		let tr=document.createElement("tr")
// 		let td1=document.createElement("td")
// 		let td2=document.createElement("td")
// 		let td3=document.createElement("td")
// 		let td4=document.createElement("td")
// 		let update=document.createElement("button")
//         let deletee=document.createElement("button")
//         if(button.innerText=="SUBMIT")
// 		{
// 			update.innerText="Update"
// 			deletee.innerText="Delete"
		

// 		    td1.innerText=name
// 		    td2.innerText=salary
// 		    td3.innerText=company
// 		    td4.appendChild(update)
// 		    td4.appendChild(deletee)

// 		    tr.appendChild(td1)
// 		    tr.appendChild(td2)
// 		    tr.appendChild(td3)
// 		    tr.appendChild(td4)

// 		    table.appendChild(tr)
// 		    update.addEventListener("click",()=>{
// 			inputs[0].value=name
// 		    inputs[1].value=salary
// 		    inputs[2].value=company
			
// 			button.innerText="Update"
// 			row=tr
// 		    })
// 			deletee.addEventListener("click",()=>{
// 				tr.remove()
// 			})

// 		    inputs[0].value=""
// 		    inputs[1].value=""
// 		    inputs[2].value=""
// 		}
// 		else if(button.innerText=="Update")
// 		{
// 			row.cells[0].innerText=name
// 			row.cells[1].innerText=salary
// 			row.cells[2].innerText=company

// 			inputs[0].value=""
// 		    inputs[1].value=""
// 		    inputs[2].value=""
// 		}
	
	
// }
// function x()
// {
// 	//event.preventDefault()
// 	let name=inputs[0].value
// 	let salary=inputs[1].value
// 	let company=inputs[2].value

// 	if(name=="" || salary=="" || company=="")
// 	{
// 		button.style.backgroundColor="red"
// 		button.style.cursor="not-allowed"
// 		button.style.display="none"
// 	}
// 	else
// 	{
//       button.style.backgroundColor="green"
// 	     button.style.cursor="pointer"
// 	}

// }
// function y()
// {
// 	button.style.backgroundColor="black"
// 	button.style.display="inline"
// }

   

// }
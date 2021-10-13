let total = 0;
let container = document.querySelector(".container")
let para1 = document.createElement("h1")
let para = document.createElement("h3")
container.appendChild(para)
container.appendChild(para1)

let handel = [{
    name:"mango",
    price:15,
    storlek:"large",
    rutten:false
},
{
    name:"gurka",
    price:39,
    storlek:"large",
    rutten:false
},
{
    name:"potatis",
    price:49,
    storlek:"large",
    rutten:false
},
{
    name:"tomat",
    price:5,
    storlek:"large",
    rutten:false
},
{
    name:"sötpotatis",
    price:150,
    storlek:"large",
    rutten:false
}

]

handel.forEach(item => {
    let diven = document.createElement("div")
    let header = document.createElement("h2")
    let para3 = document.createElement("p")
    let btn= document.createElement("button")
    diven.classList="small-boxes"
    header.innerText=item.name
    para3.innerText = item.price+"$ "
    btn.innerText= "Buy"
    
    diven.appendChild(header)
    diven.appendChild(para3)
    diven.appendChild(btn)
    container.appendChild(diven)

    
    btn.addEventListener("click", ()=>{
        
        total = total + item.price
        console.log(total)
        para.innerText="Total " + total +"$"
    })
});
para.innerText="Total " + total +"$"

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
}
]

handel.forEach(item => {

    let btn= document.createElement("button")
    btn.innerText= "Buy"
    container.appendChild(btn)
    let para3 = document.createElement("p")
    para3.innerText = item.price+"$"
    container.appendChild(para3)
    btn.addEventListener("click", ()=>{
        
        total = total + item.price
        console.log(total)
        para.innerText="Total " + total +"$"
    })
});
para.innerText="Total " + total +"$"






const num=Math.sqrt(200)

const num2=Math.pow(3,4)

const num3=Math.max(3,300,2,0,67,768)

const num4=Math.floor(14.532178)
const num5=Math.round(14.532178)
const num6=Math.ceil(14.132178)


const random=Math.floor(Math.random()*20) 


function generateRondomColor(){

      let r=Math.floor(Math.random()*256)
      let g=Math.floor(Math.random()*256)
      let b=Math.floor(Math.random()*256)

    const rdColor=`rgb(${r},${g},${b})`
    document.getElementById("code").innerHTML=rdColor

    document.body.style.backgroundColor=rdColor

}

let fruits=["Apple","mango","pear"]

function addItem(fruit){
  fruits.push(fruit) 
}
addItem("banana")
addItem("avocado")

function renderFruits(){
  fruits.forEach(fruit=>{
  const li=document.createElement('li')
  li.innerText=fruit
  const olEl=document.getElementById("list")
  olEl.appendChild(li)  
  })
}

renderFruits()





console.log(fruits) 
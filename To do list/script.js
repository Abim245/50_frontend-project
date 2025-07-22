const spanEl = document.getElementById("text-span")
const textEl = document.getElementById("text")
const todoEls = document.querySelectorAll(".input")
const btnEl = document.getElementById("btn")
const minEl = document.querySelector(".min") 

let todoElValue = 0

todoEls.forEach(todoEl => {
    function clicked(){
    if (todoEl.checked){
        todoElValue  += 10
    } else {
        todoElValue  -= 10
    }
    spanEl.innerText = todoElValue
    }
   todoEl.addEventListener("change",clicked)
   
});

let todoDaily = 0
const MAX_TODOS = 10
function updateText(event){
    if (event.key === "Enter"){
        if (todoDaily< 10){
        const text = document.createElement("div")
        text.classList.add(".min")
        todoEl.appendChild(text)
        const label = document.createElement("label")
        const span = document.createElement("span")
        const input = document.createElement("input")
        checked.type = "checkbox"
        checked.classList.add(".input")

        
        label.appendChild(span)
        text.appendChild(label)
        text.appendChild(input)
        text.appendChild(text)
        }
       else{
        alert("You've reach your daily todo limit")
       }
c 
    }
}

textEl.addEventListener("keydown",updateText)

 
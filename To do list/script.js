const spanEl = document.getElementById("text-span")
const textEl = document.getElementById("text")
const todoEls = document.querySelectorAll(".input")
const btnEl = document.getElementById("btn")
const minEl = document.querySelector(".min") 
const imageEl = document.querySelector(".image")
const updateEl = document.querySelector(".update")


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
        if (todoDaily < MAX_TODOS && textEl.value.trim() !== ""){
            const taskDiv = document.createElement("div");
            taskDiv.classList.add("min");

            const label = document.createElement("label");
            const input = document.createElement("input");
            input.type = "checkbox";
            input.classList.add("input");

            const span = document.createElement("span");
            span.textContent = textEl.value;

            label.appendChild(input);
            label.appendChild(span);
            taskDiv.appendChild(label);

            // Create image div for edit and trash icons
            const imageEl = document.createElement("div");
            imageEl.classList.add("image");

            const editImg = document.createElement("img");
            editImg.src = "https://cdn-icons-png.freepik.com/512/11387/11387073.png?fd=1&filename=pen_11387073.png";
            editImg.alt = "edit";
            editImg.classList.add("edit");

            const trashImg = document.createElement("img");
            trashImg.src = "5599.jpg";
            trashImg.alt = "trash";
            trashImg.classList.add("trash");

            imageEl.appendChild(editImg);
            imageEl.appendChild(trashImg);
            taskDiv.appendChild(imageEl);

            minEl.appendChild(taskDiv);

            // Add event listener for scoring
            input.addEventListener("change", function() {
                if (input.checked) {
                    todoElValue += 10;
                } else {
                    todoElValue -= 10;
                }
                spanEl.innerText = todoElValue;
            });

            // Edit functionality
            editImg.addEventListener("click", function() {
                // Replace span with input for editing
                const editInput = document.createElement("input");
                editInput.type = "text";
                editInput.value = span.textContent;
                editInput.className = "edit-input";
                label.replaceChild(editInput, span);
                editInput.focus();
                // Save on Enter or blur
                function saveEdit() {
                    if (editInput.value.trim() !== "") {
                        span.textContent = editInput.value;
                    }
                    label.replaceChild(span, editInput);
                }
                editInput.addEventListener("keydown", function(e) {
                    if (e.key === "Enter") {
                        saveEdit();
                    }
                });
                editInput.addEventListener("blur", saveEdit);
            });

            // Delete functionality
            trashImg.addEventListener("click", function() {
                // Remove the task div
                minEl.removeChild(taskDiv);
                // If checked, remove points
                if (input.checked) {
                    todoElValue -= 10;
                    spanEl.innerText = todoElValue;
                }
                // Decrement todoDaily so user can add more tasks
                todoDaily--;
            });

            todoDaily++;
            textEl.value = "";
        } else if (todoDaily >= MAX_TODOS) {
            alert("You've reached your daily todo limit");
        }
    }
}

textEl.addEventListener("keydown",updateText)


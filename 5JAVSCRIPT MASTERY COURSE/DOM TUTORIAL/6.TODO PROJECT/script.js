const todoForm = document.querySelector(".form-todo");
const todoInput = document.querySelector(".form-todo input[type='text']");
const todoList = document.querySelector(".todo-list")
todoForm.addEventListener("submit",(e)=>{
// console.log(e) /*e is submit event here*/
e.preventDefault(); /*prevent refresh due to submit of form*/
const newTodoText = todoInput.value;
todoInput.value="";
const newLi = document.createElement("li");
const newLiInnerHtml = `
<span class="text">${newTodoText}</span>
<div class="todo-buttons">
    <button class="todo-btn done">Done</button>
    <button class="todo-btn remove">Remove</button>
</div>`
newLi.innerHTML = newLiInnerHtml;
todoList.append(newLi);
})

todoList.addEventListener("click",(e)=>{
    //check if user clicked on done button
    if(e.target.classList.contains("remove")){
        const removeLi = e.target.parentNode.parentNode;
       removeLi.remove();
    }
    if(e.target.classList.contains("done")){
       const liSpan = e.target.parentNode.previousElementSibling;
       liSpan.style.textDecoration="line-through"
    }
})
/* 
1. Add markup for bullet points and popup buttons [DONE]
2. Add query selectors for input fields and button [DONE]
3. Add event handlers...
    3a. deleting input on backspace [DONE]
    3b. marking input as done
    3c. adding new input from button [DONE]
    3d. adding new input on enter [DONE]
4. Add markup for remove item popout
5. Add event handler which removes selected list item when remove is clicked
6. Add localStorage for persisting data between sessions
*/

/* Adding new list items: */

const addTodo = document.querySelector(".todo-btn");
const toDoList = document.querySelector(".todo-list");

const createToDoItem = () => {
  const newTodoItem = document.createElement("li");
  const newTodoInput = document.createElement("input");
  const newTodoRadio = document.createElement("input");

  newTodoItem.classList.add("todo-list-item");
  newTodoRadio.setAttribute("type", "radio");
  newTodoInput.setAttribute("type", "text");
  newTodoInput.setAttribute("placeholder", "Write your task here");

  toDoList.appendChild(newTodoItem);
  newTodoItem.append(newTodoRadio, newTodoInput);

  newTodoInput.focus();
};

addTodo.addEventListener("click", createToDoItem);

toDoList.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    createToDoItem();
  } else if (event.key === "Backspace") {
    /* Removes elements on backspace if no text exists and switches focus to previous element: */
    const lastItem = toDoList.lastChild;
    if (lastItem) {
      const input = lastItem.querySelector(`input[type='text']`);
      if (input && input.value === "") {
        const previousItem = lastItem.previousElementSibling;
        lastItem.remove();
        if (previousItem) {
          const previousInput =
            previousItem.querySelector(`input[type='text']`);
          if (previousInput) {
            previousInput.focus();
          }
        }
      }
    }
  }
});

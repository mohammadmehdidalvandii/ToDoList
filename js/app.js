import { addTodo , completeTodo , removeTodo } from "../Redux/ActionType.js"

import { addTodoAction, removeTodoAction , completeTodoAction } from "../Redux/ActionCreator.js"

window.removeTodoHandler = removeTodoHandler;
window.doTodoHandler = doTodoHandler;


const addTodoBtn = document.querySelector(".add_todo_btn")
const completeTodoBtn = document.querySelector(".todo_complete")
const removeTodoBtn = document.querySelector(".todo_delete")

const todoTitle = document.querySelector('.add_todo_input')
const todoContainer = document.querySelector('.todo_list')



// create reducer

function todoReducer (state=[], action){
    switch(action.type){
        case addTodo:{
            let newState = [...state]
            if( todoTitle.value === ''){
                alert("مقدار خالی است ")
            }else{
                let newObjTodo = {
                    id:crypto.randomUUID(),
                    title:action.title,
                    isCompleted:false 
                }
                newState.push(newObjTodo)
            }
            
            return newState
        }
        case completeTodo:{
            const newState = [...state]
            newState.some((todo)=>{
                if(todo.id === action.id){
                    todo.isCompleted = !todo.isCompleted
                }
            })
            return state
        }
        case removeTodo:{
            const copyState = [...state];
            let newState = copyState.filter((todo)=> todo.id !== action.id);
            return newState;
        }
        default:{
            return state
        }
    }
}

// create Redux store
const store = Redux.createStore(todoReducer)
// add todo by Enter Key
todoTitle.addEventListener("keypress" , event=>{
   if(event.key === "Enter"){
    const newTodoTitle = todoTitle.value.trim() 
    store.dispatch(addTodoAction(newTodoTitle))
    const todos = store.getState()
    todoTitle.value = ""
    showTodoDom(todos)
   }
})

// add todo 
addTodoBtn.addEventListener('click' , event=>{
    event.preventDefault()
    const newTodoTitle = todoTitle.value.trim() 
    store.dispatch(addTodoAction(newTodoTitle))
    const todos = store.getState()
    todoTitle.value = ""
    showTodoDom(todos)
})

// remove todo
function removeTodoHandler (todoID){
    store.dispatch(removeTodoAction(todoID));
    const todos = store.getState();
    showTodoDom(todos);
}

// completed todo
function doTodoHandler(todoID){
store.dispatch(completeTodoAction(todoID));
const todos = store.getState();
showTodoDom(todos)
}

// Show Todo Dom
function showTodoDom (todos){
    todoContainer.innerHTML = '';
    todos.forEach(todo=>{
        todoContainer.insertAdjacentHTML("beforeend",`
        <div class="todo  ${todo.isCompleted && "isCompleted"}" >
        <span class="todo_text">${todo.title}</span>
           <div class="todo_btn_wrapper">
               <button class="todo_complete todo_btn" onclick=doTodoHandler("${todo.id}")>
                   <i class="fa fa-check"></i>
               </button>
               <button class="todo_delete todo_btn" onclick=removeTodoHandler("${todo.id}")>
                   <i class="fa fa-trash"></i>
               </button>
           </div>
       </div>
        `)
    })
}
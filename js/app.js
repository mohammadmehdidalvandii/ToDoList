import { addTodo , completeTodo , removeTodo } from "../Redux/ActionType.js"

import { addTodoAction } from "../Redux/ActionCreator.js"

const addTodoBtn = document.querySelector(".add_todo_btn")
const completeTodoBtn = document.querySelector(".todo_complete")
const removeTodoBtn = document.querySelector(".todo_delete")

const todoTitle = document.querySelector('.add_todo_input')

// create reducer

function todoReducer (state=[], action){
    switch(action.type){
        case addTodo:{
            let newState = [...state]
            let newObjTodo = {
                id:crypto.randomUUID(),
                title:action.title,
                isCompleted:false 
            }
            newState.push(newObjTodo)
            return newState
        }
        case completeTodo:{
            return state
        }
        case removeTodo:{
            return state
        }
        default:{
            return state
        }
    }
}

// create Redux store
const store = Redux.createStore(todoReducer)



// add todo 
addTodoBtn.addEventListener('click' , event=>{
    event.preventDefault()
    const newTodoTitle = todoTitle.value.trim() 
    store.dispatch(addTodoAction(newTodoTitle))
    const todos = store.getState()
    todoTitle.value = ""
})
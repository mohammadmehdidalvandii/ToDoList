import { addTodo , completeTodo , removeTodo } from "../Redux/ActionType.js"

// create reducer

function todoReducer (state=[], action){
    switch(action.type){
        case addTodo:{
            return state
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
console.log(store);
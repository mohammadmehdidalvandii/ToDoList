import { addTodo , completeTodo , removeTodo } from "./ActionType.js";

function addTodoAction(title){
    return{
        type :addTodo,
        title
    }
}
function completeTodoAction(id){
    return{
        type :completeTodo,
        id
    }
}
function removeTodoAction(id){
    return{
        type :completeTodo,
        id
    }
}


export {
    addTodoAction,
    completeTodoAction,
    removeTodoAction
}
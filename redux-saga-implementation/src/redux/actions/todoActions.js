//add todo
const ADD_TODO = 'ADD_TODO';
const UPDATE_TODO = 'UPDATE_TODO';
const DELETE_TODO = 'DELETE_TODO';

function addTodoAction(todo) {
    return {
        type: ADD_TODO,
        payload: todo,
    };
}

function updateTodoAction(index, newTodo) {
    return {
        type: UPDATE_TODO,
        payload: { index, newTodo },
    };
}

function deleteTodoAction(id) {
    return {
        type: DELETE_TODO,
        payload: id,
    };
}

export { ADD_TODO, UPDATE_TODO, DELETE_TODO, addTodoAction, updateTodoAction, deleteTodoAction };
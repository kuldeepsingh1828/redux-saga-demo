const { createStore } = require("redux");

// Define an initial state
const initialState = {
    todos: [],
    deletedTodos: [],
    error: null,
};

// Define action types
const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';
const UPDATE_TODO = 'UPDATE_TODO';
const RETRIEVE_TODO = 'RETRIEVE_TODO';

// Reducer function
const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            const { text } = action.payload;
            let error = null;

            // Validate the todo text
            if (text === '') {
                error = 'NO Data';
            } else if (text.length < 5) {
                error = 'Too Short';
            } else if (text.length > 20) {
                error = 'Too Long';
            }

            // If there is a validation error, return the current state with the error message
            if (error) {
                return {
                    ...state,
                    error,
                };
            }

            // If the text is valid, add the todo to the state
            return {
                ...state,
                todos: [...state.todos, { text }],
                error: null,
            };

        case DELETE_TODO:
            const { index } = action.payload;
            const newTodos = [...state.todos];
            deletedTodos = [...newTodos.splice(index, 1)];

            return {
                ...state,
                todos: newTodos,
                deleteTodos: [...state.deletedTodos, ...deletedTodos],
            };

        case UPDATE_TODO:
            const { index: updateIndex, newText } = action.payload;
            let updateError = null;

            // Validate the updated text
            if (newText === '') {
                updateError = 'NO Data';
            } else if (newText.length < 5) {
                updateError = 'Too Short';
            } else if (newText.length > 20) {
                updateError = 'Too Long';
            }

            // If there is a validation error, return the current state with the error message
            if (updateError) {
                return {
                    ...state,
                    error: updateError,
                };
            }

            // If the text is valid, update the todo in the state
            const updatedTodos = [...state.todos];
            updatedTodos[updateIndex].text = newText;

            return {
                ...state,
                todos: updatedTodos,
                error: null,
            };

        case RETRIEVE_TODO:
            return {
                ...state,
                error: null,
            };

        default:
            return state;
    }
};

// Action creators
const addTodo = (text) => ({
    type: ADD_TODO,
    payload: { text },
});

const deleteTodo = (index) => ({
    type: DELETE_TODO,
    payload: { index },
});

const updateTodo = (index, newText) => ({
    type: UPDATE_TODO,
    payload: { index, newText },
});

const retrieveTodo = () => ({
    type: RETRIEVE_TODO,
});

// Example usage:
const store = createStore(todoReducer);
console.log(store.getState()); // { todos: [], error: null }

// Adding a todo with validation errors
store.dispatch(addTodo('')); // Error: "NO Data"
console.log(store.getState()); // { todos: [], error: "NO Data" }
store.dispatch(addTodo('1234')); // Error: "Too Short"
console.log(store.getState()); // { todos: [], error: "Too Short" }
store.dispatch(addTodo('This is a very long todo description.')); // Error: "Too Long"
console.log(store.getState()); // { todos: [], error: "Too Long" }

// Adding a valid todo
store.dispatch(addTodo('Buy groceries'));
console.log(store.getState()); // { todos: [{ text: "Buy groceries" }], error: null }

// Updating a todo with validation errors
store.dispatch(updateTodo(0, '')); // Error: "NO Data"
console.log(store.getState()); // { todos: [{ text: "Buy groceries" }], error: "NO Data" }
store.dispatch(updateTodo(0, '1234')); // Error: "Too Short"
console.log(store.getState()); // { todos: [{ text: "Buy groceries" }], error: "Too Short" }
store.dispatch(updateTodo(0, 'This is a very long todo description.')); // Error: "Too Long"
console.log(store.getState()); // { todos: [{ text: "Buy groceries" }], error: "Too Long" }

// Updating a valid todo
store.dispatch(updateTodo(0, 'Buy fresh vegetables'));
console.log(store.getState()); // { todos: [{ text: "Buy fresh vegetables" }], error: null }

// Deleting a todo
store.dispatch(deleteTodo(0));
console.log(store.getState()); // { todos: [], error: null }

// Retrieving todos
store.dispatch(retrieveTodo());
console.log(store.getState()); // { todos: [], error: null }

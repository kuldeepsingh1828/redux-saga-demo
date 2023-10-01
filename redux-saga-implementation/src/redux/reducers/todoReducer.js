import { ADD_TODO, UPDATE_TODO, DELETE_TODO } from "../actions/todoActions";

const intialState = { todos: [], error: null };

function reducer(state = intialState, action) {
    switch (action.type) {
        case 'SET_USERS':
            return { ...state, users: action.payload }
        case ADD_TODO:
            if (!action.payload) {
                return { ...state, error: "Todo cannot be empty" };
            } else if (action.payload.length < 8) {
                return { ...state, error: "Todo must be at least 8 characters" };
            } else if (action.payload.length > 50) {
                return { ...state, error: "Todo must be at under 50 characters" };
            } else {
                return { ...state, todos: [...state.todos, action.payload], error: null };
            }
        case UPDATE_TODO:
            const { index, newTodo } = action.payload;
            state.todos[index] = newTodo;
            return { ...state };

        case DELETE_TODO:
            const { id } = action.payload;
            state.todos = state.todos.splice(id, 1);
            return { ...state };

        default: return state;
    }
}
export default reducer;
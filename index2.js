//getUsers --- ASYNC TASK
//setUsers --- SYNC TASK

const { createStore, applyMiddleware } = require("redux");
const { default: createSagaMiddleware } = require("redux-saga");
const { rootSaga } = require("./sagas");

//this is a async task that will be handled by redux-saga
const getUsers = () => ({ type: 'GET_USERS' });

//this is sync task that will be handled by redux
const setUsers = (users) => ({ type: 'SET_USERS', payload: users });

/****************************************************************************/

const reducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_USERS':
            console.log("SET USERS>>>>>")
            return { ...state, users: action.payload }
        default:
            return state;
    }
}
/****************************************************************************/

const sagaMiddleWare = createSagaMiddleware();
const middleWare = [sagaMiddleWare];
const store = createStore(reducer, applyMiddleware(...middleWare));

sagaMiddleWare.run(rootSaga);

store.dispatch(getUsers());

store.subscribe(() => {
    console.log("Store Updated", store.getState());
})
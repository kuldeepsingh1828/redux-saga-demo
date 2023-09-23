const { call, put } = require('redux-saga/effects');
const { getUsers } = require('../apicalls/userApi');



//call is used to call the api

//get All Users Handler
function* getUserHandler() {
    console.log("Get User Handler");
    console.log(getUsers)
    try {
        const response = yield call(getUsers);
        console.log(response.data)
        yield put({ type: 'SET_USERS', payload: response.data });
    } catch (error) {
        yield put({ type: 'GET_USER_FAILURE', payload: error });
    }
}


module.exports = { getUserHandler };
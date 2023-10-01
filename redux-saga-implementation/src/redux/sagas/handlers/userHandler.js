import { call, put } from 'redux-saga/effects';
import { getUsers } from '../apicalls/userApi';


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


export { getUserHandler };
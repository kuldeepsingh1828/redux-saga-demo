//rootSaga

import { takeEvery, takeLatest } from 'redux-saga/effects';
import { getUserHandler } from './handlers/userHandler';

function* rootSaga() {
    console.log("ROOT SAGA");
    yield takeLatest('GET_USERS', getUserHandler);
}

export default rootSaga;
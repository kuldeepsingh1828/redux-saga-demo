//rootSaga

const { takeEvery, takeLatest } = require('redux-saga/effects');
const { getUserHandler } = require('./handlers/userHandler');

function* rootSaga() {
    console.log("ROOT SAGA");
    yield takeLatest('GET_USERS', getUserHandler);
}
module.exports = { rootSaga }
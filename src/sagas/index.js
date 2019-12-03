import { put, takeEvery, all } from 'redux-saga/effects';
function* fetchEmployees() {
    const json = yield fetch('http://localhost:3000/employees')
        .then(response => response.json(), )
    yield put({ type: "EMPLOYEE_RECEIVED", json: json, })
}
function* actionWatcher() {
    yield takeEvery('GET_EMPLOYEE', fetchEmployees)
}
export default function* rootSaga() {
   yield all([
   actionWatcher(),
   ])
}

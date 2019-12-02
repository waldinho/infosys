import { put, takeLatest, all } from 'redux-saga/effects';
function* fetchNews() {
  const json = yield fetch('http://localhost:3000/employees')
        .then(response => response.json(), );    
  yield put({ type: "EMPLOYEE_RECEIVED", json: json, });
}
function* actionWatcher() {
     yield takeLatest('GET_EMPLOYEE', fetchNews)
}
export default function* rootSaga() {
   yield all([
   actionWatcher(),
   ]);
}
import {fork} from 'redux-saga/effects';
import {watchItemsSaga} from './itemsSaga';

export default function* appSaga() {
  yield fork(watchItemsSaga);
}

import {PayloadAction} from '@reduxjs/toolkit';
import {call, delay, put, takeLatest} from 'redux-saga/effects';
import {getDetailApi, getItemsApi} from '../../api/items.api';
import {showToast} from '../../utils';
import {
  fetchDetailItem,
  fetchDetailItemFail,
  fetchDetailItemSucceed,
  fetchListItem,
  fetchListItemFail,
  fetchListItemSucceed,
} from '../reducers/itemsSlice';

function* handleGetListItems(action: PayloadAction): any {
  try {
    const {params}: any = action.payload;
    yield delay(500);
    const response = yield call(getItemsApi, params);
    if (response.data.success) {
      yield put(fetchListItemSucceed({data: response.data.data}));
    } else {
      showToast(
        'e',
        'Error',
        response.data?.message || 'Cannot fetch item list',
      );
    }
  } catch (error) {
    yield put(fetchListItemFail(error));
    showToast('e', 'Error', error?.message || 'Cannot fetch item list');
  }
}
function* handleGetDetailItem(action: PayloadAction): any {
  try {
    const {params}: any = action.payload;
    yield delay(500);
    const response = yield call(getDetailApi, params);
    if (response.data.success) {
      yield put(fetchDetailItemSucceed({data: response.data.data}));
    } else {
      yield put(fetchDetailItemFail(response.data));
    }
  } catch (error) {
    yield put(fetchDetailItemFail(error));
  }
}

export function* watchItemsSaga() {
  yield takeLatest(fetchListItem.type, handleGetListItems);
  yield takeLatest(fetchDetailItem.type, handleGetDetailItem);
}

import {configureStore, MiddlewareArray} from '@reduxjs/toolkit';
import itemsReducer from './reducers/itemsSlice';
import createSagaMiddleware from 'redux-saga';
import appSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: {
    items: itemsReducer,
  },
  middleware: new MiddlewareArray().concat(sagaMiddleware),
});
sagaMiddleware.run(appSaga);

export default store;

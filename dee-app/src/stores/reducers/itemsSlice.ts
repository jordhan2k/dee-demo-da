import {createSlice} from '@reduxjs/toolkit';
import {isEmpty} from 'lodash';

const initialState = {
  dataItems: {
    items: [],
    currentPage: 1,
  },
  isLoading: false,
  isLoadingMore: false,

  dataDetail: null,
  isLoadingDetail: false,
  errorDetail: null,
};

const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    // list
    fetchListItem: (state, action) => {
      const page = action.payload?.params?.page || 1;
      if (page === 1) {
        state.isLoading = true;
      } else {
        state.isLoadingMore = true;
      }
    },
    /**
     * If the item list api is triggered for the first time or the target page is 1,
     * the "dataItems.items" state is overwritten by the data coming from the api.
     * Otherwise, if the page is greater than 1,
     * data coming from api is concatenated to the existing "dataItems.items" state.
     * The "dataItems.currentPage" will be updated only if the data incoming is not empty.
     */
    fetchListItemSucceed: (state, action) => {
      state.isLoading = false;
      state.isLoadingMore = false;
      const page = Number(action.payload.data.currentPage);
      const newData = action.payload.data?.items;
      if (page === 1) {
        state.dataItems.items = newData;
      } else if (page > 1) {
        state.dataItems.items = [...state.dataItems.items, ...newData];
      }
      if (!isEmpty(newData)) {
        state.dataItems.currentPage = page;
      }
    },
    fetchListItemFail: state => {
      state.isLoading = false;
      state.isLoadingMore = false;
    },
    // detail
    fetchDetailItem: state => {
      state.isLoadingDetail = true;
      state.dataDetail = null;
    },
    fetchDetailItemSucceed: (state, action) => {
      state.isLoadingDetail = false;
      state.dataDetail = action.payload.data;
    },
    fetchDetailItemFail: (state, action) => {
      state.isLoadingDetail = false;
      state.errorDetail = action.payload;
    },
  },
});

export const {
  fetchListItem,
  fetchListItemSucceed,
  fetchDetailItem,
  fetchDetailItemFail,
  fetchDetailItemSucceed,
  fetchListItemFail,
} = itemsSlice.actions;

const itemReducer = itemsSlice.reducer;

export default itemReducer;

export const selectDataItems = (state: any) => state.items.dataItems;
export const selectIsLoading = (state: any) => state.items.isLoading;
export const selectIsLoadingMore = (state: any) => state.items.isLoadingMore;
export const selectDataDetail = (state: any) => state.items.dataDetail;
export const selectIsLoadingDetail = (state: any) =>
  state.items.isLoadingDetail;
export const selectErrorDetail = (state: any) => state.items.errorDetail;

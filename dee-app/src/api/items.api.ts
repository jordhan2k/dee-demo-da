import {Item, ItemForm, Items} from '../types/items.type';
import http from './axiosConfig';

export const getItems = (page: number | string, limit: number | string) =>
  http.get<Items>('items', {
    params: {
      page: page,
      limit: limit,
    },
  });
export const getItem = (id: string | number) => http.get<Item>(`items/${id}`);
export const addNewItem = (student: ItemForm) =>
  http.post<Item>('items', student);

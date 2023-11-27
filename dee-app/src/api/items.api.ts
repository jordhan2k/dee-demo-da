import {Item, Items} from '../types/items.type';
import http from './axiosConfig';

export const getItemsApi = async (data: {
  page: number | string;
  limit: number | string;
}) =>
  await http.get<Items>('items', {
    params: {
      page: data.page,
      limit: data.limit,
    },
  });
export const getDetailApi = async (id: string | number) =>
  await http.get<Item>(`items/${id}`);

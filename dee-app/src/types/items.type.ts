export interface Item {
  _id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  createdAt: string;
  updatedAt: string;
  isActive: string;
}

export type Items = Item[];
export type ItemForm = Omit<Item, '_id'>;

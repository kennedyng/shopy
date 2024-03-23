export type UserInfo = {
  email: string;
  password: string;
};

export type ItemType = {
  id?: string;
  name: string;
  note: string;
  image_url: string;
  userId?: string;
  categoryId?: string;
  shppingListItemId?: string;
};

export type CategoriesType = {
  id: string;
  name: string;
  userId: string;
  items: ItemType[];
};

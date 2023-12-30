import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";

type ItemType = {
  id?: string;
  name: string;
  pics?: number;
};

type ListItemType = {
  categoryInfo: {
    id: string;
    name: string;
  };
  items: ItemType[];
};

type StateType = {
  list: ListItemType[];
};
const initialState: StateType = {
  list: [],
};

interface AddItemPayload {
  categoryId: string;
  categoryName: string;
  item: ItemType;
}
export const list = createSlice({
  name: "list",
  initialState,
  reducers: {
    addItemToCategory: ({ list }, action: PayloadAction<AddItemPayload>) => {
      const categoryIndex = list.findIndex(
        ({ categoryInfo }) => action.payload.categoryId === categoryInfo.id
      );

      const newItem: ItemType = {
        id: nanoid(),
        name: action.payload.item.name,
        pics: 0,
      };

      if (categoryIndex === -1) {
        list.push({
          categoryInfo: {
            id: action.payload.categoryId,
            name: action.payload.categoryName,
          },

          items: [newItem],
        });
      } else {
        list[categoryIndex].items.push(newItem);
      }
    },

    increaseItemPcs: (state, action: PayloadAction<{ itemId: string }>) => {},
    decreaseItemPcs: (state, action: PayloadAction<{ itemId: string }>) => {},
    deleteItem: (state, action: PayloadAction<{ itemId: string }>) => {},
    swichListStateToEdit: (state) => {},
    swichListStateToActive: (state) => {},
  },
});

export const {
  addItemToCategory,
  increaseItemPcs,
  decreaseItemPcs,
  deleteItem,
  swichListStateToActive,
  swichListStateToEdit,
} = list.actions;
export default list.reducer;

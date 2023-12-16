import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";

export type ItemType = {
  id: string;
  itemLabel: string;
  pcs: number;
};

export type ListType = {
  id: string;
  categoryName: string;
  items: ItemType[];
};

type listState = {
  listState: "edit" | "acitve";
  shoppingList: ListType[];
};

const initialState = {
  listState: "acitve",
  shoppingList: [],
} as listState;

export const list = createSlice({
  name: "list",
  initialState,
  reducers: {
    addItemList: (state, action: PayloadAction<{ categoryName: string }>) => {
      const elementAt = state.shoppingList.findIndex(
        ({ categoryName }) => categoryName === action.payload.categoryName
      );
    },

    increaseItemPcs: (state, action: PayloadAction<{ itemId: string }>) => {},
    decreaseItemPcs: (state, action: PayloadAction<{ itemId: string }>) => {},
    deleteItem: (state, action: PayloadAction<{ itemId: string }>) => {},
    swichListStateToEdit: (state) => {
      state.listState = "edit";
    },
    swichListStateToActive: (state) => {
      state.listState = "acitve";
    },
  },
});

export const {
  addItemList,
  increaseItemPcs,
  decreaseItemPcs,
  deleteItem,
  swichListStateToActive,
  swichListStateToEdit,
} = list.actions;
export default list.reducer;

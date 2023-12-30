import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";

type ItemType = {
  id?: string;
  name: string;
  pics: number;
};

type ListItemType = {
  categoryInfo: {
    id: string;
    name: string;
  };
  items: ItemType[];
};

type StateType = {
  name: string;
  isEdit: boolean;
  isActive: boolean;
  list: ListItemType[];
};
const initialState: StateType = {
  name: "",
  isEdit: false,
  isActive: false,
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
    addItemToCategory: (
      { list, isActive },
      action: PayloadAction<AddItemPayload>
    ) => {
      if (isActive) {
        const categoryIndex = list.findIndex(
          ({ categoryInfo }) => action.payload.categoryId === categoryInfo.id
        );

        const newItem: ItemType = {
          id: nanoid(),
          name: action.payload.item.name,
          pics: action.payload.item.pics,
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
      }
    },

    increaseItemPcs: (
      { list },
      action: PayloadAction<{ itemId: string; categoryId: string }>
    ) => {
      const categoryIndex = list.findIndex(
        ({ categoryInfo, items }) =>
          action.payload.categoryId === categoryInfo.id
      );

      if (categoryIndex !== -1) {
        const itemIndex = list[categoryIndex].items.findIndex(
          (item) => item.id === action.payload.itemId
        );

        list[categoryIndex].items[itemIndex].pics += 1;
      }
    },
    decreaseItemPcs: (
      { list },
      action: PayloadAction<{ itemId: string; categoryId: string }>
    ) => {
      const categoryIndex = list.findIndex(
        ({ categoryInfo }) => action.payload.categoryId === categoryInfo.id
      );

      if (categoryIndex !== -1) {
        const itemIndex = list[categoryIndex].items.findIndex(
          (item) => item.id === action.payload.itemId
        );

        if (list[categoryIndex].items[itemIndex].pics > 0)
          list[categoryIndex].items[itemIndex].pics -= 1;
      }
    },
    deleteItem: (
      { list },
      action: PayloadAction<{ itemId: string; categoryId: string }>
    ) => {
      const categoryIndex = list.findIndex(
        ({ categoryInfo, items }) =>
          action.payload.categoryId === categoryInfo.id
      );

      if (categoryIndex !== -1) {
        const itemIndex = list[categoryIndex].items.findIndex(
          (item) => item.id === action.payload.itemId
        );

        list[categoryIndex].items.splice(itemIndex, 1);

        if (list[categoryIndex].items.length === 0) {
          list.splice(categoryIndex, 1);
        }
      }
    },

    toggleEdit: (state) => {
      state.isEdit = !state.isEdit;
    },

    toggleActive: (state) => {
      state.isActive = !state.isActive;
    },

    setListName: (state, action: PayloadAction<{ listName: string }>) => {
      state.name = action.payload.listName;
    },
  },
});

export const {
  addItemToCategory,
  increaseItemPcs,
  decreaseItemPcs,
  deleteItem,

  toggleEdit,
  toggleActive,
  setListName,
} = list.actions;
export default list.reducer;

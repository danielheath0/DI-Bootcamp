import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const todoListSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    addItem: (state, action) => {
      return [
        ...state,
        { id: Date.now(), details: action.payload.details, complete: false },
      ];
    },
    toggleCompleted: (state, action) => {
      return state.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, complete: !item.complete };
        }
        return item;
      });
    },
    deleteItem: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const {addItem, toggleCompleted, deleteItem} = todoListSlice.actions

export default todoListSlice.reducer
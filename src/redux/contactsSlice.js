import { createSlice } from "@reduxjs/toolkit";
import contactsTodo from "../contactsTodo.json";

const initialState = {
  contacts: {
    items: contactsTodo,
  },
};

const slice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.contacts.items.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.contacts.items = state.contacts.items.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const contactsReducers = slice.reducer;
export const { addContact, deleteContact } = slice.actions;

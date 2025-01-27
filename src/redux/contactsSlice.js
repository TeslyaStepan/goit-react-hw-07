import { createSelector, createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchContacts } from "./contactsOps";
import { selectFilter } from "./filtersSlice";

const initialState = {
  contacts: {
    items: [],
    loading: false,
    error: null,
  },
};

const slice = createSlice({
  name: "contacts",
  initialState,
  // reducers: {
  //   addContact: (state, action) => {
  //     state.contacts.items.push(action.payload);
  //   },
  //   deleteContact: (state, action) => {
  //     state.contacts.items = state.contacts.items.filter(
  //       (item) => item.id !== action.payload
  //     );
  //   },
  // },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts.items = action.payload;
      })
      .addMatcher(isAnyOf(fetchContacts.pending), (state) => {
        (state.loading = true), (state.error = null);
      })
      .addMatcher(isAnyOf(fetchContacts.rejected), (state, action) => {
        (state.loading = false), (state.error = action.payload);
      });
  },
});

export const contactsReducers = slice.reducer;
export const { addContact, deleteContact } = slice.actions;

export const selectContacts = (state) => state.contacts.contacts.items;
export const selectIsLoading = (state) => state.contacts.contacts.loading;
export const selectIsError = (state) => state.contacts.contacts.error;
export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter)
    );
  }
);

import { createSlice } from '@reduxjs/toolkit';
import {toast} from 'react-hot-toast';
import { fetchContacts, fetchAddContact, fetchDeleteContact, fetchEditContact } from './operations';

export const toastLoading = toast.loading('', { position: 'top-center' });
const onPending = state => {
  state.isLoading = true;
  toast.loading('Waiting...',{  id: toastLoading,
    position: 'top-center' });
};

const onRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
  toast.dismiss(toastLoading);
  toast.error(state.error);
};
const onFulfilled = (state, action) => {
  toast.dismiss(toastLoading);
  state.isLoading = false;
  state.items = action.payload;
  state.erorr = null;
  
};
const onAddFulfilled = (state, action) => {
  toast.dismiss(toastLoading);
  toast.success('Contact is added!')
  return { ...state, items: [...state.items, action.payload] };
};
const onDeleteFulfilled = (state, action) => {
  toast.dismiss(toastLoading);
  toast.success('Contact deleted');
  return {
    ...state,
    items: state.items.filter(contact => contact.id !== action.payload.id)
  };
};
const onEditFulfilled = (state, action) => {
  

  const newState = {
    ...state,
    items: state.items.map(contact =>
      contact.id === action.payload.id ? action.payload : contact
    ),
  };

  return newState;
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: [], isLoading: false, error: null },
  extraReducers:builder=>{
    builder
      .addCase(fetchContacts.pending,onPending)
      .addCase(fetchContacts.fulfilled,onFulfilled)
      .addCase(fetchContacts.rejected,onRejected)
      .addCase(fetchAddContact.pending,onPending)
      .addCase(fetchAddContact.fulfilled,onAddFulfilled)
      .addCase(fetchAddContact.rejected,onRejected)
      .addCase(fetchDeleteContact.pending,onPending)
      .addCase(fetchDeleteContact.fulfilled,onDeleteFulfilled)
      .addCase(fetchDeleteContact.rejected,onRejected)
      .addCase(fetchEditContact.pending, onPending)
      .addCase(fetchEditContact.fulfilled, onEditFulfilled)
      .addCase(fetchEditContact.rejected, onRejected);
  }
});


export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
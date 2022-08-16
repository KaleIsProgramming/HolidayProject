import { createAsyncThunk, createSlice, isPending, isRejected } from "@reduxjs/toolkit";

import { addAbortSignalListener } from "../helpers";

export interface MenuState {
    isOpen: boolean
  }
  
  const initialState: MenuState = {
    isOpen: true,
  }


// export const getClients = createAsyncThunk(
//   ClientActions.GET_CLIENTS,
//   async (payload, {signal}) => {
//     addAbortSignalListener(signal);
//     const response = await ClientsAPI.getPaginatedClientDtosList(undefined, 99999, 'name');
//     return response;
//   }
// );

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    toggleStatus: (state) => {
        state.isOpen = !state.isOpen;
    }
  },
});

export const { toggleStatus } = menuSlice.actions;
export default menuSlice.reducer;
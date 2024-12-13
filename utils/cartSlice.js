import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: []
  },
  reducers:{
    addItem: (state, action)=>{
      // Add item to cart
      // mutating the state here because createSlice uses immer
      state.item.push(action.payload);
    },
    removeItem: (state)=>{
      // Remove item from cart
      state.items = state.items.filter(item => item.id !== action.payload.id);
    },
    clearCart: (state)=>{
      state.items.length = 0;
    }
  }
})

// {
//   actions:{

//   },
//   reducer
// }

export const {addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;
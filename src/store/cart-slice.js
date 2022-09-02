import { createSlice } from "@reduxjs/toolkit";
const CartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    totalQuantity: 0,
    totalAmount: 0,
    submited: false,
  },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.itemId === newItem.id
      );

      state.totalAmount += newItem.price;
      state.totalQuantity++;

      if (existingItem) {
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
        existingItem.quantity++;
      } else {
        state.cartItems.push({
          itemId: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.name,
          img: newItem.img,
        });
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload.id;
      const existingItem = state.cartItems.find((item) => item.itemId === id);

      state.totalAmount -= existingItem.price;
      state.totalQuantity--;
      if (existingItem.quantity === 1) {
        state.cartItems = state.cartItems.filter(
          (item) => item.itemId !== existingItem.itemId
        );
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
    deleteItemFromCart(state, action) {
      const id = action.payload.id;
      const existingItem = state.cartItems.find((item) => item.itemId === id);
      state.totalAmount -= existingItem.quantity * existingItem.price;
      state.totalQuantity -= existingItem.quantity;

      state.cartItems = state.cartItems.filter((item) => item.itemId !== id);
    },
    submitDiscount(state, action) {
      state.submited = true;
      const discountCode = action.payload;
      if (discountCode === "discount30") {
        state.totalAmount = +(
          state.totalAmount -
          state.totalAmount * 0.3
        ).toFixed(2);
      } else if (discountCode === "discount60") {
        state.totalAmount = +(
          state.totalAmount -
          state.totalAmount * 0.6
        ).toFixed(2);
      }
    },
    clearCart(state) {
      state.cartItems = [];
      state.totalAmount = 0;
      state.totalQuantity = 0;
    },
  },
});

export const {
  addItemToCart,
  removeItemFromCart,
  deleteItemFromCart,
  submitDiscount,
  clearCart,
} = CartSlice.actions;
export default CartSlice.reducer;

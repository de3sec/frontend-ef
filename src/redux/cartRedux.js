import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { deleteCart, saveCart } from "./apiCalls";

const sum = (array) => {
  return array.reduce((a, b) => a + b, 0);
};

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    id: null,
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    getCart: (state, action) => {
      state.id = action.payload._id;
      state.products = action.payload.products;
      state.quantity = action.payload.quantity;
      state.total = action.payload.total;
    },
    addProduct: (state, action) => {
      const productIndex = state.products.findIndex(
        (product) => product._id === action.payload._id
      );
      if (productIndex >= 0) {
        state.products[productIndex].quantity += 1;
        // toast.success('Product quantity updated');
        const total = sum(
          state.products.map((product) => product.pprice * product.quantity)
        );
        state.total = total;
        const quantity = sum(state.products.map((product) => product.quantity));
        state.quantity = quantity;
        saveCart(state);
      } else {
        state.products.push(action.payload);
        toast.success("Product added to cart");
        const total = sum(
          state.products.map((product) => product.pprice * product.quantity)
        );
        state.total = total;
        const quantity = sum(state.products.map((product) => product.quantity));
        state.quantity = quantity;
        saveCart(state);
      }
    },
    removeProduct: (state, action) => {
      const cart = state.products.filter(
        (product) => product._id !== action.payload._id
      );
      state.products = cart;
      toast.error("Product removed from cart");
      const total = state.products.map(
        (product) => product.pprice * product.quantity
      );
      const cartSum = sum(total);
      state.total = cartSum;
      const quantity = sum(state.products.map((product) => product.quantity));
      state.quantity = quantity;
      const data = {
        products: cart,
        quantity: quantity,
        total: cartSum,
      };
      saveCart(data);
    },
    decreaseProduct: (state, action) => {
      const decreaseIndex = state.products.findIndex(
        (product) => product._id === action.payload._id
      );
      if (state.products[decreaseIndex].quantity > 1) {
        state.products[decreaseIndex].quantity -= 1;
        // toast.error("Product quantity decreased");
        const total = sum(
          state.products.map((product) => product.pprice * product.quantity)
        );
        state.total = total;
        const quantity = sum(state.products.map((product) => product.quantity));
        state.quantity = quantity;
        saveCart(state);
      } else if (state.products[decreaseIndex].quantity === 1) {
        const cart = state.products.filter(
          (product) => product._id !== action.payload._id
        );
        state.products = cart;
        toast.error("Product removed from cart");
        const total = sum(
          state.products.map((product) => product.pprice * product.quantity)
        );
        state.total = total;
        const quantity = sum(state.products.map((product) => product.quantity));
        state.quantity = quantity;
        saveCart(state);
      }
    },
    emptyCart: (state) => {
      state.products = [];
      state.total = 0;
      state.quantity = 0;
      saveCart(state);
    },
  },
});

export const {
  getCart,
  addProduct,
  removeProduct,
  decreaseProduct,
  emptyCart,
} = cartSlice.actions;
export default cartSlice.reducer;

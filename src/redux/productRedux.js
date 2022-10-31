import { createSlice, createAsyncThunk } from "@reduxjs/toolkit/";
import { publicRequest } from "../requestMethods";

const initialState = {
  products: [],
  status: null,
};

export const productsFetch = createAsyncThunk(
  "products/productsFetch",
  async () => {
    const response = await publicRequest.get(`products`);
    // console.log(response.data);
    return response?.data;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: {
    [productsFetch.pending]: (state, action) => {
      state.status = "pending";
    },
    [productsFetch.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      state.products = action.payload;
    },
    [productsFetch.rejected]: (state, action) => {
      state.status = "rejected";
    },
  },
});

export default productSlice.reducer;

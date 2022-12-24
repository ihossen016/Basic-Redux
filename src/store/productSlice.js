import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const STATUSES = Object.freeze({
    SUCCESS: "success",
    LOADING: "loading",
    ERROR: "error",
});

const productSlice = createSlice({
    name: "product",
    initialState: {
        data: [],
        status: STATUSES.SUCCESS,
    },
    reducers: {
        // setProducts(state, action) {
        //     state.data = action.payload;
        // },
        // setStatus(state, action) {
        //     state.status = action.payload;
        // },
    },
    extraReducers: builder => {
        builder
            .addCase(fetchProducts.pending, (state, action) => {
                state.status = STATUSES.LOADING;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.data = action.payload;
                state.status = STATUSES.SUCCESS;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = STATUSES.ERROR;
            });
    },
});

export const { setProducts, setStatus } = productSlice.actions;

export default productSlice.reducer;

// Thunk
export const fetchProducts = createAsyncThunk("product/fetch", async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();

    return data;
});

// export function fetchProducts() {
//     return async function fetchProductsThunk(dispatch, getState) {
//         dispatch(setStatus(STATUSES.LOADING));

//         try {
//             const res = await fetch("https://fakestoreapi.com/products");
//             const data = await res.json();

//             dispatch(setProducts(data));
//             dispatch(setStatus(STATUSES.SUCCESS));
//         } catch (error) {
//             console.log(error);
//             dispatch(setStatus(STATUSES.ERROR));
//         }
//     };
// }

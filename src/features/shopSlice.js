import { createSlice } from "@reduxjs/toolkit";
import categories_data from "../data/categories_data.json"
import products_data from "../data/products_data.json"

export const shopSlice = createSlice({
    name: "shop",
    initialState: {
        categorySelected: "",
        productSelected: {},
        categories: categories_data,
        products: products_data,
        productsFilteredByCategory: []
    },
    reducers: {
        setCategorySelected: (state, action) => {
            state.categorySelected = action.payload
            state.productsFilteredByCategory = state.products.filter(product => product.category === state.categorySelected)
        },
        setProductIdSelected: (state, action) => {
            state.productSelected = state.products.filter(product => product.id === action.payload)[0] || {}
        }
    }
})

export const { setCategorySelected, setProductIdSelected } = shopSlice.actions

export default shopSlice.reducer
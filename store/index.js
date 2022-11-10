import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./reducers/categories";
import productsReducer from "./reducers/products";


export const store = configureStore({
    reducer: {
        categories: categoriesReducer,
        products: productsReducer,
        
    }
});

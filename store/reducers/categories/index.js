import { createReducer } from "@reduxjs/toolkit";
import { fetchCategories } from "./operations/fetchCategories";

const categoriesReducer = createReducer([], (builder)=>{
    builder
        .addCase(fetchCategories.fulfilled, (state, action)=>{
            return [...action.payload]
        })
})

export default categoriesReducer;

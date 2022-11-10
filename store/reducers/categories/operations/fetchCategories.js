import { createAsyncThunk } from "@reduxjs/toolkit";
import categories from "../../../../public/data/categories.json";

import { FETCH_CATEGORIES } from "../types";

export const fetchCategories = createAsyncThunk(
    FETCH_CATEGORIES,
    async () => {
        return categories
    }
)

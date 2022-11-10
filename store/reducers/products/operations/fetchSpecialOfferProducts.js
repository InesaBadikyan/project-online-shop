import { createAsyncThunk } from "@reduxjs/toolkit";
import product from "../../../../public/data/product.json";

import { FETCH_PRODUCTS } from "../types";

export const fetchSpecialOfferProducts = createAsyncThunk(
    FETCH_PRODUCTS,
    async () => {
        return product.filter(item=>item.specialOffer)
    }
)

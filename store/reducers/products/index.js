import { createReducer } from "@reduxjs/toolkit";
import { fetchSpecialOfferProducts } from "./operations/fetchSpecialOfferProducts";
import {ADD_TO_WISH_LIST, REMOVE_FROM_WISH_LIST} from "./types";

const productsReducer = createReducer({
    specialOffer: [],

    wishList : []
}, (builder)=>{
    builder
        .addCase(fetchSpecialOfferProducts.fulfilled, (state, action)=>{
            return {...state, specialOffer: action.payload}
        })
        .addCase(ADD_TO_WISH_LIST, (state, action)=>{
            const newWishList = [...state.wishList];
            const index = newWishList.findIndex((item)=>item.id === action.payload.id)
            if(index === -1){
                newWishList.push(action.payload);
            }
            return {...state, wishList: newWishList}
        })
        .addCase(REMOVE_FROM_WISH_LIST, (state, action)=>{
            const newWishList = [...state.wishList];
            const index = newWishList.findIndex((item)=>item.id === action.payload.id);
            newWishList.splice(index,1);
            return {...state, wishList: newWishList}
        })
})

export default productsReducer;



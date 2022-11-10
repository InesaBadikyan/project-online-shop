import {ADD_TO_WISH_LIST, REMOVE_FROM_WISH_LIST} from "./types";

export const addToWishLIst = (product)=>{
    return {
        type: ADD_TO_WISH_LIST,
        payload: product
    }
}

export const removeFromWishList = (product)=>{
    return {
        type:REMOVE_FROM_WISH_LIST,
        payload: product
    }
}

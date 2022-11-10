export const specialOfferProductsSelector = (store)=>{
    return store.products.specialOffer || [];
}

export const wishListSelector = (store)=>{
    return store.products.wishList || [];
}


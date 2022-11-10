export const topLevelCategoriesSelector = (store)=>{
    return store.categories.filter(item=>item.parentId === null) || [];
}

export const categorySelector = (store,id)=>{
    return store.categories.find(item=>item.id === Number(id)) || {};
}

export const subCategoriesSelector = (store,id)=>{
    return store.categories.filter(item=>item.parentId === id) || [];
}

export const actiSelector = (store,id)=>{
    return store.actia.filter(item=>item.parentId === id) || [];
}




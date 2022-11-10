import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useRouter} from "next/router";

import {categorySelector, subCategoriesSelector} from "../../store/reducers/categories/selectors";
import {fetchCategories} from "../../store/reducers/categories/operations/fetchCategories";

const Category = ()=>{
    const router = useRouter();
    const dispatch = useDispatch();
    const category = useSelector(store=>categorySelector(store,router.query.categoryId));
    const subCategories = useSelector(store=>subCategoriesSelector(store,category.id));

    useEffect(()=>{
        dispatch(fetchCategories())
    },[]);

    return (
        <div>
            <p>{category.name}</p>
            <br/>
            {subCategories.map((item,index)=><p key={index.toString()}>{item.name}</p>)}
        </div>
    )
}

export default Category;

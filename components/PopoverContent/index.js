import {useSelector} from "react-redux";
import Link from "next/link";

import styles from "./styles.module.css";

import {subCategoriesSelector} from "../../store/reducers/categories/selectors";

const PopoverContent = ({item})=>{
    const subCategories = useSelector(store=>subCategoriesSelector(store,item.id));

    return (
        <div>
            {subCategories.map((item,index)=><Link key={index.toString()} href={`category/${item.id}`}>
                <p className={styles.itemStyle}>{item.name}</p>
            </Link>)}
        </div>
    )
}

export default PopoverContent;

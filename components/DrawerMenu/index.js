import {useSelector} from "react-redux";
import { Popover } from 'antd';

import PopoverContent from "../PopoverContent";

import styles from "./styles.module.css";

import {subCategoriesSelector} from "../../store/reducers/categories/selectors";

const DrawerMenu = ({selectedCategory})=>{
    const subCategories = useSelector(store=>subCategoriesSelector(store,selectedCategory.id));

    return (
        <div>
            {subCategories.map((item,index)=><Popover key={index.toString()} placement="right" trigger="hover" title={item.name} content={<PopoverContent item={item}/>}>
                <p className={styles.itemStyle}>{item.name}</p><br/>
            </Popover>)}
        </div>
    )
}

export default DrawerMenu;

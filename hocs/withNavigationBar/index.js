import {useSelector} from "react-redux";
import { Drawer } from "antd";
import { useState } from "react";
import Link from "next/link";
import NavBarItem from "../../components/NavBarItem";
import DrawerMenu from "../../components/DrawerMenu";

import styles from "./styles.module.css";

import { topLevelCategoriesSelector } from "../../store/reducers/categories/selectors";

const withNavigationBar = (Component) => (props)=>{
    const [open, setOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState({});
    const categories = useSelector(topLevelCategoriesSelector);

    const showDrawer = (item) => {
        setSelectedCategory(item);
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Drawer
                title={selectedCategory.name}
                placement={'left'}
                closable={false}
                onClose={onClose}
                open={open}
                key={'left'}
            >
                <DrawerMenu selectedCategory={selectedCategory}/>
            </Drawer>
            
            <div className={styles.block}>ԱՐԱԳ ԱՌԱՔՈՒՄ ԹԵԹԵՎ ԱՊՐԱՆՔՆԵՐԻ ՀԱՄԱՐ</div>
            <div className={styles.blocks}>
                <div className={ styles.block1}>(060) 68-88-88</div>
                <div className={styles.block2}>
                    <img src="flag.png" width="30" height="20"/>
                     <select className="selectBox">
                        <option value="1">ՀԱՅԵՐԵՆ</option>
                        <option value="2">ENGLISH</option>
                        <option value="3">РУССКИЙ</option>
                        </select>
                <div className={styles.block3}>
                <img src="facebook-logo.png" width="20" height="20"/>
                <img src="instagram.png" width="20" height="20"/>
                <img src="youtube.png" width="20" height="20"/>
                <img src="in.png" width="20" height="20"/>
                <img src="teleg.png" width="20" height="20"/>
                
                </div>
                </div>
                
            </div>
            <div className={styles.navigationContainer}>
            <img src="vega.png" width="50" height="50"/>
                {categories.map((item,index)=><NavBarItem
                    key={index.toString()}
                    item={item}
                    showDrawer={showDrawer}
                />)}
                
                <Link href={'wishlist'}>
                    <button>WISH LIST</button>
                </Link>
            </div>
            <Component {...props}/>
        </div>
    )
}

export default withNavigationBar


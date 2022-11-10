import styles from "./styles.module.css";

const NavBarItem = ({item, showDrawer})=>{
    return (
        <span onClick={()=>{showDrawer(item)}} className={styles.itemStyle}>{item.name}</span>
    )
}

export default NavBarItem;

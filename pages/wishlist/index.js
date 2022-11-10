import {useSelector} from "react-redux";
import {wishListSelector} from "../../store/reducers/products/selectors";

const Wishlist = ()=>{
    const wishList = useSelector(wishListSelector);

    return (
        <div>
            {wishList.map((item,index)=><p key={index.toString()}>{item.name}</p>)}
        </div>
    )
}

export default Wishlist


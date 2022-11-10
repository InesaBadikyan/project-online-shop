import { useEffect, useState } from "react";

const ItemList= ({generateItems})=>{
    const [items,setItems] = useState([])


    useEffect(()=>{
    const newItems = generateItems();
    setItems(newItems);

    },[generateItems])
return(
<div>
{items.map((item,index)=><p key={index.toString()}>{item}</p>)}
</div>)

}
export default ItemList
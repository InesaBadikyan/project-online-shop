import {useDispatch, useSelector} from "react-redux";
import { useEffect } from "react";

import withNavigationBar from "../hocs/withNavigationBar";
import Carousel from "../components/Carousels";

import { fetchCategories } from "../store/reducers/categories/operations/fetchCategories";
import { fetchSpecialOfferProducts } from "../store/reducers/products/operations/fetchSpecialOfferProducts";
import {specialOfferProductsSelector, wishListSelector} from "../store/reducers/products/selectors";
import {addToWishLIst, removeFromWishList} from "../store/reducers/products/actions";





const Home = ()=>{
    const dispatch = useDispatch();
    const specialOfferProducts = useSelector(specialOfferProductsSelector);
    const wishList = useSelector(wishListSelector);
    
    useEffect(()=>{
        dispatch(fetchCategories());
        dispatch(fetchSpecialOfferProducts());
    },[]);

    const handleWishLIstButtonPress = (item)=>{
        dispatch({
            ...addToWishLIst(item)
        })
    }

    const removeFromWishListPress = (item)=>{
        dispatch({
            ...removeFromWishList(item)
        })
    }

  return (
      <div>
       
          <Carousel
              data={specialOfferProducts}
             
              title={'Շահավետ առաջարկներ'}
              handleWishLIstButtonPress={handleWishLIstButtonPress}
              removeFromWishListPress={removeFromWishListPress}
              wishList={wishList}
          />
          
         <div className="list">
                 
            <div className="lists">
           
       <div className="blocks">
       <img src="https://vega.am/image/cache/catalog/1Rita/household/dosia-active-3-color-400gr-401194-1194-540x400.jpg" width="50" height="50"/>

       </div>
       <p>ԼՎԱՑՔԻ ՓՈՇԻ ԵՎ ԳԵԼ</p>
       </div>
       <div className="lists">
       <div className="blocks">
       <img src="https://vega.am/image/cache/catalog/1Rita/household/0280%201-540x720.jpg" width="50" height="50"/>
       </div>
       <p>ՍՊԻՏԱԿԵՑՆՈՂ ԵՎ ԲԾԵՐԸ ՀԱՆՈՂ ՄԻՋՈՑ</p>
       </div>
       <div className="lists">
       <div className="blocks">
       <img src="https://vega.am/image/cache/catalog/1Rita/household/vanish-color-100ml-067675-7675-540x400.jpg" width="50" height="50"/>
       </div>
       <p>Սպիտակեցնող եվ բծերը հանող միջոց VANISH OXI ACTION COLOR</p>
       </div>
       <div className="lists">
       <div className="blocks">
       <img src="https://vega.am/image/cache/catalog/Angel/household/ver-2-540x400.jpg" width="50" height="50"/>
       </div>
       <p>ՀԱԳՈՒՍՏԻ ՓԱՓԿԵՑՆՈՂ ՀԵՂՈՒԿ</p>
       </div>
       <div className="lists">
       <div className="blocks">
       <img src="https://vega.am/image/catalog/home-cat/for-shaving.jpg" width="50" height="50"/>

       </div>
       <p>Սափրվելու համար</p>
       </div>
       <div className="lists">
       <div className="blocks">
       <img src="https://vega.am/image/cache/catalog/1Rita/household/4727-540x400.jpg" width="50" height="50"/>

       </div>
       <p>Մաքրող միջոցներ COMET GEL</p>
       </div>
       <div className="lists">
       <div className="blocks">
       <img src="https://vega.am/image/catalog/home-cat/dishwashing-liguid.jpg" width="50" height="50"/>
       </div>
       <p>ՍՊԱՍՔ ԼՎԱՆԱԼՈՒ ՄԻՋՈՑՆԵՐ</p>
       </div>
       <div className="lists">
       <div className="blocks">
       <img src="https://vega.am/image/catalog/home-cat/diapers.jpg" width="50" height="50"/>
       </div>
       <p>ՄԱՆԿԱԿԱՆ ՏԱԿԴԻՐՆԵՐ</p>
       </div>
       <div className="lists">
       <div className="blocks">
       <img src="https://vega.am/image/catalog/home-cat/shampoos-and-balms.jpg" width="50" height="50"/>
       </div>
       <p>ՇԱՄՊՈՒՆՆԵՐ ԵՎ ԲԱԼԶԱՄՆԵՐ</p>
       </div>
       <div className="lists">
       <div className="blocks">
       <img src="https://vega.am/image/catalog/home-cat/napkins.jpg" width="50" height="50"/>
       </div>
       <p>ԱՆՁԵՌՈՑԻԿ</p>
       </div>
       <div className="lists">
       <div className="blocks">
       <img src="https://vega.am/image/catalog/home-cat/soap.jpg" width="50" height="50"/>
       </div>
       <p>ՕՃԱՌ</p>
       </div>
       <div className="lists">
       <div className="blocks">
       <img src="https://vega.am/image/cache/catalog/1Rita/household/dosia-active-3-color-400gr-401194-1194-540x400.jpg" width="50" height="50"/>
       </div>
       <p>ԼՎԱՑՔԻ ՓՈՇԻ ԵՎ ԳԵԼ</p>
       </div>
       <div className="lists">
       <div className="blocks">
       <img src="https://vega.am/image/cache/catalog/1Rita/household/dosia-active-3-color-400gr-401194-1194-540x400.jpg" width="50" height="50"/>
       </div>
       <p>ԼՎԱՑՔԻ ՓՈՇԻ ԵՎ ԳԵԼ</p>
       </div>

      </div>
       
          
          <div className="footer">
         
           
             
          

        
      </div>
      </div>
  )
}

export default withNavigationBar(Home);


import Link from "next/link";
import Slider from "react-slick";

import styles from "./styles.module.css";
const actia = [
    {
        "imgUrl":"https://vega.am/image/cache/catalog/revslider_media_folder/lg-vc-arm-870x360.jpg",
        "name":"ՀԱՏՈՒԿ ԻՋԵՑՎԱԾ ԳՆԵՐ LG ապրանքանիշի փոշեկուլների ամբողջ տեսականու համար ‼"
    },
    
    {
    "imgUrl" : "https://vega.am/image/cache/catalog/revslider_media_folder/lg-ac-big-sales-870x360.jpg",
    "name":""
   
    },
    {
        "imgUrl":"https://vega.am/image/cache/catalog/revslider_media_folder/honor-credit-promo-870x360.jpg",
        "name":"Ձեռք բերեք HONOR ապրանքանիշի սմարթֆոններ ապառիկ 12 ամիս առանց տոկոսների ‼️"
    },
     {
        "imgUrl": "https://vega.am/image/cache/catalog/revslider_media_folder/canon-photo-october-870x360.jpg",
        "name":"Ստացեք ՆՎԵՐՆԵՐ՝ գնելով CANON ապրանքանիշի նշված մոդելների հայելային ֆոտոխցիկներ Վեգա սրահներից ‼️"
     },
      
    {
        "imgUrl" : "https://vega.am/image/cache/catalog/revslider_media_folder/electrolux-fusion-ac-promo-870x360.jpg",
        "name":"ՄԵԾ ԶԵՂՉԵՐ ELECTROLUX ապրանքանիշի FUSION մոդելային շարքի օդորակիչների համար ‼️"
        },
     
        {
            "imgUrl":"https://vega.am/image/cache/catalog/revslider_media_folder/lg-vc-arm-870x360.jpg",
            "name":"ՀԱՏՈՒԿ ԻՋԵՑՎԱԾ ԳՆԵՐ LG ապրանքանիշի փոշեկուլների ամբողջ տեսականու համար ‼"
        },
         {
            "imgUrl": "https://vega.am/image/cache/catalog/revslider_media_folder/canon-printer-gift-870x360.jpg",
            "name":"Ստացեք ՆՎԵՐՆԵՐ՝ գնելով CANON Pixma G դասի նշված մոդելների տպիչներ Վեգա սրահներից ‼️"
         },
         
         
]




function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "gray" }}
            onClick={onClick}
        />
    );
}


function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "gray" }}
            onClick={onClick}
        />
    );
}



const Carousels = ({data, title, handleWishLIstButtonPress, wishList, removeFromWishListPress})=>{
    const settings = {
        infinite: false,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
       
       
       
    };
    const setting = {
        infinite: false,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
       
       
       
    };

    return (
        <div>
            <h1>{title}</h1>
            <div className={styles.sliderContainer}>
                <Slider {...settings}>
                    {
                        data.map((item,index)=>{
                            const isWish = wishList.findIndex(e=>e.id === item.id) !== -1;
                            return (
                                <div className={styles.items} key={index.toString()}>
                                    <img src={item.imageUrl}/>
                                    <p>{item.name}</p>
                                    <p>{item.price}</p>
                                    <button onClick={()=>{
                                        if(isWish){
                                            removeFromWishListPress(item)
                                        }else {
                                            handleWishLIstButtonPress(item)
                                        }
                                    }}>{isWish?'Remove from wish list':'Add to wishlist'}</button>
                                </div>
                            )
                        })
                    }
                </Slider>
                
                </div>
         
    <div>
  
          <p>  <Link href={'/actia'}>
            <a>ԱԿՑԻԱՆԵՐ</a>  
                </Link>
                </p> 
                <div className={styles.sliderContainer}>
                <Slider {...setting}>
                {
                        actia.map((item,index)=>{
                           
                            return (
                                <div  key={index.toString()}>
                                    <img src={item.imgUrl}/>
                                    <p>{item.name}</p>
                                  
                                    
                                </div>
                            )
                        })
                    }
                       
                            
                           
                               
                            
                        
                    
                </Slider>
                
                </div>
         
               
           
            
      
       
        

   
    
    


            </div>
            
      </div>
       
        
    
 
  ) 
    
    
}





export default Carousels;

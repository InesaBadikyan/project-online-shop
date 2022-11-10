import React from "react";
import Router from "next/router";

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



const Actia = ()=>{
    const linckHandler =()=>{
        Router.push('/')
     }
  
 
 
   

    return (
        <div>
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
                    <button onClick={linckHandler} class="block">Back</button>
        </div>
     
    )
}

export default Actia
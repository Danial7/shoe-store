import React from 'react';
import { Link } from 'react-router-dom';

export const ProductIndex = () => {const shoes = {
    "dalton-shell-cordovan-dress-boots":{
     name: "Dalton Shell Cordovan Dress Boots",
     img:
         "https://www.allenedmonds.com/dw/image/v2/AAXI_PRD/on/demandware.static/-/Sites-allenedmonds-catalog/default/dw8116ebe3/images/2.1/mens-shoes/dalton-0181-burgundy-angle-web.jpg?sw=736&sh=736&sm=fit"  
   },
   "park-avenue-shell-cardovan":{
    name:"Park Avenue Shell Cardovan",
    img:
        "https://www.allenedmonds.com/dw/image/v2/AAXI_PRD/on/demandware.static/-/Sites-allenedmonds-catalog/default/dwc4ea4a21/images/2.1/mens-shoes/parkave-5805-black-angle-web.jpg?sw=736&sh=736&sm=fit"
               },
   "asborn-sneaker":{
   name:"Osborn Sneaker",
   img:
   "https://n.nordstrommedia.com/id/sr3/ee5b1480-58a9-4167-944e-50a604ce277a.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838"
          }
   };

    return (
        <div>
            <ul>
                {Object.entries(shoes).map(([productID,{name,img}]) => 
                (
                <li key={productID}>
                    <Link to={productID}>
                      <h2>{name}</h2>
                      <img src={img} alt={name} />
                </Link>
                </li>
                )
                )}
            </ul>
        </div>
    )
}

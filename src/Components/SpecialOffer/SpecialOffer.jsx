import React from "react";
 import s from "./SpecialOffer.module.css";
import Items from "./Items/Items";
import { Element } from "react-scroll";


const SpecialOffer = (props) => {

let filteredItems = props.offers.filter(
  item => {
    return item.name.toLowerCase().indexOf(props.searchContent.toLowerCase()) !== -1 ;
  }
)
console.log(filteredItems.length)
  return (
    <section className={s.section}>
      <div className={s.wrapper}>
      <Element name = "result_search">  
        <div className = {s.mainTxt}>Специальные предложения</div>
      
            {filteredItems.length > 0 ? 
         <div className = {s.block}>{ filteredItems.map(offer => 
          <div  key = {offer.id} >
              <Items data = {offer} buy = {props.BuyProduct} add = {props.addProductToList} />
          </div>
          
      )}</div>   : <div className = {s.not_found}>Ничего не найдено</div>}
            
      </Element>
      </div>
    </section>
  );
};
export default SpecialOffer;

import React from "react";
import Image from "../../../images/chairsItem.png";
import s from "./Items.module.css";
import { useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";




const Items = (props) => {
debugger
useEffect(()=>{
 Aos.init({
   duration : 1500,
   once : true

 })
},[])

 
 let [checkId , setCheckId] = useState([]);

const CheckBuy = () => props.buy(props.data.id);
  

const CheckProducts = (state) =>{

  let viewed = {
    id:state.id,
    name :state.name,
    price : state.price,
    valut : state.valut
  };
if(checkId.length === 0){
  setCheckId(...checkId,checkId.push(viewed.id));
  return props.add(viewed);
}
 for(let id in checkId) 
 id !== viewed.id &&   checkId.push(viewed.id);   return props.add(viewed);

}



  return (
      <div className = {s.hoverTranslateY} > 
                <div data-aos = "fade-up" className = {s.item}>
                    <div><img src = {props.data.urlIMG ? props.data.urlIMG : Image} alt = "image"></img></div>
                    <span className = {s.name} onClick = {() => CheckProducts(props.data)} >{props.data.name}</span>
                    <span className ={s.price}>{props.data.price} {props.data.valut}</span>
                    
                    <div className ={s.btn}>
                      {props.data.buyed ? 
    <span className ={s.txt_btn__buyed}  onClick = {CheckBuy} >Куплено</span>  :
    <span className ={s.txt_btn} onClick = {CheckBuy} >Купить</span>  
}</div>
                    

                </div>

      </div>
  );
};
export default Items;

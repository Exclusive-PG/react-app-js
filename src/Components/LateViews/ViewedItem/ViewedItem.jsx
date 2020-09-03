import React from "react";
import Image from "../../../images/chairsItem.png";
import s from "./ViewedItem.module.css";





const ViewedItem = (props) => {
debugger
  return (
      <div  >
                <div  className = {s.item}>
                    <div><img src = {Image} alt = "viewed_products"></img></div>
                    <span className = {s.name}  >{props.data.name}</span>
                    <span className ={s.price}>{props.data.price} {props.data.valut}</span>
                    <span className = {s.plate}>Просмотрено</span>
                </div>
       
      </div>
  );
};
export default ViewedItem;

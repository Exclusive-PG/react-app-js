import React from "react";
import s from "./Navigation.module.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import {animateScroll as scroll} from 'react-scroll'
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navigation = () => {

 useEffect(()=>{
   Aos.init({
     duration:1500,
     once:true
   })
 }) 
const [showBtn,setShowBtn] = useState("none");

const buttomTop = () =>{

  window.pageYOffset > 1500 ? setShowBtn("block") :setShowBtn("none");

} 
 useEffect(()=>{
   window.addEventListener("scroll",buttomTop);
   buttomTop();
  return  () =>{
    window.removeEventListener("scroll",buttomTop)
  };

 },[buttomTop])
  return (
    <nav className={s.nav}>
      <div data-aos = "zoom-in" className={s.wrapper}>
        <ul className={s.navigation}>
          <li>Парикмахерская</li>
          <li>Барбершоп</li>
          <li>Маникюр</li>
          <li>Педикюр</li>
          <li>Массаж</li>
          <li>Мебель</li>
        </ul>
      </div>
      <div  className = {s.scrollToTop} style= {{display:showBtn}}  onClick = {()=> scroll.scrollToTop()}> <FontAwesomeIcon className ={s.btnTop}  color = "#F13C6E" icon ={['fas','arrow-up']}  size = "2x"pull = "left" border/></div>
    </nav>
  );
};
export default Navigation;

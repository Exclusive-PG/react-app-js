import React from "react";
import s from "./Bonus.module.css";
import "./Bonus.css"
import imageEmail from "../../images/email.png";
import imageCardMarket from "../../images/cardMarket.png";
import { useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { BrowserRouter, Redirect, Route, NavLink } from "react-router-dom";



const Bonus = (props) => {

const newClass = ['notification'];
const [hasError,setError] = useState(props.email.error.hasError);

useEffect(()=>{
 Aos.init({
   duration:1300,
   once:true,
 })
})

const addEmail = event =>{
if(event.key === "Enter"){
  setError(hasError);
  hasError === true && newClass.push('done');
  return props.addEmail(event.target.value);
}
}
{/* <span className = {newClass.join(' ')}>Error</span> : "" */}

  return (
    <section className={s.section}>
      <div className={s.wrapper}>
       
        <div data-aos = "fade-right" className={s.email}>
          <div className={s.text}>
            <span className={s.mainTxt}>Получайте бонусы и подарки</span>
            <span className={s.subtitle}>
              Каждый месяц разыгрываем 10 000 рублей для наших клиентов
            </span>
            <input  className={s.input}  placeholder = "Введите e-mail" onKeyPress = {addEmail} onChange = {event => props.ValidateEmail(event.target.value) }  value = {props.email.inputEmail}  />
            {  props.email.error.hasError  ?  <Redirect to = "error-page"/> : ""} 
          </div>
          <div  className={s.image}>
            <img src={imageEmail} alt = "email" ></img>
          </div>
        </div>
        <div data-aos = "fade-left"  className={s.cardMarket}> 
          <div className={s.text}>
              

            <span className={s.mainTxt}>Заходите к нам</span>
            <span className={s.subtitle}>
              Более 300 магазинов по всей стране
            </span>
          <NavLink to = "/card-market"><div className = {s.btn}><span className = {s.txt__btn}>Карта магазинов</span></div></NavLink>  
        
          </div>
          <div className={s.image}>
            <img src={imageCardMarket}  alt = "cardMarket"></img>
          </div>
        </div>
      </div>
    </section>

  );
};

export default Bonus;

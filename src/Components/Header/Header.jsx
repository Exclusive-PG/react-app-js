import React, { useState, useEffect } from "react";
import s from "./Header.module.css";

const Header = () => {
  const [show, setShow] = useState("flex");
 
  let backgroundColorBurgerMenu = null;

  const checkSize = () => {
    return window.innerWidth <= 390 ? setShow("block") : setShow("flex");
  };

  useEffect(() => {
    window.addEventListener("resize", checkSize);
    return () => {
      window.removeEventListener("rezise", checkSize);
    };
  }, [checkSize]);

  const toggleBurgerMenu = () =>{
    show === "none" ? setShow("block")  : setShow("none");
    
  }
  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <div className={s.wrapper_burger_menu} style={{ display: show }}>
          <ul className={s.navigation_header} style={{ display: show }}>
            <li>Доставка</li>
            <li>Оплата</li>
            <li>Отзывы</li>
            <li>Вопрос-ответ</li>
            <li>Контакты</li>
          </ul>
        </div>
        <div className={s.burgerMenu} onClick={toggleBurgerMenu}>
          <div style = {{backgroundColor : show === "block" ? "#fff" : "#000"}} className={s.line}></div>
          <div style = {{backgroundColor : show === "block" ? "#fff" : "#000"}} className={s.line}></div>
          <div style = {{backgroundColor : show === "block" ? "#fff" : "#000"}} className={s.line}></div>
        </div>
      </div>
    </header>
  );
};
export default Header;

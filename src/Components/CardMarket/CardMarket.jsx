import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import s from "./cardmarket.module.css";
import { Redirect, NavLink } from "react-router-dom";
import card1 from "../../images/card.png";
import card2 from "../../images/card1.png";

const CardMarket = (props) => {
  const [btn, setBtn] = useState(false);

  const [variant, setVariant] = useState("danger");

  const generateUserId = (lengthKey) => {
    let charactersIdUser =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let userId = "";
    for (let i = 0; i < lengthKey; i++) {
      userId += charactersIdUser.charAt(
        Math.round(Math.random() * charactersIdUser.length)
      );
    }
    return userId;
  };

  const orderedCard = () => {
    setBtn(true);
    setVariant("outline-danger");
    console.log(btn);

    return props.orderedCard(true, generateUserId(10));
  };
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="mx-auto">
            <div className={s.logoCard}>beauty</div>
          </Nav>
        </Container>
      </Navbar>

      <div className={s.wrapper}>
        <div className={s.firstBlock}>
          <div className={s.wrapper_txt}>
            <h4 className={s.mainTxt}>Карта магазина BEAUTY</h4>
            <p className={s.title}>Закажите сейчас и получите бонус </p>
            <span className={s.btn_boot}>
              <Button
                disabled={btn}
                variant={variant}
                className={("px-3 py-2 mx-auto", s.btn)}
                onClick={orderedCard}
              >
                {btn === true ? "Заказано" : "Заказать"}
              </Button>
              <NavLink to="/home">
                <Button
                  variant="success"
                  className={("px-3 py-2 mx-auto", s.btn,s.linkHome)}
                >
                  Главная
                </Button>
              </NavLink>
            </span>
          </div>

          <div className={s.wrapper_images}>
            <img src={card1} className={s.card1} alt="card1"></img>
            <img src={card2} className={s.card2} alt="card2"></img>
          </div>
        </div>
        <div className={s.advantages}>
          <div className={s.header}>Преимущества компании</div>
          <div className={s.grid}>
            <div className={s.item}>
              <span className={s.number}>1</span>
              <p>
                Расскажите, в чем преимущество работы именно с вашей командой
              </p>
            </div>
            <div className={s.item}>
              <span className={s.number}>2</span>
              <p>
                Расскажите, в чем преимущество работы именно с вашей командой
              </p>
            </div>
            <div className={s.item}>
              <span className={s.number}>3</span>
              <p>
                Расскажите, в чем преимущество работы именно с вашей командой
              </p>
            </div>
            <div className={s.item}>
              <span className={s.number}>4</span>
              <p>
                Расскажите, в чем преимущество работы именно с вашей командой
              </p>
            </div>
            <div className={s.item}>
              <span className={s.number}>5</span>
              <p>
                Расскажите, в чем преимущество работы именно с вашей командой
              </p>
            </div>
            <div className={s.item}>
              <span className={s.number}>6</span>
              <p>
                Расскажите, в чем преимущество работы именно с вашей командой
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CardMarket;

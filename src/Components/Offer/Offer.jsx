import React from "react";
import s from "./Offer.module.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Offer = () => {

useEffect(()=>{
  Aos.init({
    duration:2000,
    once:true
  })
})

  return (
    <section className={s.section}>
      <div className={s.wrapper}>
        <div className={s.block}>
          <div data-aos = "fade-bottom" className={s.mainTxt}>Супер кресло</div>
          <div data-aos = "fade-up" className={s.subTitle}>
            Текст акции всегда отражает суть, а не просто болтовню, поэтому
            внимательнее
          </div>
          <div data-aos = "fade-right" className={s.btn_detail}>
            <span   className={s.txt__btn}>Подробнее</span>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Offer;

import React from "react";
import imageDefault from "../../images/impuls.png";
import s from "./Brand.module.css";

const Brand = (props) => {

  return (
        <section className = {s.section}>
                <div className = {s.wrapper}>
                  {props.brands.map(brand =>(
                    <div key = {brand.id} >
                      <img src = {brand.urlImage ? brand.urlImage : imageDefault} alt = {brand.id}></img>
                    </div>
                  ))}
                </div>

        </section>
  );
};
export default Brand;


import React from "react";
import s from "./LateViews.module.css"
import ViewedItem from "./ViewedItem/ViewedItem";

const LatestViews = (props) =>{


        return(
                <section className = {s.section}>
                    <div className = {s.wrapper}>
                        <div className = {s.description}>Вы недавно смотрели</div>
       {
           (props.viewed.length === 0) ? <span className = {s.warn}>Вы пока ничего не смотрели</span> :  <div className = {s.products}>{props.viewed.reverse().map(p =>(
            <div key ={p.id}>
                <ViewedItem data = {p}/>
            </div>
        ))}</div>
        }
                    </div>
                </section>

        );
}

export default LatestViews;
import  React  from 'react';
import s from './Footer.module.css' 
import Aos from "aos";
import "aos/dist/aos.css";
import Communication from './_Call_SocialWeb';
import Right from './_Rigth';
import { useEffect } from 'react';
const Footer = () => {

useEffect(()=>{
    Aos.init({
        duration:2000,
        once:true
    })
})
    return(
        <footer className = {s.footer}>
                <div className = {s.wrapper}>
                    <div className={s.gridSet}>
                        <div  className={s.block}>
                            <span  className = {s.main}>Популярные категории</span>
                            <ul className = {s.listItem}>
                                <li>Насадки</li>
                                <li >Инструменты</li>
                                <li >Гель-лаки</li>
                                <li>Дизайн</li>
                                <li >Наращивание</li>
                                <li >Оборудование</li>
                            </ul>
                        </div>
                        <div className={s.block}>
                            <span className = {s.main}>Популярные категории</span>
                            <ul className = {s.listItem}>
                                <li >Насадки</li>
                                <li >Инструменты</li>
                                <li >Гель-лаки</li>
                                <li >Дизайн</li>
                                <li >Наращивание</li>
                                <li >Оборудование</li>
                            </ul>
                        </div>
                        <div className={s.block}>
                            <span className = {s.main}>Популярные категории</span>
                            <ul className = {s.listItem}>
                                <li >Насадки</li>
                                <li >Инструменты</li>
                                <li >Гель-лаки</li>
                                <li >Дизайн</li>
                                <li >Наращивание</li>
                                <li >Оборудование</li>
                            </ul>
                        </div>
                        <div className={s.block}>
                            <span className = {s.main}>Популярные категории</span>
                            <ul className = {s.listItem}>
                                <li >Насадки</li>
                                <li >Инструменты</li>
                                <li >Гель-лаки</li>
                                <li >Дизайн</li>
                                <li >Наращивание</li>
                                <li >Оборудование</li>
                            </ul>
                        </div>
                        </div>
                    </div>
                        <Communication />
                        <Right/>

        </footer>

    );
}
export default Footer ;
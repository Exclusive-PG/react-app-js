import  React  from 'react';
import s from './Footer.module.css'


const Right = () =>{

    return(
    <div  className ={s.right_block}> 
        <div  className = {s.right_wrapper}>
                <div className = {s.right}>Лучший магазин (с) 2019 Все права защищены. Интернет-магазин оборудования для салонов красоты</div> 
                <div className = {s.politics}>Политика конфиденциальности</div>    
        </div>
  </div>      
    );
}
export default Right;



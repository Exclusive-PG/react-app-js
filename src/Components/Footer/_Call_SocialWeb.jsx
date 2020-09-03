import  React  from 'react';
import s from './Footer.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import ModalWin from '../Bootstrap/Modal';
import { useState } from 'react';
const Communication = () =>{

const [show,setShow] = useState(false);

    return(
    <div className ={s.section}> 
        <div  data-aos = "zoom-in" className = {s.wrapper___inner}>
                                <div className={s.data}>
                    
                    <div className = {s.social__web}>  
                    <a href = "https://www.youtube.com" ><FontAwesomeIcon className = {s.icon}  color = "#F13C6E" icon ={['fab','youtube']} size = "2x" pull="left"  border/></a>
                    <a href = "https:/www.vk.com"> <FontAwesomeIcon className = {s.icon}  color = "#F13C6E"  icon ={['fab','vk']} size = "2x" pull="left"  border/></a>
                    <a href = "https:/www.facebook.com">   <FontAwesomeIcon className = {s.icon} color = "#F13C6E" icon ={['fab','facebook']} size = "2x" pull="left"  border/></a>
                    <a href = "https:/www.instagram.com">   <FontAwesomeIcon className = {s.icon}  color = "#F13C6E" icon ={['fab','instagram']} size = "2x" pull="left"  border/></a>
                        </div>    
                        <div className={s.adress}>198555, Невский пр. 140, офис 140</div>
                        <div className={s.number}>8 (812) 123-45-67</div>
                        <div className={s.call__back}><span onClick = { () => setShow(true)} className = {s.txt_btn}>Обратный звонок</span></div>
                    </div>
        </div>
        <ModalWin show = {show} onHide = {()=>setShow(false)}/>
  </div>      
    );
}
export default Communication;
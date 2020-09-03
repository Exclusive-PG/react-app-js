import React  from 'react';
import {Modal}  from 'react-bootstrap'
import "./modal.css"
import s from"../Search/Search.module.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

const ModalWin = (props) =>{

useEffect(()=>{
    Aos.init({
        duration:1800,
        once:false
    })
})

    return(
        <Modal
        {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className = "modal_main"
    >
      <Modal.Header >
        <Modal.Title id="contained-modal-title-vcenter">
            <div className = "wrapper_title_head_modal">
                <span data-aos = "fade-left">Call</span>
                <span data-aos = "fade-right">Back</span>
                 <span className = "title_head_icon_wrapper"><FontAwesomeIcon data-aos = "fade-down" className = {s.icon}  color = "#3F51B5" icon ={['fas','headset']}  pull="left" /></span>
         
            </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Обратный звонок</h4>
        <p>
          Спасибо за использования наших функций.Наш оператор перезвонит вам в течении пары минут
        </p>
      <div className = {s.wrap_icon_footer}><FontAwesomeIcon className = {s.icon}  color = "#3F51B5" icon ={['fas','headset']} size = "3x" pull="left" /></div>  
      </Modal.Body>  
      <Modal.Footer className = {s.footer_btstr} onClick={props.onHide}>
        <div className = {s.wrap_icon_footer} ><FontAwesomeIcon className = {s.icon ,"icon"}  color = "#fff" icon ={['fas','chevron-down']} size = "2x" pull="left" /></div>
      </Modal.Footer>
    </Modal>
    );
}

export default ModalWin;
import React, { useState } from "react";
import s from "./Search.module.css";
import Logo from "../../images/logo.png"
import * as Scroll from 'react-scroll';
import "./search.css"
import ModalWin from "../Bootstrap/Modal";


const Search = (props) => {

const [open,setOpen] = useState(false);


let inputField = React.createRef(); 


let OnRerenderInput = () =>{

  let content = inputField.current.value ;
  console.log(content);
  return props.rerenderInput(content);
}



const handleSearchProduct = event =>{
  if(event.key === "Enter" && props.inputField !== ""){
     let scroller = Scroll.scroller;
     scroller.scrollTo("result_search",{
      duration: 1500,
      smooth: true,
     })
  }
}
const handleClickIconSearch = () =>{
if(props.inputField !== ""){
  let scroller = Scroll.scroller;
  scroller.scrollTo("result_search",{
   duration: 1500,
   smooth: true,
  });
}
}

const HandleModalWin = (bool) => props.callBack(bool);



  return (
  
    <section className = {s.search}>

        <div className = {s.wrapper}>

            <div className = {s.logo}><img src = {Logo}></img></div>
            <div className = {s.name_market}>BEAUTY</div>
            <div className = {s.search__input}>
            <fieldset>
          <input className = {s.input} placeholder = "Search" onKeyPress = {handleSearchProduct} onChange = {OnRerenderInput} ref = {inputField} value = {props.inputField} type = "search"/>
            <span onClick = {handleClickIconSearch} className={s.search__}></span>
            </fieldset>   
           </div>
            <div className = {s.number__telephone}>8 (812) 123-45-67</div>
            <div className = {s.btn}><span onClick = {()=>{setOpen(true); HandleModalWin(true)}} className = {s.txt_btn}>Обратный звонок</span></div>
        </div>

        {/*Modal Window -> BootStrap*/} 
  <ModalWin show = {open} onHide={()=>setOpen(false)}/>
    </section>
  
  );
};
export default Search;

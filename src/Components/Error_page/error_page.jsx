import React from "react";
import { Form, Button,Container} from "react-bootstrap";
import s from "./error.module.css";
import Logo from "../../images/logo.png"
import { Redirect } from "react-router-dom";
const Error = (props) => {
  
debugger

  return (
    <div className={s.wrapper}>
        <div className={s.navbar_error}>
              <div className = {s.logo}><img src = {Logo}></img></div>
            <div className = {s.name_market}>BEAUTY</div>
            </div>

        <Form >
          <Form.Group controlId="formBasicEmail">
            <Form.Label style = {{fontWeight : 600,fontSize : 20}}>Email address</Form.Label>
            {!props.email.error.hasError ? <Redirect to = "/home"/> : <div className = {s.errorTxt}>Ошибка.Повторите попытку.Ваш email не корректный</div>}
            <Form.Control className = {s.inputField} size="lg" type="email" placeholder="Enter email" value = {props.email.inputEmail}  onChange = {event=>props.ValidateEmail(event.target.value)}/>
            <Form.Text className="text-muted">
              Мы никому не будем передавать ваши данные
            </Form.Text>
          </Form.Group>
          <Button  variant="primary" size = "lg" onClick = {()=> props.addEmail(props.email.inputEmail)}>
            Отправить
          </Button>
        </Form>
        
    </div>
  );
};
export default Error;

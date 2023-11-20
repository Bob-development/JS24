import { LoginWindow } from "../../apps/login/login";
import { RegistrWindow } from "../../apps/registration/registration";
import { AdvancedComponent, Component } from "../../core/Component";
import { render } from "../../core/render";
import { app } from "../../main";
import { Button } from "../button/Button";
import { Input } from "../input/Input";

import './Form.css';

export class Form extends AdvancedComponent{
    constructor({
        tagName = 'form', 
        className = 'form',
        children, 
        registrData
    }){
        super({tagName, className, children});

        document.createElement(this.tagName);

        const loginBtn = new Button({
            classname: 'login-btn',
            textContent: 'Log in',
            events: {
                click: (e)=>{
                    e.preventDefault();
                    render(this, new LoginWindow({registrData}))
                    
                }
            }
        })

        const registerBtn = new Button({
            classname: 'register-btn',
            textContent: 'Register',
            events: {
                click: (e)=>{
                    e.preventDefault();
                    render(this, new RegistrWindow())
                }
            }
        }) 


        return this.append(loginBtn, registerBtn);
    }
}
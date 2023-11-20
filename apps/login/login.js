import { AdvancedComponent, Component } from "../../core/Component";
import { render } from "../../core/render";
import { Button } from "../../components/button/Button";
import { Input } from "../../components/input/Input";
import { Form } from "../../components/form/Form";
import { ProfileWindow } from "../profile/profile";
import { app } from "../../main";

import './login.css'

export class LoginWindow{
    constructor(data){

        const user = {}

        const login = new AdvancedComponent({
            tagName: 'div',
            className: 'login-wrapper',
            children: [
                new Input({
                    className: 'login-input',
                    placeholder: 'Username...',
                    events: {
                        keyup: (e)=>{
                            user.userName = e.target.value
                        }
                    }
                }),

                new Input({
                    className: 'pass-input',
                    placeholder: 'Password...',
                    events: {
                        keyup: (e)=>{
                            user.password = e.target.value
                        }
                    }
                }),
                
                new Button({
                    classname:'login-btn',
                    textContent: 'Log In',
                    events: {
                        click: (e)=>{
                            e.preventDefault();

                            if(user['password'] === data.registrData['password'] && user['userName'] === data.registrData['userName']){
                                render(app, new ProfileWindow(user))
                            }
                        }
                    }
                })
            ]
        })  

        return login;
    }
}
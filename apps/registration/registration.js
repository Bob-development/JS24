import { AdvancedComponent, Component } from "../../core/Component";
import { render } from "../../core/render";
import { Button } from "../../components/button/Button";
import { Input } from "../../components/input/Input";
import { Form } from "../../components/form/Form";

import './registration.css'

export class RegistrWindow{
    constructor(){
        const newUser = {};

        const registr = new AdvancedComponent({
            tagName: 'div',
            className: 'registr-wrapper',
            children: [
                new Input({
                    className: 'registr-input',
                    placeholder: 'Username...',
                    events: {
                        keyup: (e)=>{
                            newUser.userName = e.target.value
                        }
                    }
                }),

                new Input({
                    className: 'pass-input',
                    placeholder: 'Password...',
                    events: {
                        keyup: (e)=>{
                            newUser.password = e.target.value
                        }
                    }
                }),

                new Button({
                    classname:'registr-btn',
                    textContent: 'Registr',
                    events: {
                        click: ()=>{
                            render(app, new Form({
                                registrData: newUser
                            }))
                        }
                    }
                })
            ]
        })  

        return registr;
    }
}
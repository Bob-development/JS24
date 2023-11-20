import { AdvancedComponent, Component } from "../../core/Component";
import { render } from "../../core/render";
import { Button } from "../../components/button/Button";
import { Input } from "../../components/input/Input";
import { Form } from "../../components/form/Form";
import { imgData } from "../../utils/imgAvatarData";

import './profile.css'
import { app } from "../../main";

export class ProfileWindow{
    constructor(userData, imgSrc){
        console.log(imgSrc);
        const profile = new AdvancedComponent({
            tagName: 'div',
            className: 'profile-wrapper',
            children: [
                new AdvancedComponent({
                    tagName: 'img',
                    className: 'user-img',
                    src: imgSrc? imgSrc : '../../public/default-avatar.jpg'
                }),

                new AdvancedComponent({
                    tagName: 'div',
                    className: 'userName',
                    textContent: `Name:  ${userData.userName}`
                }),

                new AdvancedComponent({
                    tagName: 'div',
                    className: 'userPassword',
                    textContent: `Password:  ${userData.password}`
                }), 

                new Button({
                    className: 'change-btn',
                    textContent: 'Change DATA',
                    events: {
                        click: (e)=>{
                            e.preventDefault();
                            this.toChangeData(userData);
                        }
                    }
                })
            ]
        })

        console.log(userData);

        return profile;

    
    }

    toChangeData(userData){
        let i = 0;
        let imgSrc;

        const changingData = new AdvancedComponent({
            tagName: 'div',
            className: 'login-wrapper',
            children: [
                new AdvancedComponent({
                    tagName: 'img',
                    className: 'new-img',
                    src: '../../public/default-avatar.jpg',
                    events: {
                        click: (e)=>{
                            if(i > 2) i = 0;

                            e.target.src = imgData[i].src;
                            imgSrc = imgData[i].src;
                            i++;
                        }
                    }
                }),

                new Input({
                    className: 'login-input',
                    placeholder: 'Enter new username',
                    events: {
                        keyup: (e)=>{
                            userData.userName = e.target.value
                        }
                    }
                }),

                new Input({
                    className: 'pass-input',
                    placeholder: 'Enter new password',
                    events: {
                        keyup: (e)=>{
                            userData.password = e.target.value
                        }
                    }
                }),
                
                new Button({
                    classname:'login-btn',
                    textContent: 'Change',
                    events: {
                        click: (e)=>{
                            e.preventDefault();
                            render(app, new ProfileWindow(userData, imgSrc))
                        }
                    }
                })
            ]
        })  

        return render(app, changingData);
    }
}
import './style.css'
import { Component, AdvancedComponent } from './core/Component'
import { Form } from './components/form/Form'
import { append } from './utils';
import { ProfileWindow } from './apps/profile/profile';


export const app = document.querySelector('#app');

const form = new Form({});
append(app, form);
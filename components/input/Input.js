import { AdvancedComponent } from "../../core/Component";
import './Input.css'

export class Input extends AdvancedComponent{
    constructor({
        className,
        children,
        placeholder,
        events
    }){
        super({
            tagName: 'input',
            className,
            children,
            placeholder,
            events
        })

        return this;
    }
}
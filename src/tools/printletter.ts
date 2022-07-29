import { ValidationProps } from "./interface/Interface.js";
export class checkValidation{
    text: string;
    size: number;
    direction: string;
   
    constructor(inputs: ValidationProps){
        this.text = inputs.text;
        this.size = inputs.size;
        this.direction = inputs.direction;
       
    }
     setError(){

     }

    checkInputs(){
        if(!this.text){

        }
    }

}

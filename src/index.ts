window.addEventListener("DOMContentLoaded", function(){
    console.log("Loaded")
});

import { validtation }from "./tools/validation.js";
import { ErrorObjects } from "./tools/interface/Interface.js";
import { Print } from "./tools/PrintXYZ.js";
import { setDirection } from "./tools/direction/directions.js";
// inputs elements 
const textElement = document.querySelector("#text") as HTMLInputElement;
const sizeElement  = document.querySelector("#size") as HTMLInputElement;
const directionElement  = document.querySelector("#direction") as HTMLInputElement;
// error small elements
const errorText = document.getElementById("error-text") as HTMLElement;
const errorSize = document.getElementById("error-size") as HTMLElement;
const errorDirection = document.getElementById("error-direction") as HTMLElement;
// form
const form = document.querySelector(".machine-form")as HTMLFormElement;
// clear button
const clearButton = document.querySelector(".remove-button") as HTMLElement;
//  output container
const outputs = document.querySelector(".output-container") as HTMLElement;
form.addEventListener("submit", function(e: Event){
    e.preventDefault();
    // get their actual types
    const text:string = textElement.value.trim().toUpperCase();
    const size:number = parseInt(sizeElement.value);
    const direction:string = directionElement.value.trim().toUpperCase();

    const errorElements: ErrorObjects = {
        errorText: errorText,
        errorSize: errorSize,
        errorDirection: errorDirection
    }
//   const checkedInputs: InputsChecked = {
//     text: inputsObject.text
//   }
    
   const validated: boolean =  validtation(text, size, direction, errorElements);
  if(!validated){
    const flexFlow = setDirection(direction);
    const setTextArray: string[] = text.split("");
    outputs.style.flexDirection = `${flexFlow}`;
 
    const printed = new Print(setTextArray, size, direction, outputs);
    printed.createLetters();
    textElement.value = "";
    sizeElement.value = "";
    directionElement.value = "";

  }
});
    clearButton.addEventListener("click", function(){
        console.log("clear");
        textElement.value = "";
        sizeElement.value = "";
        directionElement.value = "";
        outputs.innerHTML = "";
    });


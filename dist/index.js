window.addEventListener("DOMContentLoaded", function () {
    console.log("Loaded");
});
import { validtation } from "./tools/validation.js";
import { Print } from "./tools/PrintXYZ.js";
import { setDirection } from "./tools/direction/directions.js";
const textElement = document.querySelector("#text");
const sizeElement = document.querySelector("#size");
const directionElement = document.querySelector("#direction");
const errorText = document.getElementById("error-text");
const errorSize = document.getElementById("error-size");
const errorDirection = document.getElementById("error-direction");
const form = document.querySelector(".machine-form");
const clearButton = document.querySelector(".remove-button");
const outputs = document.querySelector(".output-container");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    const text = textElement.value.trim().toUpperCase();
    const size = parseInt(sizeElement.value);
    const direction = directionElement.value.trim().toUpperCase();
    const errorElements = {
        errorText: errorText,
        errorSize: errorSize,
        errorDirection: errorDirection
    };
    const validated = validtation(text, size, direction, errorElements);
    if (!validated) {
        const flexFlow = setDirection(direction);
        const setTextArray = text.split("");
        outputs.style.flexDirection = `${flexFlow}`;
        const printed = new Print(setTextArray, size, direction, outputs);
        printed.createLetters();
        textElement.value = "";
        sizeElement.value = "";
        directionElement.value = "";
    }
});
clearButton.addEventListener("click", function () {
    console.log("clear");
    textElement.value = "";
    sizeElement.value = "";
    directionElement.value = "";
    outputs.innerHTML = "";
});

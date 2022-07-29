 export interface ValidationProps {
    text: string;
    size: number;
    direction: string;
}

export interface IndexProps {
    textElement: string;
    sizeElement: number;
    directionElement: string;
}

export interface InputsObject{
    text: string;
    size: number;
    direction: string
}

export interface ErrorObjects{
    errorText: HTMLElement;
    errorSize:  HTMLElement;
    errorDirection:  HTMLElement;
}

export interface InputsChecked{
    text: string[];
    size: number;
    direction: string;
}
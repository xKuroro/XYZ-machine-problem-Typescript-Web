// import { directions } from "./direction/directions";

export class Print{
    text: string[];
    size: number;
    direction: string;
    outputsElement: HTMLElement;
    constructor(texts: string[], sizes: number, directions: string, outputsElement: HTMLElement){
        this.text = texts;
        this.size = sizes;
        this.direction = directions;
        this.outputsElement = outputsElement;

    }
//   method to create letters
    createLetters(){

        const ParentArray: string[][] = []
        this.text.forEach(letters => {
            // create box elememt 
            const pixels: number = 39;

            const boxElement = document.createElement("div");
            boxElement.classList.add("box");
            // set height and width to box element
            boxElement.style.width = `${pixels * this.size}px`;
            boxElement.style.height = `${pixels * this.size}px`;
          
            
       
        let printString:string = "";
        const childArray: string[] = [];
        switch(letters){
            // Create X like characters
           case("X"):
        //    row
            
            for(let i = 0; i < this.size; i += 1){
                // column
                for(let j = 0; j < this.size; j += 1){
                    // create an element small box
                    const smallBox = document.createElement("div");
                    // set size of small box
                    smallBox.style.width = "24px";
                    smallBox.style.height = "24px";
                    // small box attributes
                    smallBox.style.position = "absolute";
                    smallBox.style.textAlign = "center";
                    // smallBox.style.margin = "10px";
                    smallBox.style.top = `${i * pixels}px`;
                    smallBox.style.left = `${j * pixels}px`;
                
                    if(i === j || i + j === this.size - 1){
                        // printString = printString.concat("O");
                        smallBox.innerHTML = "O";
                        boxElement.appendChild(smallBox);
                    }else{
                        // printString = printString.concat(" ");
                        smallBox.innerHTML = " ";
                        boxElement.appendChild(smallBox);
                    }
                }
                childArray[i] = printString;
            }
            ParentArray.push(childArray);
            this.outputsElement.append(boxElement);
           break;
            // create Y like characters
           case("Y"):
             //    row
             let counter: number = 0;
             for(let i = 0; i < this.size; i += 1){
                // column
                for(let j = 0; j < this.size; j += 1){
                        // create an element small box
                        const smallBox = document.createElement("div");
                        // set size of small box
                        smallBox.style.width = "24px";
                        smallBox.style.height = "24px";
                        // small box attributes
                        smallBox.style.position = "absolute";
                        smallBox.style.textAlign = "center";
                        smallBox.style.top = `${i * pixels}px`;
                        smallBox.style.left = `${j * pixels}px`;
                    // conditions
                    if(j === counter || (i + j === this.size - 1 && i < Math.floor(this.size / 2)) ){
                        // printString = printString.concat("O");
                        smallBox.innerHTML = "O";
                        boxElement.appendChild(smallBox);
                    }else{
                        // printString = printString.concat(" ");
                        smallBox.innerHTML = " ";
                        boxElement.appendChild(smallBox);
                    }
                }
                // counter only increments to half of i
                childArray[i] = printString;
                if(i < Math.floor(this.size / 2)){
                    counter++;
                }
            }
            ParentArray.push(childArray);
            this.outputsElement.append(boxElement);
           break;
            // create Z like characters
           case("Z"):
                // row
                for(let i = 0; i < this.size; i += 1){
                    // column
                    for(let j = 0; j < this.size; j += 1){
                     // create an element small box
                    const smallBox = document.createElement("div");
                    // set size of small box
                    smallBox.style.width = "24px";
                    smallBox.style.height = "24px";
                    // small box attributes
                    smallBox.style.position = "absolute";
                    smallBox.style.textAlign = "center";
                    smallBox.style.top = `${i * pixels}px`;
                    smallBox.style.left = `${j * pixels}px`;
                        // conditions for Z
                        if(i === 0 || i === this.size - 1 || i + j === this.size - 1){
                            // printString = printString.concat("O");
                            smallBox.innerHTML = "O";
                            boxElement.appendChild(smallBox);
                        }else{
                            // printString = printString.concat(" ");
                            smallBox.innerHTML = " ";
                            boxElement.appendChild(smallBox);
                        }
                    }
                    childArray[i] = printString;
                }
                ParentArray.push(childArray);
                this.outputsElement.append(boxElement);
           break;

           default:
        }
    });
    // const flow = directions(ParentArray, this.direction, this.size);
    return this.outputsElement ;
    }

}
export class Print {
    constructor(texts, sizes, directions, outputsElement) {
        this.text = texts;
        this.size = sizes;
        this.direction = directions;
        this.outputsElement = outputsElement;
    }
    createLetters() {
        const ParentArray = [];
        this.text.forEach(letters => {
            const pixels = 39;
            const boxElement = document.createElement("div");
            boxElement.classList.add("box");
            boxElement.style.width = `${pixels * this.size}px`;
            boxElement.style.height = `${pixels * this.size}px`;
            let printString = "";
            const childArray = [];
            switch (letters) {
                case ("X"):
                    for (let i = 0; i < this.size; i += 1) {
                        for (let j = 0; j < this.size; j += 1) {
                            const smallBox = document.createElement("div");
                            smallBox.style.width = "24px";
                            smallBox.style.height = "24px";
                            smallBox.style.position = "absolute";
                            smallBox.style.textAlign = "center";
                            smallBox.style.top = `${i * pixels}px`;
                            smallBox.style.left = `${j * pixels}px`;
                            if (i === j || i + j === this.size - 1) {
                                smallBox.innerHTML = "O";
                                boxElement.appendChild(smallBox);
                            }
                            else {
                                smallBox.innerHTML = " ";
                                boxElement.appendChild(smallBox);
                            }
                        }
                        childArray[i] = printString;
                    }
                    ParentArray.push(childArray);
                    this.outputsElement.append(boxElement);
                    break;
                case ("Y"):
                    let counter = 0;
                    for (let i = 0; i < this.size; i += 1) {
                        for (let j = 0; j < this.size; j += 1) {
                            const smallBox = document.createElement("div");
                            smallBox.style.width = "24px";
                            smallBox.style.height = "24px";
                            smallBox.style.position = "absolute";
                            smallBox.style.textAlign = "center";
                            smallBox.style.top = `${i * pixels}px`;
                            smallBox.style.left = `${j * pixels}px`;
                            if (j === counter || (i + j === this.size - 1 && i < Math.floor(this.size / 2))) {
                                smallBox.innerHTML = "O";
                                boxElement.appendChild(smallBox);
                            }
                            else {
                                smallBox.innerHTML = " ";
                                boxElement.appendChild(smallBox);
                            }
                        }
                        childArray[i] = printString;
                        if (i < Math.floor(this.size / 2)) {
                            counter++;
                        }
                    }
                    ParentArray.push(childArray);
                    this.outputsElement.append(boxElement);
                    break;
                case ("Z"):
                    for (let i = 0; i < this.size; i += 1) {
                        for (let j = 0; j < this.size; j += 1) {
                            const smallBox = document.createElement("div");
                            smallBox.style.width = "24px";
                            smallBox.style.height = "24px";
                            smallBox.style.position = "absolute";
                            smallBox.style.textAlign = "center";
                            smallBox.style.top = `${i * pixels}px`;
                            smallBox.style.left = `${j * pixels}px`;
                            if (i === 0 || i === this.size - 1 || i + j === this.size - 1) {
                                smallBox.innerHTML = "O";
                                boxElement.appendChild(smallBox);
                            }
                            else {
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
        return this.outputsElement;
    }
}

export const setDirection = (dir) => {
    let directions = "";
    if (dir === "HORIZONTAL") {
        directions = "row";
    }
    else {
        directions = "column";
    }
    return directions;
};

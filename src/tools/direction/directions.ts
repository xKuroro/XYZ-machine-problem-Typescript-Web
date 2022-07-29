// export const directions = (arrays: string[][], direction: string, size: number) => {
//     let stringDirections = "";
//     switch(direction){
//         // direction for X axis
//         case("HORIZONTAL"):
//         for(let i = 0; i < size; i += 1){
//             for(let j = 0; j < arrays.length; j += 1){
//                 stringDirections = stringDirections.concat(arrays[j][i] + "   ");
//             }
//             stringDirections = stringDirections.concat("\n");
//         }
//         break;
//         // directions for Y axis
//          case("VERTICAL"):
//             for(let i = 0; i < arrays.length; i += 1){
//                 for(let j = 0; j < size ; j += 1){
//                     stringDirections = stringDirections.concat(arrays[i][j] + "\n");
//                 }
//             }
//          break;

//          default:
//     }
//     return stringDirections;
// }

export const setDirection = (dir: string) => {
    let directions:string = "";
    if(dir === "HORIZONTAL"){
        directions = "row";
    }else{
        directions = "column";
    }
    return directions;
}
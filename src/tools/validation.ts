import { setChecked } from "./props/clearprops.js";
import { setError } from "./props/Errorprops.js";
import { ErrorObjects} from "./interface/Interface.js";
import { textXYZ } from "./Regex/Regex.js";
export const validtation = (texts:string, sizes:number, directions:string, errors: ErrorObjects) => {
    const text = texts;
    const size = sizes;
    const direction = directions;
    let error:boolean = false;
    const fixedDirection: string[] = ["HORIZONTAL", "VERTICAL"];
    // check text
    if(!text.length){
        error = true;
        console.log("enter text")
        setError(errors.errorText,"Input fields must be filled!!")
    }else if(!textXYZ(text)){
        error = true;
        setError(errors.errorText, "Text must only contains X Y and Z");
    }else{
        error;
        setChecked(errors.errorText)
    }
    // check size
    if(typeof size === "string" || ~~size === 0 || (size % 2) === 0 || size > 17){
        error = true;
       setError(errors.errorSize, "Enter an Odd number above 2 and less than 17")
     }else{
        error;
        setChecked(errors.errorSize)
     }
    //  check direction
     if(direction && !fixedDirection.includes(direction)){
        error = true;
        setError( errors.errorDirection,"Direction must be vertical or horizontal!!")
     }else if(!direction.length){
        error = true;
        setError(errors.errorDirection,"Needed some direction!!")
     }else{
        error;
        setChecked(errors.errorDirection)
     }

     return error

}

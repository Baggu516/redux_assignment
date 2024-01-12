import { NAME,EMAIL } from "./userTypes";

export const nameFunc=(value="")=>{
    return {
        type:NAME,
        value:value
    }
}
export const emailFunc=(value="")=>{
    return {
        type:EMAIL,
        value:value
    }
}
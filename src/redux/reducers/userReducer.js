import { NAME,EMAIL } from "../actions/userTypes";

const initialState={
    name:"",
    email:""
}
export const userReducer=(state=initialState,action)=>{
    {console.log(action)}
    switch(action.type){
       
        case NAME: {
            // let t=state.name+action.value
            // ...state,[state.name]:state.name+action.value
            return {...state,"name":action.value}
        }
        case EMAIL: {
            // let t=state.email+action.value
            // ...state,[state.name]:state.name+action.value
            return {...state,"email":action.value}
        }
        default : return state
    }

}
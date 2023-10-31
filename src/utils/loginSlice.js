import { createSlice } from "@reduxjs/toolkit";
const loginSlice=createSlice({
    name:"login",
    initialState:{
        detail:{name:"User",add:"Jagatpura, Jaipur",email:"dd",status:false}
    },
    reducers:{
        addDetails:(state,action)=>{

            state.detail=action.payload
            
        },
        changeStatus:(state,action)=>{
            
            state.detail.status=action.payload
            console.log(`loginslice.js:${state.detail.status}`);
        }
    }
    
})
export default loginSlice.reducer;
export const {addDetails,changeStatus}=loginSlice.actions;
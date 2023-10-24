import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:"cart",
    initialState:{
        items:[]
    },
    reducers:{
        addItem:(state,action)=>{
            state.items.push(action.payload);

        },
        removeItem:(state,action)=>{
            
           const filterdata= state.items.filter((element)=>element?.card?.info?.name!==action.payload?.card?.info?.name)
           state.items=filterdata
        }
    }
})

export default cartSlice.reducer;
export const {addItem,removeItem}=cartSlice.actions;
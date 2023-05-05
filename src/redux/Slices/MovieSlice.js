import { createSlice } from "@reduxjs/toolkit";


export const MovieSlice=createSlice({
    name:'movie',
    initialState:{},
    reducers:{
        add:(state,action)=>{
            // state.push(action.payload)
            Object.assign(state,action.payload);
        },
        remove:(state,action)=>{
            return state.filter((item)=> item.id!== action.payload)
        }

    }
});

export const{add,remove}=MovieSlice.actions;
export default  MovieSlice.reducer;

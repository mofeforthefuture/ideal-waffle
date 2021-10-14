import { createSlice } from "@reduxjs/toolkit";


const initialState = {isModalOpen: false}
 export const loaderSlice = createSlice({
    name: 'loader',
    initialState: {value: initialState},
    reducers:{
        load: (state,action) => {
            state.value = action.payload
        },  
    }
})

export const {load} = loaderSlice.actions

export default loaderSlice.reducer 
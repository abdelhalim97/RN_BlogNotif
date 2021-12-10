import { createSlice } from '@reduxjs/toolkit';
const initialState={
    value:null,
};
export const counterSlices =createSlice({
    name:'counter',
    initialState,
    reducers:{
        setUserRedux:(state,action)=>{
            state.value=action.payload;
        },
    },
});
export const {setUserRedux}=counterSlices.actions;//generate action creators
// export const selectOrigin = (state)=>state.nav.origin;
export default counterSlices.reducer;//export reducers
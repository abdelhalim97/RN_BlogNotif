import { createSlice } from '@reduxjs/toolkit';
const initialState={
    value:[],
};
export const counterSlicesPosts =createSlice({
    name:'counterTag',
    initialState,
    reducers:{
        setTagsRedux:(state,action)=>{
            state.value=action.payload;
        },
    },
});
export const {setTagsRedux}=counterSlicesPosts.actions;
// export const selectOrigin = (state)=>state.nav.origin;
export default counterSlicesPosts.reducer;//export reducers
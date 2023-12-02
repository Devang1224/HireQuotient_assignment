import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    search:"",
    filteredData:[]
}

export const filterSlice = createSlice({
    name:"filters",
    initialState,
    reducers:{
     searchFilter:(state,action)=>{
        const searchText = action.payload.value;
        state.search = searchText;
     },
     setFilteredData: (state, action) => {
        state.filteredData = action.payload;
      },
   }
})

export const { 
    searchFilter,
    setFilteredData
}  = filterSlice.actions

export default filterSlice.reducer
import { createSlice, isActionCreator } from "@reduxjs/toolkit";

const initialState={
    data:[],
    dataIsFetching:false,
    error:false,
    pageNumber:1,
    checkedData:[],
    checkedPages:[],
}

export const dataSlice = createSlice({
    name:"dummyData",
    initialState,
    reducers:{
        dataIsFetching:(state,action)=>{  
            state.dataIsFetching = action.payload;
        },
        dataFetched:(state,action)=>{
           state.dataIsFetching=false;
           state.data = action.payload;
           state.error=false;
        },
        dataFetchingError:(state)=>{
            state.error=true;
            state.dataIsFetching=false;
        },
        changePageNumber:(state,action)=>{
            state.pageNumber = action.payload
        },
        updateData:(state,action)=>{
          const userId = action.payload.id;
          const userInfo = action.payload.userInfo;
          const updatedData = state.data.map((item)=>{
            if(item.id===userId)
            {
                return {...item,
                        name:userInfo.name,
                        email:userInfo.email,
                        role:userInfo.role,
                       }
            }
          return item;
          })
          state.data=updatedData;
        },
        selectedData:(state,action)=>{
            const userId = action.payload.id;
            const checkedState = action.payload.checkedState;
            if(checkedState )
            {  
                if(!state.checkedData.includes(userId)){
                    state.checkedData.push(userId)
                }
            }
            else{
                state.checkedData = state.checkedData.filter((id) => id !== userId);
            }
        },
        selectAllPages:(state,action)=>{
           const pageData = action.payload.pageData;
           const pageNo = action.payload.pageNumber;
           pageData.forEach((item)=>{
            if(!state.checkedData.includes(item)){
                state.checkedData.push(item.id);
            }
           })
           state.checkedPages.push(pageNo);
        },
        removePages:(state,action)=>{ 
            const pageNo = action.payload.pageNumber;
            const pageData = action.payload.pageData
            const pageDataIds = pageData.map((item) => item.id);

            state.checkedPages = state.checkedPages.filter((Num) => Num !== pageNo);
            state.checkedData = state.checkedData.filter((id) => !pageDataIds.includes(id));
        }
    
    }
})

export const { dataIsFetching, 
               dataFetched,
               dataFetchingError,
               changePageNumber,
               updateData,
               selectedData,
               selectAllPages,
               removePages
            } = dataSlice.actions  
export default dataSlice.reducer;
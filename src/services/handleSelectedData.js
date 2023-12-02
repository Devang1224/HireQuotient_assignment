import { removePages, selectAllPages } from "../reducers/dataReducer"

export const selectAll = (dispatch,checkedState,pageNumber,pageData,checkedPages)=>{

if(checkedState)
{
    if(!checkedPages.includes(pageNumber))
    { 
       dispatch(selectAllPages({pageData,pageNumber}))
    }
}
else{
    dispatch(removePages({pageData,pageNumber}))
}


}
import { changePageNumber } from "../reducers/dataReducer";
import { setFilteredData } from "../reducers/filterReducer";

export const filterData = (dispatch,searchText,data)=>
{
  
   if(!searchText){
    dispatch(setFilteredData(data));
   }
else{
  const filteredData = data.filter((item) => {
    const isMatch =
      (item.id===searchText) ||
      item.name.toLowerCase().includes(searchText.toLowerCase()) ||
      item.email.toLowerCase().includes(searchText.toLowerCase()) ||
      item.role.toLowerCase().includes(searchText.toLowerCase());
    return isMatch;
  });
  dispatch(setFilteredData(filteredData));
  dispatch(changePageNumber(1));
}
  


}
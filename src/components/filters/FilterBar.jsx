import React, { useState } from 'react'
import "./filters.css"
import { IoMdSearch } from "react-icons/io";
import { useDispatch } from 'react-redux'
import { searchFilter } from '../../reducers/filterReducer';

const FilterBar = () => {

const [searchText,setSearchText] = useState("")
const dispatch = useDispatch()

const handleSearch = ()=>{
      dispatch(searchFilter({value:searchText}))
}
const handleKeyPress = (e) => {
  if (e.key === 'Enter') {
    handleSearch();
  }
};

  return (
    <div className='filter-bar'>
       <div className="search-container">
         <input type="text"
                placeholder='Search by id, name, email and role' 
                className='search-input' 
                onChange={(e)=>setSearchText(e.target.value)}
                onKeyPress={handleKeyPress}
                value ={searchText}
               />
         <div className='search-icon' onClick={handleSearch}>
            <IoMdSearch/>
         </div>
       </div>
    </div>
  )
}

export default FilterBar
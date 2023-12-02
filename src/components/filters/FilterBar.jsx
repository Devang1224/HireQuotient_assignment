import React from 'react'
import "./filters.css"
import { IoMdSearch } from "react-icons/io";

const FilterBar = () => {


  
  return (
    <div className='filter-bar'>
       <div className="search-container">
         <input type="text" placeholder='Search by Name, Email and Role' className='search-input' />
         <div className='search-icon' >
            <IoMdSearch/>
         </div>
       </div>
    </div>
  )
}

export default FilterBar
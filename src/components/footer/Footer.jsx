import React from 'react'
import "./footer.css"
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { changePageNumber, deleteSelected } from '../../reducers/dataReducer';

const Footer = () => {

  const res = useSelector((state)=>state.dataReducer)
  const filterDataLength = useSelector((state=>state.filterReducer.filteredData)).length
  const pageNumber = res.pageNumber;
  const dataLength = Math.ceil(filterDataLength/ 10);
  const checkedDataLength = res.checkedData.length;
  const dispatch = useDispatch();


  const handlePageChange = (page)=>{
   if(page>=1 && page<=dataLength){
      dispatch(changePageNumber(page));
      }
  }

  const handleDeleteSelected = ()=>{
     dispatch(deleteSelected());
  }

  return (
    <div className='footer-container'>
      <p>{`${res.checkedData.length} of 46 row(s) selected`}</p>
      {checkedDataLength > 0 && (
         <button className="delete-selected" onClick={handleDeleteSelected}>
           Delete Selected
         </button>
    )}
      <div className="pagination">
        <p>{`Page ${pageNumber} of ${dataLength}`}</p>
        <div className="pagination-items">
          <button className='first-page' onClick={()=>handlePageChange(1)}><MdKeyboardDoubleArrowLeft/></button>
          <button className='previous-page' onClick={()=>handlePageChange(pageNumber-1)}><MdOutlineKeyboardArrowLeft/></button>
          {Array.from({ length: dataLength }, (_, index) => (
            <button key={index} onClick={()=>handlePageChange(index+1)}>
              {index + 1}
            </button>
           ))
        }
          <button className='next-page'onClick={()=>handlePageChange(pageNumber+1)} ><MdOutlineKeyboardArrowRight/></button>
          <button className='last-page' onClick={()=>handlePageChange(dataLength)}><MdKeyboardDoubleArrowRight/></button>
        </div>
      </div>
    </div>
  )
}

export default Footer
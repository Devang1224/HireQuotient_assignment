import React from 'react'
import "./footer.css"
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { changePageNumber } from '../../reducers/dataReducer';

const Footer = () => {

  const res = useSelector((state)=>state.dataReducer)
  const pageNumber = res.pageNumber;
  const dataLength = Math.ceil(res.data.length / 10);
  const dispatch = useDispatch();


  const handlePageChange = (page)=>{
    
   if(page>=1 && page<=dataLength)
   {
      dispatch(changePageNumber(page));
   }

  }

  return (
    <div className='footer-container'>
      <p>{`${res.checkedData.length} of 46 row(s) selected`}</p>
      <button className='delete-selected'>
       Delete Selected
      </button>
      <div className="pagination">
        <p>Page 1 of 5</p>
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
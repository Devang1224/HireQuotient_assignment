import React, { useEffect, useRef, useState } from 'react'
import "./userlist.css"
import { useDispatch, useSelector } from 'react-redux'
import UserListItem from '../userListItem/UserListItem'
import { selectAll } from '../../services/handleSelectedData'

const UserList = () => {

const res = useSelector((state)=>state.dataReducer)
const dispatch = useDispatch();
const pageNumber = res.pageNumber;
const checkedData = res.checkedData;
const checkBoxRef = useRef();
const[isCheckedAll, setIsCheckedAll] = useState(false)

useEffect(()=>{
  const checkedState = checkBoxRef.current.checked;
  const pageData = res.data.slice(pageNumber*10-10,pageNumber*10);
  const checkedPages = res.checkedPages;
  selectAll(dispatch,checkedState,pageNumber,pageData,checkedPages);
},[isCheckedAll])


useEffect(()=>{
  const checkedPages = res.checkedPages;
  if(!checkedPages.includes(pageNumber) || checkedData.length<=0){
  checkBoxRef.current.checked = false;
  }
  else{
    checkBoxRef.current.checked = true;
  }
},[pageNumber,checkedData])

console.log("updated",res.checkedPages,res.checkedData);

  return (
    <div className='userlist-container'>
      <div className="userlist-title">
        <div className='checkbox-container'>
           <input type="checkbox" ref={checkBoxRef} onChange={()=>setIsCheckedAll(!isCheckedAll)}/>
        </div>
        <div className="titles">
          <p>Name</p>
          <p>Email</p>
          <p className='role'>Role</p>
          <p className='action'>Actions</p>
        </div>
          
      </div>
        <div className='userlistitem-container'>
            {
                res.dataIsFetching?(
                    <div className="loader">
                        <p>Loading</p>
                    </div>
                ): (
                   res.data.slice(pageNumber*10-10,pageNumber*10).map((item)=>{
                    return <UserListItem key={item.id} item={item} isCheckedAll={isCheckedAll}/>
                   })
                 )
            }
        </div>
    </div>
  )
}

export default UserList
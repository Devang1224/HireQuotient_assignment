import React, { useEffect, useRef, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import "./userlistitem.css"
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { ImCancelCircle } from "react-icons/im";
import { GiSaveArrow } from "react-icons/gi";
import { deleteItem, selectedData, updateData } from "../../reducers/dataReducer";


const UserListItem = ({item,isCheckedAll}) => {

const checkedData = useSelector((state)=>state.dataReducer.checkedData)
const[isChecked,setIsChecked] = useState(false)
const[isEditOpen,setIsEditOpen] = useState(false)
const dispatch = useDispatch()
const[userInfo,setUserInfo] = useState({
  name:"",
  email:"",
  role:"",
})
const checkBox = useRef();
const nameRef = useRef();



useEffect(() => {
  if (isEditOpen) {
    setUserInfo({
      name: item.name,
      email: item.email,
      role: item.role,
    });
    nameRef.current.focus();
  }
}, [isEditOpen, item]);

useEffect(()=>{
 
  if(checkedData.includes(item.id)){
    checkBox.current.checked = true;
    setIsChecked(true)
  }
  else{
    checkBox.current.checked=false;
    setIsChecked(false)
  }
 


},[checkedData])

const handleInfoChange = (e)=>{
  const value = e.target.value;
  const property = e.target.id;
  setUserInfo({...userInfo,[property]:value})
}


const handleEditSave = ()=>{
   dispatch(updateData({id:item.id,userInfo}));
   setIsEditOpen(false)
}

const handleCheckBoxChange = ()=>{
  setIsChecked(!isChecked);
  const state = !isChecked;
    dispatch(selectedData({checkedState:state,id:item.id}))
    console.log("change");
}

const handleDeleteItem = ()=>{
  dispatch(deleteItem({id:item.id}))
}


  return (
    <div className={`userlistitem ${isChecked&&"checkedList"}`}>
      <div className="checkbox-container">
        <input type="checkbox" className='checkbox' onChange={handleCheckBoxChange} ref={checkBox} 
        />
      </div>
      <div className="userInfo-container">
         <div className="userInfo">
          {isEditOpen?(
              <input type="text" 
                      ref={nameRef} 
                      id="name" 
                      onChange={handleInfoChange} 
                      value={userInfo.name}
                      />
            ):(<span>{item.name}{item.id}</span>)}
          </div>
         <div className="userInfo">
          {isEditOpen?(
              <input type="text" 
                     id="email" 
                     onChange={handleInfoChange} 
                     value={userInfo.email}
                     />
            ):(<span>{item.email}</span>)}
          </div>
         <div className="role userInfo">
         {isEditOpen?(
              <input type="text" 
                     id="role"
                     onChange={handleInfoChange}
                     value={userInfo.role}
                     />
            ):(<span className={`role-item ${item.role==="admin"&&"admin"}`}>{item.role}</span>)}
         </div>
         <div className="action-container">
          {
            isEditOpen?(
              <button className="save" title="Save" disabled={isChecked}  onClick={handleEditSave}> 
                    <GiSaveArrow/>
               </button>
            ):(
              <button className="edit" title="Edit" disabled={isChecked}  onClick={()=>setIsEditOpen(true)}> 
                   <FaRegEdit/>
              </button>
            )
          }
           
            <button className="delete" title="Delete" disabled={isChecked} onClick={handleDeleteItem}>
              <MdDeleteOutline />
            </button>
            {
              isEditOpen && <button className="cancel" title="Cancel" onClick={()=>setIsEditOpen(false)}>
               <ImCancelCircle />
              </button>
             }
         </div>
      </div>
      
    </div>
  );


};


export default UserListItem;

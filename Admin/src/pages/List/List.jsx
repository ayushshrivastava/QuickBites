import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import {toast} from 'react-toastify'

const List = ({url}) => {
  

  const [list , setList] = useState([]);

  const fetchList = async()=>{
    const response = await axios.get(`${url}/api/food/list`)
    if(response.data.success){
      setList(response.data.data);
    }
    else {
      toast.error("Error")
    }
  }

  const removeFood = async(foodId)=>{
    const response = await axios.post(`${url}/api/food/remove`,{id:foodId});
    await fetchList();
    if(response.data.success){
      toast.success(response.data.message)
    }
    else {
      toast.error("Error");
    }
  }

  useEffect(()=>{
    fetchList();
  },[])

  return (
    <div className='list add flex-col'>
      <p>All Foods List</p>
      <div className="list-table w-full">
        <div className="grid grid-cols-5 items-center gap-[10px] border border-[#cacaca] font-medium py-3 px-4 bg-[#f9f9f9] custom3:gap-4 custom3:grid-cols-3 custom3:hidden">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item, index)=>{
          return (
            <div key={index} className='grid grid-cols-5 items-center gap-[10px] border border-[#cacaca] font-medium py-3 px-4 custom3:gap-4 custom3:grid-cols-3'>
                <img className='w-1/5' src={`${url}/images/`+item.image} alt="" />
                <p>{item.name}</p>
                <p>{item.category}</p>
                <p>&#8377;{item.price}</p>
                <p onClick={()=>removeFood(item._id)} className='cursor-pointer'>X</p>
            </div>
          )

        })}
      </div>
        
    </div>
  )
}

export default List
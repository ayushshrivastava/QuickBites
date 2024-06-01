import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import {toast} from 'react-toastify'
import axios from "axios"
import {assets} from "../../assets/assets"

const Orders = ({url}) => {

  const [orders,setOrders] = useState([]);

  const fetchAllOrders = async()=>{
    const response = await axios.get(url+"/api/order/list");
    if(response.data.success){
      setOrders(response.data.data);
      console.log(response.data.data);
    }
    else {
      toast.error("Error")
    }
  }

  const statusHandler = async (event,orderId)=>{
    const response = await axios.post(url+"/api/order/status",{
      orderId,
      status:event.target.value
    })
    if(response.data.success){
      await fetchAllOrders()
    }
  }

  useEffect(()=>{
    fetchAllOrders();
  },[])

  return (
    <div className='order-add'>
      <h3>Order Page</h3>
      <div className="order-list text-sm">
        {orders.map((order,index)=>(
            <div key={index} className="grid grid-cols-5 items-start gap-7 border border-solid border-orange-500 p-5 font-outfit text-[#505050]">
                <img src={assets.parcel_icon} alt="" />
                <div>
                  <p className='font-outfit'>
                    {order.items.map((item,index)=>{
                            if(index === order.items.length-1){
                              return item.name + " x " + item.quantity
                            }
                            else {
                              return item.name + " x " + item.quantity + " , "
                            }
                    })}
                  </p>

                  <b className='font-outfit mt-1 mb-1'>{order.address.firstname + " " + order.address.lastname}</b>
                  <div className='mb-2'>
                  {/* <p>{order.address.street+","}</p> */}
                  {/* <p>{order.address.city+", " +order.address.state+", "+order.address.country+", "+order.address.zipcode} </p> */}
                  </div>
                  <p className='order-item-phone'>{order.address.phone}</p>
                </div>
                <p>Items : {order.items.length}</p>
                <p>&#8377;{order.amount}</p>
                <select onChange={(event)=>statusHandler(event,order._id)} value={order.status} className='bg-[#ffe8e4] border border-solid border-orange-500 p-2 outline-none' >
                  <option value="Food Processing">Food Processing</option>
                  <option value="Out For Delivery">Out For Delivery</option>
                  <option value="Delivered">Delivered</option>
                </select>
            </div>
        ))}
      </div>
        
    </div>
  )
}

export default Orders
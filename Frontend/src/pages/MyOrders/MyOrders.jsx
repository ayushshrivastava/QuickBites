import React, { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';
import { assets } from '../../assets/assets';

const MyOrders = () => {

    const {url,token} = useContext(StoreContext);
    const [data,setData] = useState([]);

    const fetchOrders = async () =>{
        const response = await axios.post(url+"/api/order/userorders",{},{headers:{token}});
        setData(response.data.data);
    }

    useEffect(()=>{
        if(token){
            fetchOrders();
        }
    },[token])

  return (
    <div className='m-10 mx-0 '>
        <h2>My Orders</h2>
        <div className="flex flex-col gap-[10px] mt-2 custom2:grid-cols-3 custom2:font-normal custom2:gap-y-1">
            {data.map((order,index)=>{
                return (
                    <div key={index} className='py-2.5 px-5 border grid grid-cols-6 items-center gap-7 font-outfit text-[#454545] border-solid border-orange-500'> 
                    <img className='w-[50px]' src={assets.parcel_icon} alt="" />
                    <p className='text-sm'>{order.items.map((item,index)=>{
                        if(index === order.items.length-1){
                            return item.name+"x"+item.quantity
                        }
                        else {
                            return item.name+"x"+item.quantity+", "
                        }
                        
                    })}</p>
                    <p>&#8377;{order.amount}.00</p>
                    <p>Items:{order.items.length}</p>
                    <p><span className='text-orange-500'>&#x25cf;</span><b className='font-outfit text-[#454545]'>{order.status}</b></p>
                    <button onClick={fetchOrders} className='border-none py-3 rounded hover:text-green-500 custom2:font-normal'>Track Order</button>

                    </div>
                )
            })}
        </div>


    </div>
  )
}

export default MyOrders
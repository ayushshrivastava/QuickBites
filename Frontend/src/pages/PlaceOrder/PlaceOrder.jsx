import React, { useContext, useState } from 'react'
import { StoreContext } from '../../context/StoreContext'
import axios from 'axios';

const PlaceOrder = () => {

  const {getTotalCartAmount,token,food_list,cartItems,url} = useContext(StoreContext)

  const [data,setData] =useState({
    firstname:"",
    lastname:"",
    email:"",
    street:"",
    city:"",
    state:"",
    zipcode:"",
    country:"",
    phone:""
  })

  const onchangeHandler =(event)=>{
    const name = event.target.name;
    const value = event.target.value;
    setData(data=>({...data,[name]:value}))
  }

  const placeOrder = async (event) =>{
    event.preventDefault();
    let orderItems = [];
    food_list.map((item)=>{
      if(cartItems[item._id]>0){
        let itemInfo = item ;
        itemInfo["quantity"] = cartItems[item._id];
        orderItems.push(itemInfo)
      }
    })
      let orderData = {
        address:data,
        items:orderItems,
        amount:getTotalCartAmount()+51,
      }
      let response = await axios.post(url+"/api/order/place",orderData,{headers:{token}});
      if(response.data.success){
        const {session_url} = response.data;
        window.location.replace(session_url);
      }
      else {
        alert("Error");
      }
  }
 

  return (
    <form  onSubmit={placeOrder} className='flex justify-between items-start gap-12  mt-20'>
        <div className="w-full  max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
          <p className='text-[30px] font-medium mb-[50px]'>Delivery Information</p>
          <div className='flex gap-[10px]'>
            <input required name='firstname' onChange={onchangeHandler} value={data.firstname} className='mb-15px w-full p-2 rounded outline-green-500 border border-gray-300' type="text" placeholder='First name' />
            <input required name='lastname' onChange={onchangeHandler} value={data.lastname} className='mb-15px w-full p-2 rounded outline-green-500 border border-gray-300' type="text" placeholder='Last name' />
          </div>
          <input name='email' onChange={onchangeHandler} value={data.email} className='mb-15px w-full p-2 rounded outline-green-500 border border-gray-300' type="email" placeholder='Email Address' />
          <input name='street' onChange={onchangeHandler} value={data.street} className='mb-15px w-full p-2 rounded outline-green-500 border border-gray-300' type="text" placeholder='Street' />
          <div className='flex gap-[10px]'>
            <input name='city' onChange={onchangeHandler} value={data.city} className='mb-15px w-full p-2 rounded outline-green-500 border border-gray-300' type="text" placeholder='City' />
            <input name='state' onChange={onchangeHandler} value={data.state} className='mb-15px w-full p-2 rounded outline-green-500 border border-gray-300' type="text" placeholder='State' />
          </div>
          <div className='flex gap-[10px]'>
            <input name='zipcode' onChange={onchangeHandler} value={data.zipcode} className='mb-15px w-full p-2 rounded outline-green-500 border border-gray-300' type="text" placeholder='Zip code' />
            <input name='country' onChange={onchangeHandler} value={data.country} className='mb-15px w-full p-2 rounded outline-green-500 border border-gray-300' type="text" placeholder='Country' />
          </div>
          <input required name='phone' onChange={onchangeHandler} value={data.phone} className='mb-15px w-full p-2 rounded outline-green-500 border border-gray-300' type="text" placeholder='Phone No.' />
        </div>
        <div className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
        <div className="flex flex-1 flex-col gap-[20px] ">
            <h2 className='text-[30px] font-medium mb-[50px]'>Cart Totals</h2>
            <div>
              <div className="flex justify-between text-[#555]">
                <p>Sub-Total</p>
                <p>&#8377;{getTotalCartAmount()}</p>
              </div>
              <hr className='mt-4 mb-0' />
              <div className="flex justify-between text-[#555]">
                <p>Delivery Fee</p>
                <p>&#8377;{getTotalCartAmount()===0?0:51}</p>
              </div>
              <hr className='mt-4 mb-0' />
              <div className="flex justify-between text-[#555]">
                <b>Total</b>
                <b>&#8377;{getTotalCartAmount()===0?0:getTotalCartAmount()+51}</b>
              </div>
              </div>
              <button type='submit' className='border-none text-white cursor-pointer rounded bg-green-700 py-3 w-2/5 mt-[30px]'>PROCEED TO PAYMENT</button>
          </div>
        </div>
    </form>
  )
}

export default PlaceOrder
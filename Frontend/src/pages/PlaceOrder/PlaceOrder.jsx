import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'

const PlaceOrder = () => {

  const {getTotalCartAmount} = useContext(StoreContext)

  return (
    <form className='flex justify-between items-start gap-12  mt-20'>
        <div className="w-full  max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
          <p className='text-[30px] font-medium mb-[50px]'>Delivery Information</p>
          <div className='flex gap-[10px]'>
            <input className='mb-15px w-full p-2 rounded outline-green-500 border border-gray-300' type="text" placeholder='First name' />
            <input className='mb-15px w-full p-2 rounded outline-green-500 border border-gray-300' type="text" placeholder='Last name' />
          </div>
          <input className='mb-15px w-full p-2 rounded outline-green-500 border border-gray-300' type="email" placeholder='Email Address' />
          <input className='mb-15px w-full p-2 rounded outline-green-500 border border-gray-300' type="text" placeholder='Street' />
          <div className='flex gap-[10px]'>
            <input className='mb-15px w-full p-2 rounded outline-green-500 border border-gray-300' type="text" placeholder='City' />
            <input className='mb-15px w-full p-2 rounded outline-green-500 border border-gray-300' type="text" placeholder='State' />
          </div>
          <div className='flex gap-[10px]'>
            <input className='mb-15px w-full p-2 rounded outline-green-500 border border-gray-300' type="text" placeholder='Zip code' />
            <input className='mb-15px w-full p-2 rounded outline-green-500 border border-gray-300' type="text" placeholder='Country' />
          </div>
          <input className='mb-15px w-full p-2 rounded outline-green-500 border border-gray-300' type="text" placeholder='Phone No.' />
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
              <button className='border-none text-white cursor-pointer rounded bg-green-700 py-3 w-2/5 mt-[30px]'>PROCEED TO PAYMENT</button>
          </div>
        </div>
    </form>
  )
}

export default PlaceOrder
import React, { useContext } from 'react'
import {StoreContext} from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom';
const Cart = () => {

  const{cartItems,food_list,removeFromCart,getTotalCartAmount,url} = useContext(StoreContext);


  const navigate = useNavigate();

  return (
    <div className='mt-24'>
      <div className='cart-items'>
        <div className="grid items-center grid-cols-6 text-gray-500 font-outfit font-medium">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item,index)=>{
            if(cartItems[item._id]>0)
              {
                return (
                  <div>
                  <div className="text-black mt-4 mb-0 grid grid-cols-6">
                    <img className='w-[50px] pb-3'src={url+"/images/"+item.image} alt="" />
                    <p>{item.name}</p>
                    <p>&#8377;{item.price}</p>
                    <p>{cartItems[item._id]}</p>
                    <p>&#8377;{item.price*cartItems[item._id]}</p>
                    <p onClick={()=>removeFromCart(item._id)} className='cursor-pointer'>x</p>
                  </div>
                  <hr className='h-[1px] border-none' />
                  </div>
                )
              }
        })}
      </div>
        <div className="mt-[80px] flex justify-between gap-5 sm:gap-8 custom3:flex-col-reverse">
          <div className="flex flex-1 flex-col gap-[20px] ">
            <h2>Cart Totals</h2>
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
              <button onClick={()=>navigate('/order')} className='border-none text-white cursor-pointer rounded bg-green-700 py-3 w-2/5'>PROCEED TO CHECKOUT</button>
          </div>
          <div className="flex-1 custom3:justify-start">
            <div >
              <p className='text-[#555]'>If you have a promocode , Enter it here</p>
              <div className='mt-3 flex justify-between items-center bg-[#eaeaea] rounded'>
                <input className='bg-transparent border-none outline-none pl-3' type="text" placeholder='promo code' />
                <button className='py-3 px-1 bg-black border-none text-white rounded w-1/5 h-11' >Submit</button>

              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Cart
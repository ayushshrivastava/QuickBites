import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'

const FoodItem = ({id , name , price , description , image }) => {

    const {cartItems,addToCart,removeFromCart,url} = useContext(StoreContext);

  return (
    <div className='w-full mx-auto rounded-[15px]  shadow-2xl cursor-pointer hover:scale-105'>
        <div className='relative'>
            <img className="w-full rounded-tl-2xl rounded-tr-2xl" src={url+"/images/"+image} alt="" />
            {
               !cartItems[id]
               ?<img className='absolute w-[35px] bottom-[15px] right-[15px] cursor-pointer rounded-full' onClick={()=>addToCart(id)} src={assets.add_icon_white} />
               : <div className='absolute bottom-[15px] right-[15px] flex items-center gap-[10px] p-[6px] rounded-[50px] bg-white'>
                <img className='hover:cursor-pointer w-[30px]' onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                <p>{cartItems[id]}</p>
                <img className='hover:cursor-pointer w-[30px]' onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
                 </div>
            }
        </div>

        <div className='p-3 '>
            <div className='flex justify-between items-center mb-2.5 '>
                <p className='text-[20px] font-outfit'>{name}</p>
                <img className='w-[70px]' src= {assets.rating_starts} alt="" />
            </div>
            <p className='text-[#676767] font-outfit'> {description}</p>
            <p className='text-green-600 text-[22px] font-medium my-2.5 '>&#8377;{price}</p>
        </div>
    </div>
  )
}

export default FoodItem
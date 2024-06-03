import React from 'react'
import {assets} from '../../assets/assets'
const Navbar = () => {
  return (
    <>
    <div className='flex justify-between items-center'>
        <img className='w-28 ml-5' src={assets.quickbites} alt="" />
        <p className='font-outfit font-extrabold text-green-600 underline'>Admin Panel</p>
        <img className='w-13 mr-5' src={assets.profile_image} alt="" />
        
    </div>
    
    </>
    
  )
}

export default Navbar
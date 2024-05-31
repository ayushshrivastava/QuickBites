import React, { useContext, useState } from 'react'
import {Link} from 'react-router-dom'
import {assets} from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({setShowLogin}) => {

    const [menu , setMenu] =useState("Home"); 

    const {getTotalCartAmount} = useContext(StoreContext)

  return (
    <div className='py-5 justify-between flex items-center '>
        <Link to='/'><img src={assets.QuickBites} alt="" className="w-36 cursor-pointer custom:w-36 custom2:w-[120px]" /></Link>
        <ul className='flex list-none gap-5 text-[#49557e] text-lg font-outfit cursor-pointer custom:gap-5 custom:text-[17px] custom2:gap-[15px] custom2:text-[16px] custom3:hidden'>
            <Link to='/' onClick={()=>setMenu("Home")}  className={menu==="Home " ?"active pb-0.5 border-b-2 border-b-[#49557e] ":""}>Home</Link>
            <a href='#explore-menu' onClick={()=>setMenu("Menu")} className={menu==="Menu" ?"active pb-0.5 border-b-2 border-b-[#49557e]":""}>Menu</a>
            <a href='#app-download' onClick={()=>setMenu("Mobile-App")} className={menu==="Mobile-App" ?"active pb-0.5 border-b-2 border-b-[#49557e]":""}>Mobile-App</a>
            <a href='#footer' onClick={()=>setMenu("Contact-Us")} className={menu==="Contact-Us" ?"active pb-0.5 border-b-2 border-b-[#49557e]":""}>Contact Us</a>
        </ul>
        <div className='flex gap-10 items-center custom:gap-8 custom2:gap-[20px] '>
            <img src={assets.search_icon} alt="" className='custom:w-6 custom2:w-[20px]'/>
            <div className='relative'>
               <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link> 
            
               <div className={` ${getTotalCartAmount() === 0 ? '' : 'absolute min-w-[10px] min-h-[10px] bg-orange-500 rounded-[5px] -top-2 -right-2'}`}>
                
               </div>
               
            </div>
            <button className='font-outfit text-[#49557e] bg-transparent text-base border border-orange-500 py-2 px-7 rounded-full cursor-pointer hover:bg-orange-300 duration-300 custom:px-6 custom:py-2 custom2:px-[20px] custom2:py-[7px] custom2:text-[15px]' onClick={()=>setShowLogin(true)}>Sign in</button>

        </div>
    </div>
  )
}

export default Navbar
import React, { useContext, useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {assets} from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({setShowLogin}) => {

    const [menu , setMenu] =useState("Home"); 

    const {getTotalCartAmount,token,setToken} = useContext(StoreContext)

    const navigate = useNavigate();

    const logout =()=>{
          localStorage.removeItem("token");
          setToken("");
          navigate("/")

    }

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
            {!token?<button className='font-outfit text-[#49557e] bg-transparent text-base border border-orange-500 py-2 px-7 rounded-full cursor-pointer hover:bg-orange-300 duration-300 custom:px-6 custom:py-2 custom2:px-[20px] custom2:py-[7px] custom2:text-[15px]' onClick={()=>setShowLogin(true)}>Sign in</button>
              :<div className='group relative cursor-pointer'>
                  <img src={assets.profile_icon} alt="" />
                  <ul className="absolute hidden right-0 z-[1] group-hover:flex group-hover:flex-col group-hover:gap-[10px] group-hover:font-outfit group-hover:list-none group-hover:py-3 group-hover:px-6 group-hover:rounded group-hover:border group-hover:border-orange-500 group-hover:outline group-hover:outline-1 group-hover:bg-[#e9e9e9] group-hover:outline-white">
                    <li className='flex items-center cursor-pointer -ml-3 w-3/5 hover:text-orange-400'><img src={assets.bag_icon} alt="" /><p className='text-sm'>Orders</p></li>
                    <hr />
                    <li onClick={logout} className='flex items-center  cursor-pointer -ml-3 w-3/5 hover:text-orange-400'><img src={assets.logout_icon} alt="" /><p className='text-sm'>Logout</p></li>
                  </ul>
              </div>
                }
        </div>
    </div>
  )
}

export default Navbar
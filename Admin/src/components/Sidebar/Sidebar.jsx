import React from 'react'
import { assets } from '../../assets/assets'
import {NavLink} from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='w-[18%]  border border-gray-400 border-t-0 font-medium'>
        <div className="pt-12 pl-[20%] flex flex-col gap-5">
            <NavLink to='/add' className="flex items-center gap-3 border border-gray-400  border-r-0 p-2 px-2.5 rounded-l-sm cursor-pointer active:bg-green-100 active:border-green-600">
                <img src={assets.add_icon} alt="" />
                <p className='custom2:hidden'>Add Items</p>
            </NavLink>
            <NavLink to='/list' className="flex items-center gap-3 border border-gray-400  border-r-0 p-2 px-2.5 rounded-l-sm cursor-pointer active:bg-green-100 active:border-green-600">
                <img src={assets.order_icon} alt="" />
                <p className='custom2:hidden'>List Items</p>
            </NavLink>
            <NavLink to='/orders' className="flex items-center gap-3 border border-gray-400  border-r-0 p-2 px-2.5 rounded-l-sm cursor-pointer active:bg-green-100 active:border-green-600">
                <img src={assets.order_icon} alt="" />
                <p className='custom2:hidden'>Orders</p>
            </NavLink>
        </div>
    </div>
  )
}

export default Sidebar
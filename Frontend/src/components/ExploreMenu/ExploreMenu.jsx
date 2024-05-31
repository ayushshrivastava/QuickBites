import React from 'react'
import { menu_list } from '../../assets/assets'
const ExploreMenu = ({category,setCategory}) => {

  return (
    <div className='flex flex-col gap-[20px] overflow-x-auto custom:max-w-full custom:text-base' id='explore-menu'>
        <h1 className='font-bold text-lg text-[#262626]'>Explore Our Menu</h1>
        <p className='max-w-3/5'>Choose from a diverse menu featuring  delectble array of dishes.</p>
        <div className='flex justify-between items-center gap-7.5 text-center my-5 custom:gap-3'> 
            {menu_list.map((item , index)=>{
                return (
                    <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index}  className='hover:scale-105'>
                        <img className={`w-[7.5vw] min-w-[80px] rounded-full cursor-pointer transition duration-200 ${category === item.menu_name ? "active p-1 border-4 border-solid border-green-600" : ""}`} src={item.menu_image} alt="" />

                        <p className='mt-2 text-[#747474] cursor-pointer font-outfit'>{item.menu_name}</p>

                    </div>
                )
            })}
            <hr className='my-4 h-2 bg-[#e2e2e2] border-none'/>
        </div>
    </div>
  )
}

export default ExploreMenu
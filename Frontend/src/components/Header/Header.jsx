import React from 'react'
import {assets} from '../../assets/assets'
const Header = () => {
  return (
    <div  className='h-[34vw] my-[30px] mx-auto bg-no-repeat bg-contain relative' style={{backgroundImage:`url(${assets.header_img})`}}>
        <div className='absolute flex flex-col items-start gap-[1.5vw] max-w-[50%] bottom-[10%] left-[6vw] animate-fadein custom:max-w-2/5 custom3:max-w-3/5'>
            <h1 className='font-medium text-white text-6xl custom:text-5xl custom2:text-[28px] custom2:font-medium custom3:text-xl'>Order Your Favourite Food</h1>
            <p className='text-white text-lg custom3:hidden'>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. </p>
            <button className='border-none text-[#747474] font-medium py-[1vw] px-[2.3vw] bg-white rounded-[50px] text-lg custom3:px-2vw custom3:py-4vw'>View Menu</button>
        </div>
    </div>
  )
}

export default Header
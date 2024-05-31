import React from 'react'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='text-[#d9d9d9] bg-[#323232] flex flex-col items-center gap-[20px] p-[20px] px-[8vw] pt-[80px] mt-[100px]' id='footer'>
        <div className="w-full grid gap-[80px] grid-cols-3 custom2:grid-cols-2 custom3:grid-cols-1 custom3:gap-10">
            <div className="flex flex-col items-start gap-[20px]">
                <img className='w-2/5' src={assets.QuickBites} alt="" />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat unde voluptatem quos consectetur eius corrupti rerum. Voluptatibus sequi eius dolorem minima corrupti consequatur, eum officia, consequuntur aspernatur nisi hic quibusdam!</p>
                <div className="flex w-[40px] mr-4 gap-3">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="flex flex-col items-start gap-[20px]">
                <h2 className='text-2xl font-bold text-white'>COMPANY</h2>
                <ul>
                  <li className='mb-[10px] list-disc cursor-pointer'>Home</li>
                  <li className='mb-[10px] list-disc cursor-pointer'>About Us</li>
                  <li className='mb-[10px] list-disc cursor-pointer'>Delivery</li>
                  <li className='mb-[10px] list-disc cursor-pointer'>Privacy Policy</li>
                </ul>
            </div>
            <div className="flex flex-col items-start gap-[20px]">
                <h2 className='text-2xl font-bold text-white'>GET IN TOUCH</h2>
                <ul>
                  <li className='mb-[10px] list-disc cursor-pointer'>5451415</li>
                  <li className='mb-[10px] list-disc cursor-pointer'>contact@quickbites.com</li>
                </ul>
            </div>
        </div>
        <hr className='w-full h-[2px] my-[10px] bg-gray-500' />
        <p className='custom3:text-center'>Copyright 2024 &copy; QuickBites.com - All Right Reserved.</p>
    </div>

  )
}

export default Footer
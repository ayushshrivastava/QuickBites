import React from 'react'
import { assets } from '../../assets/assets'

const AppDownload = () => {
  return (
    <div className='mx-auto mt-[100px] text-center font-medium text-4xl' id="app-download">
        <p>For Better Experience Download <br/> QuickBites App</p>
        <div className='flex justify-center mt-[40px] custom3:flex-shrink-0'>
            <img className='max-w-[180px] transition duration-500 cursor-pointer hover:scale-105 mr-5' src={assets.play_store} alt="" />
            <img className='max-w-[180px] transition duration-500 cursor-pointer hover:scale-105' src={assets.app_store} alt="" />
        </div>
    </div>
  )
}

export default AppDownload
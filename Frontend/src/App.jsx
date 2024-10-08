import React, { useState  } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route , Routes  } from 'react-router-dom'
import Cart from './pages/Cart/Cart'
import Home from './pages/Home/Home'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'
import Verify from './pages/Verify/Verify'
import MyOrders from './pages/MyOrders/MyOrders'
import { useTheme } from './context/ThemeContext'
import ThemeSwitcher from './components/ThemeSwitcher/ThemeSwitcher'



const App = () => {
  const [showLogin,setShowLogin] =useState(false)
  const {theme} = useTheme();




  return (
    <div className={theme === 'dark' ? 'dark' : ''}>
        <div className="bg-white dark:bg-gray-900 min-h-screen text-black dark:text-white">
            {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
      <div className='w-4/5 mx-auto ' >
        <Navbar setShowLogin={setShowLogin}/>
        <ThemeSwitcher/>
      
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/order' element={<PlaceOrder/>} />
          <Route path='/verify' element={<Verify/>} />
          <Route path='/myorders' element={<MyOrders/>} />
        </Routes>
        
      </div>
      <Footer/>
        </div>
    </div>
);
}

export default App

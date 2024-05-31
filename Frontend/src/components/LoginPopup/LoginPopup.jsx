import React, {  useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
import axios from "axios"

const LoginPopup = ({setShowLogin}) => {

    const {url,setToken} = useContext(StoreContext)
  
    
    const[currState,setCurrState]=useState("Login")

    const [data,setData] = useState({
        name:"",
        email:"",
        password:""
    })

    const onChangeHandler =(event)=>{
        const name = event.target.name;
        const value = event.target.value;
        setData(data=>({...data,[name]:value}))
    }

   const onLogin = async (event) =>{
        event.preventDefault()
        let newUrl = url;
        if (currState === "Login") {
            newUrl += "/api/user/login"
        }
        else {
            newUrl += "/api/user/register"
        }

        const response = await axios.post(newUrl,data);

        if(response.data.success){
                setToken(response.data.token);
                localStorage.setItem("token",response.data.token)
                setShowLogin(false)
        }
        else {
            alert(response.data.message)
        }
   }
  
    return (
    <div className='absolute z-10 w-full h-full bg-black bg-opacity-60 grid'>
        <form onSubmit={onLogin} action="" className='place-self-center min-w-[330px] text-gray-500 bg-white flex flex-col gap-6 p-6 px-8 rounded-lg text-sm animate-pop-up'>
            <div className="flex justify-between items-center text-black">
                <h2 className='font-bold'>{currState}</h2>
                <img className='cursor-pointer w-[16px]' onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt=""  />
            </div>
            <div className="flex flex-col gap-[20px]">
                {currState==="Login"?<></>:<input name='name' onChange={onChangeHandler} value={data.name}  className='outline-none rounded p-2.5 border-gray-300 border' type="text" placeholder='Your name' required />}
                
                <input name='email' onChange={onChangeHandler} value={data.email} className='outline-none rounded p-2.5 border-gray-300 border' type="email" placeholder='Your email' required />
                <input name='password' onChange={onChangeHandler} value={data.password} className='outline-none rounded p-2.5 border-gray-300 border' type="password" placeholder='Password' required  />
            </div>
            <button type='submit' className='border-none p-[10px] rounded text-white bg-green-700 text-[15px] cursor-pointer'>{currState==="Sign Up"?"Create Account":"Login"}</button>
            <div className="flex items-start gap-2 -mt-4">
                <input className='mt-[5px]' type="checkbox" required />
                <p>By continuing , i agree to the terms of use and privacy policy.</p>
            </div>
            {currState==="Login"
            ?<p>create a new Account?<span className='text-green-700 font-medium cursor-pointer' onClick={()=>setCurrState("Sign Up")}>Click here</span></p>
            :<p>Already have an Account? <span className='text-green-700 font-medium cursor-pointer' onClick={()=>setCurrState("Login")}>Login here</span></p>
            }
            
            
        </form>
    </div>
  )
}

export default LoginPopup
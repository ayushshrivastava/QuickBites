import React, { useState } from 'react'
import {assets} from '../../assets/assets'
import axios from "axios"
import { toast } from 'react-toastify';

const Add = ({url}) => {

    const [image,setImage] = useState(false);

    const [data,setData] = useState({
        name:"",
        description:"",
        price:"",
        category:"Salad"
    })

    const onChangeHandler =(event)=>{
        const name = event.target.name;
        const value = event.target.value;
        setData(data=>({...data,[name]:value}))
    }

    const onSubmitHandler = async(event)=>{
        event.preventDefault();
        const formData = new FormData();
        formData.append("name",data.name)
        formData.append("description",data.description)
        formData.append("price",Number(data.price))
        formData.append("category",data.category)
        formData.append("image",image)

        const response = await axios.post(`${url}/api/food/add`,formData);
        if(response.data.success){
            setData({
                name:"",
                description:"",
                price:"",
                category:"Salad"
            })
            setImage(false)
            toast.success(response.data.message)
        }
        else{
            toast.error(response.data.message)
        }
    }
  

  return (
    <div className='w-3/5 mt-[50px] text-[#6d6d6d] text-[16px] ml-6'>
        <form className='flex flex-col gap-5' onSubmit={onSubmitHandler}>
            <div className=" flex gap-5 flex-col">
                <p>Upload Image</p>
                <label htmlFor="image">
                    <img className='w-28 cursor-pointer' src={image?URL.createObjectURL(image):assets.upload_area} alt="" />
                </label>
                <input onChange={(e)=>setImage(e.target.files[0])} type="file" id="image" hidden required  />
            </div>
            <div className=' flex gap-5 flex-col w-3/5'>
                <p>Produt name</p>
                <input onChange={onChangeHandler} value={data.name} className='p-3'  type="text" name="name" placeholder='Type here' />
            </div>
            <div className=" flex gap-5 flex-col w-3/5">
                <p>Product description</p>
                <textarea onChange={onChangeHandler} value={data.description} className='p-3' name="description" rows="6" placeholder='Write content here' required></textarea>
            </div>
            <div className="flex gap-8">
                <div className="flex gap-5 flex-col">
                    <p>Product Category</p>
                    <select onChange={onChangeHandler} className='p-2 w-4/5' name="category" >
                        <option value="Salad" >Salad</option>
                        <option value="Rolls" >Rolls</option>
                        <option value="Deserts" >Deserts</option>
                        <option value="Sandwich" >Sandwich</option>
                        <option value="Cake">Cake</option>
                        <option value="Pure Veg" >Pure Veg</option>
                        <option value="Pasta" >Pasta</option>
                        <option value="Noodles" >Noodles</option>
                    </select>
                </div>
                <div className=" flex gap-5 flex-col">
                    <p>Product Price</p>
                    <input onChange={onChangeHandler} value={data.price} className='p-2 w-4/5' type="Number" name='price' placeholder='₹155' />
                </div>
            </div>
            <button type='submit' className='max-w-[100px] p-[10px] border-none bg-black text-white cursor-pointer '>ADD</button>
        </form>

    </div>
  )
}

export default Add
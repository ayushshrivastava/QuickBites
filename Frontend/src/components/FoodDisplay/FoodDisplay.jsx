import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../fooditem/FoodItem'

const FoodDisplay = ({category}) => {

    const {food_list} = useContext(StoreContext)
  return (
    <div className='mt-8'>
        <h2 className='font-bold text-lg mb-4'>Top Dishes near you</h2>
        <div className='w-full grid mt-7.5 gap-7.5 gap-y-[50px] grid-cols-4 gap-x-5 custom:grid-cols-3 custom2:grid-cols-2 custom3:grid-cols-1'>
            {food_list.map((item , index )=>{
              if(category==="All" || category===item.category)
                {
                  return <FoodItem  key={index} id={item._id} name ={item.name} description={item.description} price={item.price} image={item.image} />
                }

                   
            }

            )}
        </div>
    </div>
  )
}

export default FoodDisplay
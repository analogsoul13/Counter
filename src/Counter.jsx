import React from 'react'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, reset, addValue } from './redux/countSlice'

const Counter = () => {

  const [val,setVal] = useState()

  const {count} = useSelector((state)=>state.counterReducer)
  console.log(count);

  const dispatch = useDispatch()
  
  return (
    <>
    <div className='flex flex-col justify-center shadow-2xl bg-gray-50 items-center rounded-xl p-12'>
        <h3 className='text-red-700 text-3xl'>Counter</h3>
        <h2 className='text-4xl text-black mb-2 mt-2'>{count}</h2>
        
        <div className='flex justify-between gap-6 p-2 font-semibold text-white mt-4'>
            <button onClick={()=>{dispatch(increment())}} className='bg-green-500 px-6 py-2 rounded-full shadow-md'>+ Increase</button>
            <button onClick={()=>{dispatch(reset())}} className='bg-blue-500 px-6 py-2 rounded-full shadow-md'>Reset</button>
            <button onClick={()=>{dispatch(decrement())}} className='bg-red-500 px-6 py-2 rounded-full shadow-md'>- Decrease</button>
        </div>

        <div className='flex flex-col items-center w-full justify-center p-3'>
          <input onChange={(e)=>{setVal(Number(e.target.value))}} className='border text-gray-400 w-100 p-2 rounded-md border-outline-none p-2' type="number" />
          <button onClick={()=>dispatch(addValue(val))} className='bg-green-500 w-24 mt-2 rounded-full p-2' type='submit'>Submit</button>
        </div>
    </div>
    </>
  )
}

export default Counter
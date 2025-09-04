import React, { useRef } from 'react'
import { assets } from '../assets/assets'
import { useAppContext } from '../context/AppContext'

const Header = () => {

  const {setInput, input} = useAppContext()
  const inputRef = useRef()

  const onSubmitHandler = async(e)=>{
    e.preventDefault();
    setInput(inputRef.current.value)
  }

  const onClear = ()=>{
    setInput('')
    inputRef.current.value = ''
  }

  return (
    <div className='mx-8 sm:mx-16 xl:mx-24 relative'>
      <div className='text-center mt-20 mb-8'>
        <h1 className='text-3xl sm:text-6xl font-semibold sm:leading-16 text-gray-700'><span className='text-primary'>KC Fitness Gym</span> <br /> Train with heart. <br /> Live with purpose.</h1>
        <p className='my-6 sm:my-8 max-w-2xl m-auto max-sm-text-xs text-gray-500'>You've got this! Every rep, every step, and every workout brings you closer to your goals. It's not about being perfect; it's about being consistent. Embrace the challenge, celebrate your progress, and remember why you started. We're here to help you every step of the way. Let's make today count!</p>
        <form onSubmit={onSubmitHandler} className='flex justify-between max-w-lg max-sm:scale-75 mx-auto border border-gray-300 bg-white rounded overflow-hidden'>
            <input ref={inputRef} type="text" placeholder='Search for recipes' required className='w-full pl-4 outline-none'/>
            <button type='submit' className='bg-primary text-white px-8 py-2 m-1.5 rounded hover:scale-105 transition-all cursor-pointer'>Search</button>
        </form>

      </div>
      <div className='text-center'>
        {input && <button onClick={onClear} className='border font-light text-xs py-1 px-3 rounded-sm shadow-custom-sm cursor-pointer'>Clear Search</button>}
      </div>
      <img src={assets.gradientBackground} alt="" className='absolute -top-50 -z-1 opacity-50' />
    </div>
  )
}

export default Header

import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { useAppContext } from '../context/AppContext';

const Navbar = () => {
    const {navigate, token} = useAppContext()

  return (
    <div className='flex justify-between items-center py-4 px-4 mx-8 sm:py-5 sm:px-8 md:px-12 lg:px-20 xl:px-32 sm:mx-20 xl:mx-32 '>
      <img onClick={()=>navigate('/')} src={assets.logo} alt="Logo" className='w-28 sm:w-36 md:w-40 lg:w-44 cursor-pointer'/>
      <button onClick={()=>navigate('/admin')} className='flex items-center gap-2 rounded-full text-xs sm:text-sm cursor-pointer bg-primary text-white px-6 py-2 sm:px-8 sm:py-2.5 hover:bg-primary/90 transition-colors'>{token ? 'Dashboard' : 'Login'}
        <img src={assets.arrow} className='w-2.5 sm:w-3' alt="arrow" />
      </button>
    </div>
  )
}

export default Navbar

import { assets } from '@/Assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'
import Nav from './Nav'
import axios from 'axios';
import toast from 'react-hot-toast';

function Header() {
  const [email,setEmail] = useState('');
  const onSubmitHandler = async(e) =>{
    e.preventDefault();
    const formData = new FormData();
    formData.append("email",email);

    const response = await axios.post('/api/email',formData);
    if(response.data.success){
      toast.success(response.data.msg)
      setEmail("")
    }else{
      toast.error("Error")
    }
  }
  return (
    <div className='py-5 px-5 md:px-12 lg:px-28'>
        <Nav />
        <div className='text-center my-8'>
            <h1 className='text-3xl sm:text-5xl font-medium'>Latest Blogzz</h1>
            <p className='mt-10 max-w-[740px] m-auto text-xs sm:text-base'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi aliquam dolorem corrupti.</p>
            <form className='flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border border-black shadow-[-7px_7px_0px_#000000]' onSubmit={onSubmitHandler}>
                    <input type="email" placeholder='Enter your email' className='pl-4 outline-none' onChange={(e)=>setEmail(e.target.value)} value={email}/>
                    <button className='border-l border-black py-4 px-4 sm:px-8 active:bg-gray-600 active:text-white' type='submit'>Subscribe</button>
            </form>
        </div>
    </div>
  )
}

export default Header
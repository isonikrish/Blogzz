'use client'
import React, { useEffect, useState } from 'react'
//import { assets, blog_data } from '@/Assets/assets'
import Image from 'next/image';
import Nav from '@/Components/Nav';
import Footer from '@/Components/Footer';
import axios from 'axios';

function BlogPage({ params }) {
  const [data, setData] = useState(null);

  const fetchBlogData = async() => {
    const response = await axios.get('/api/blog',{
      params:{id: params.id}
    })
    setData(response.data)
  }

  useEffect(() => {
    fetchBlogData();
  }, [params.id]);

  return (
    data ? (
      <>
        <div className='bg-gray-200 py-5 px-5 md:px-5 lg:px-28'>
          <Nav />
          <div className='text-center my-24'>
            <h1 className='text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto'>{data.title}</h1>

            <Image src={data.authorImg} width={60} height={60} alt="" className='mx-auto mt-6 border border-white rounded-full' />
            <p className='mt-1 pb-2 text-lg max-w-[740px] mx-auto'>{data.author}</p>
          </div>
          
          {/* Remove negative margin and use proper spacing */}
          <div className='mx-5 max-w-[800px] md:mx-auto mt-10 mb-10'>
            <Image src={data.image} width={1280} height={720} alt='' className='border-4 border-white' />
            <h1 className='my-8 text-[26px] font-semibold'>Introduction</h1>
            <p>{data.description}</p>
          </div>

          <div className='mt-10'>
            <Footer />
          </div>
        </div>
      </>
    ) : (
      <></>
    )
  );
}

export default BlogPage;

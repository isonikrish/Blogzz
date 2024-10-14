import { blog_data } from '@/Assets/assets'
import React, { useState } from 'react'
import BlogItem from './BlogItem'

function BlogList() {
    const [menu, setMenu] = useState('All');

    return (
        <>
            <div className='flex justify-center gap-6 my-10'>
                <button
                    onClick={() => setMenu('All')}
                    className={`${menu === 'All' ? 'bg-black text-white' : 'bg-white text-black'} py-1 px-2 sm:py-2 sm:px-4 rounded-sm`}
                >
                    All
                </button>
                <button
                    onClick={() => setMenu('Technology')}
                    className={`${menu === 'Technology' ? 'bg-black text-white' : 'bg-white text-black'} py-1 px-2 sm:py-2 sm:px-4 rounded-sm`}
                >
                    Technology
                </button>
                <button
                    onClick={() => setMenu('Startup')}
                    className={`${menu === 'Startup' ? 'bg-black text-white' : 'bg-white text-black'} py-1 px-2 sm:py-2 sm:px-4 rounded-sm`}
                >
                    Startup
                </button>
                <button
                    onClick={() => setMenu('Lifestyle')}
                    className={`${menu === 'Lifestyle' ? 'bg-black text-white' : 'bg-white text-black'} py-1 px-2 sm:py-2 sm:px-4 rounded-sm`}
                >
                    Lifestyle
                </button>
            </div>
            <div className='flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24'>
                {blog_data.filter((item) => menu === 'All' ? true : item.category === menu).map((item, index) => {
                    return (
                        <BlogItem
                            key={index}
                            title={item.title}
                            image={item.image}
                            description={item.description}
                            category={item.category}
                            id={item.id}
                        />
                    )
                })}
            </div>
        </>
    )
}

export default BlogList;

'use client'
import { assets } from '@/Assets/assets'
import axios from 'axios';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

function page() {
  const [image, setImage] = useState(false);
  const [preview, setPreview] = useState(null); // For image preview
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Startup");
  const [author, setAuthor] = useState("Krish");
  const [authorImg, setAuthorImg] = useState("/profile_icon.png")
  const onChangeTitle = (e) => setTitle(e.target.value);
  const onChangeDescription = (e) => setDescription(e.target.value);
  const onChangeCategory = (e) => setCategory(e.target.value);
  useEffect(() => {
    if (!image) {
      setPreview(null);
      return;
    }

    const objectUrl = URL.createObjectURL(image);
    setPreview(objectUrl);

    // Cleanup the object URL when the component unmounts or image changes
    return () => URL.revokeObjectURL(objectUrl);
  }, [image]);
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("author", author);
    formData.append("authorImg", authorImg);
    formData.append("image", image);

    const response = await axios.post('/api/blog', formData);
    if (response.data.success) {
      toast.success(response.data.msg);
      setImage("");
      setPreview("");
      setDescription("");
      setTitle("");
      setCategory("")
    } else {
      toast.error("Error")
    }
  }
  return (
    <>
      <form className='pt-5 px-5 sm:pt-12 sm:pl-16' onSubmit={onSubmitHandler}>
        <p className='text-xl'>Upload thumbnail</p>
        <label htmlFor='image'>
          <Image
            src={preview || assets.upload_area} // Use preview if available
            alt=''
            width={140}
            height={70}
            className='mt-4'
          />
        </label>
        <input onChange={(e) => setImage(e.target.files[0])} type="file" id='image' hidden required />
        <p className='text-xl mt-4'>Blog Title</p>
        <input type="text" placeholder='Type here...' required className='w-full sm:w-[500px] mt-4 px-4 py-3 border' name='title' onChange={onChangeTitle} value={title} />
        <p className='text-xl mt-4'>Blog Description</p>
        <textarea type="text" placeholder='Write content here...' required className='w-full sm:w-[500px] mt-4 px-4 py-3 border' rows={6} name='description' onChange={onChangeDescription} value={description} />
        <p className='text-xl mt-4'>Blog Category</p>
        <select name='category' className='w-40 mt-4 px-4 py-3 border text-gray-500' onChange={onChangeCategory} value={category}>
          <option value="Startup">Startup</option>
          <option value="Technology">Technology</option>
          <option value="Lifestyle">Lifestyle</option>

        </select>
        <br />
        <button type='submit' className='mt-8 w-40 h-12 bg-black text-white'>Add</button>
      </form>
    </>
  )
}

export default page
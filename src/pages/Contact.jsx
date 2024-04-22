import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa'
import { MdOutlineCall, MdOutlineEmail, MdOutlineLocationOn } from 'react-icons/md'
import { Tabtitle } from '../component/utilis/PageTitle';
import toast from 'react-hot-toast';

const Contact = () => {
  Tabtitle('Contact | Zerta')

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    reason: '',
    message: ''
  });

  const [response, setResponse] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('/backend/contact.php', {
    // const response = await fetch('/backend/response.json', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const data = await response.json();

    console.log(data);

    if (response.ok) {
      toast.success(data.message);
    } else {
      toast.error('Failed to send message');
    }
  };

  return (
    <section className='bg-pat bg-cover bg-no-repeat p-4 md:p-0 md:px-12 lg:px-24 md:py-8 lg:py-24 w-full flex flex-col md:flex-row bg-cream lg:mt-28 mt-20'>
      <div className='text-primary font-roboto lg:px-5 w-full md:w-1/2'>
        <h1 className='text-2xl md:text-6xl'>Contact Us</h1>
        <p className='text-base md:text-lg font-medium mt-6'>
          We are here to help you make a your world better, one product at a
          time.
        </p>
        <div className='mt-16 space-y-3'>
          <div className='flex items-center space-x-3'>
            <MdOutlineEmail className='text-link text-2xl' />
            <p className='text-base md:text-lg'>zertahq@gmail.com</p>
          </div>
          <div className='flex items-center space-x-3'>
            <MdOutlineCall className='text-link text-2xl' />
            <p className='text-base md:text-lg'>(234) 903-1975-424</p>
          </div>
          <div className='flex items-center space-x-3'>
            <MdOutlineLocationOn className='text-link text-2xl' />
            <p className='text-base md:text-lg'>
              Adebomi Close, Tipper Garage, Akala Expressway, Ibadan-Nigeria.
            </p>
          </div>
        </div>
      </div>
      <div className='w-full md:w-1/2 container lg:px-5 mx-auto flex'>
        <form
          onSubmit={handleSubmit}
          className='lg:w-full xl:w-3/5 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 border-t-4 text-tblack font-roboto border-bgreen shadow-md'
        >
          <h2 className='text-lg mb-8 font-medium font-roboto'>
            Fill out the form
          </h2>
          <div className='relative mb-6'>
            <label htmlFor='full name' className='leading-7 text-tblack'>
              Full name
            </label>
            <input
              type='text'
              id='fullName'
              value={formData.fullName}
              onChange={handleChange}
              name='fullName'
              className='w-full bg-white rounded-full border border-bud focus:border-primary focus:ring-2 focus:ring-primary text-base outline-none text-primary mt-1 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
            />
          </div>
          <div className='relative mb-6'>
            <label htmlFor='email' className='leading-7 text-tblack'>
              Email
            </label>
            <input
              type='email'
              id='email'
              value={formData.email}
              onChange={handleChange}
              name='email'
              className='w-full bg-white mt-1 rounded-full border border-bud focus:border-primary focus:ring-2 focus:ring-primary text-base outline-none text-primary py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
            />
          </div>
          <div className='relative mb-6'>
            <label htmlFor='reason' className='leading-7 text-tblack'>
              Reason
            </label>
            <select
              defaultValue='defaultOptionValue'
              id='reason'
              value={formData.reason}
              onChange={handleChange}
              name='reason'
              className='w-full bg-white mt-1.5 rounded-full border border-bud focus:border-primary focus:ring-2 focus:ring-primary text-base outline-none text-primary py-3 px-3 leading-8 transition-colors duration-200 ease-in-out'
            >
              <option value='defaultOptionValue'>Reason</option>
              <option value='recuitment'>Recuitment</option>
            </select>
          </div>
          <div className='relative '>
            <label htmlFor='message' className='leading-7 text-tblack'>
              Message
            </label>
            <textarea
              id='message'
              value={formData.message}
              onChange={handleChange}
              name='message'
              className='w-full bg-white mt-1 rounded-full border border-bud focus:border-primary focus:ring-2 focus:ring-primary text-base outline-none text-primary py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
            ></textarea>
          </div>
          <button
            type='submit'
            className='text-white mt-6 bg-bgreen flex items-center space-x-2 border-0 py-2 px-6 focus:outline-none hover:bg-green-500 rounded-full justify-center text-lg'
          >
            <span>Submit</span>
            <FaArrowRight />
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact

import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { MdOutlineCall, MdOutlineEmail, MdOutlineLocationOn } from 'react-icons/md'

const Contact = () => {
  return (
    <section className='bg-pat bg-cover bg-no-repeat p-4 md:p-0 md:px-12 lg:px-24 md:py-8 lg:py-24 w-full flex flex-col md:flex-row bg-primary mt-28'>
      <div className='text-white font-roboto px-5 w-full md:w-1/2'>
        <h1 className='text-6xl'>Contact Us</h1>
        <p className='text-lg font-normal mt-6'>
          We are here to help you make a your world better, one product at a
          time.
        </p>
        <div className='mt-16 space-y-3'>
          <div className='flex items-center space-x-3'>
            <MdOutlineEmail className='text-bgreen text-2xl' />
            <p className='text-lg font-medium'>zertahq@gmail.com</p>
          </div>
          <div className='flex items-center space-x-3'>
            <MdOutlineCall className='text-bgreen text-2xl' />
            <p className='text-lg font-medium'>(234) 903-1975-424</p>
          </div>
          <div className='flex items-center space-x-3'>
            <MdOutlineLocationOn className='text-bgreen text-2xl' />
            <p className='text-lg font-medium'>
              Adebomi Close, Tipper Garage, Akala Expressway, Ibadan-Nigeria.
            </p>
          </div>
        </div>
      </div>
      <div className='w-full md:w-1/2 container px-5 mx-auto flex'>
        <form className='lg:w-3/5 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 border-t-4 text-tblack font-roboto border-bgreen shadow-md'>
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
              name='fullName'
              className='w-full bg-white rounded-full border border-bud focus:border-primary focus:ring-2 focus:ring-primary text-base outline-none text-primary py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
            />
          </div>
          <div className='relative mb-6'>
            <label htmlFor='email' className='leading-7 text-tblack'>
              Email
            </label>
            <input
              type='email'
              id='email'
              name='email'
              className='w-full bg-white rounded-full border border-bud focus:border-primary focus:ring-2 focus:ring-primary text-base outline-none text-primary py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
            />
          </div>
          <div className='relative mb-6'>
            <label htmlFor='reason' className='leading-7 text-tblack'>
              Reason
            </label>
            <select
              id='reason'
              name='reason'
              className='w-full bg-white rounded-full border border-bud focus:border-primary focus:ring-2 focus:ring-primary text-base outline-none text-primary py-2.5 px-3 leading-8 transition-colors duration-200 ease-in-out'
            >
              <option selected value='reason'>
                Reason
              </option>
            </select>
          </div>
          <div className='relative mb-6'>
            <label htmlFor='message' className='leading-7 text-tblack'>
              Message
            </label>
            <textarea
              id='message'
              name='message'
              className='w-full bg-white rounded-full border border-bud focus:border-primary focus:ring-2 focus:ring-primary text-base outline-none text-primary py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
            ></textarea>
          </div>
          <button className='text-white bg-bgreen flex items-center space-x-2 border-0 py-2 px-6 focus:outline-none hover:bg-green-500 rounded-full justify-center text-lg'>
            <span>Submit</span>
            <FaArrowRight />
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact

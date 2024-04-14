import React from 'react'
import { GoDotFill } from 'react-icons/go'
import { Tabtitle } from '../component/utilis/PageTitle'
import { FaArrowRight } from 'react-icons/fa6'

const Career = () => {
 Tabtitle('Career | Zerta')
  return (
    <div className='p-4 mt-28 md:p-0 md:px-12 md:py-8 lg:px-24 lg:py-16 bg-cream'>
      <div className='flex items-center space-x-2 pb-5 border-b border-bud w-full'>
        <GoDotFill className='text-bgreen text-xl' />
        <p className='text-primary font-medium font-roboto text-sm '>Career</p>
      </div>
      <div className='mt-8 lg:mt-14'>
        <div>
          <p className='text-4xl lg:text-6xl tracking-widest leading-8 lg:leading-[90px]  font-ribeye'>
            Fill this form to join us
          </p>
        </div>
      </div>
      <div className='w-full flex justify-center '>
        <form className='lg:w-2/4 lg:px-12  container mx-auto mt-12 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full border-t-4 text-tblack font-roboto border-bgreen shadow-md'>
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
            <label htmlFor='role' className='leading-7 text-tblack'>
              Interested role
            </label>
            <select
              id='role'
              name='role'
              className='w-full bg-white rounded-full border border-bud focus:border-primary focus:ring-2 focus:ring-primary text-base outline-none text-primary py-2.5 px-3 leading-8 transition-colors duration-200 ease-in-out'
            >
              <option selected value='reason'>
                Role
              </option>
            </select>
          </div>
          <div className='relative mb-6'>
            <label htmlFor='reason' className='leading-7 text-tblack'>
              Years of experience
            </label>
            <select
              id='experience'
              name='experience'
              className='w-full bg-white rounded-full border border-bud focus:border-primary focus:ring-2 focus:ring-primary text-base outline-none text-primary py-2.5 px-3 leading-8 transition-colors duration-200 ease-in-out'
            >
              <option selected value=''>
                select years
              </option>
            </select>
          </div>
          <div className='relative mb-6'>
            <label
              htmlFor='link'
              className='leading-7 flex items-center space-x-1 text-tblack'
            >
              <span>Social media handles</span>
              <span className='text-grey'>(to be separated with comma)</span>
            </label>
            <input
              type='text'
              id='link'
              name='link'
              className='w-full bg-white rounded-full border border-bud focus:border-primary focus:ring-2 focus:ring-primary text-base outline-none text-primary py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
            />
          </div>
          <div className='relative mb-6'>
            <label
              htmlFor='link'
              className='leading-7 flex items-center space-x-1 text-tblack'
            >
              Attach CV/Resume + Cover Letter
            </label>
            <input
              type='file'
              id='file'
              name='file'
              className='w-full bg-white rounded-full border border-bud focus:border-primary focus:ring-2 focus:ring-primary text-base outline-none text-primary py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
            />
          </div>
          <div className='relative mb-6'>
            <label htmlFor='how' className='leading-7 text-tblack'>
              How did you hear about this Job opening?
            </label>
            <select
              id='how'
              name='how'
              className='w-full bg-white rounded-full border border-bud focus:border-primary focus:ring-2 focus:ring-primary text-base outline-none text-primary py-2.5 px-3 leading-8 transition-colors duration-200 ease-in-out'
            >
              <option selected value=''>
                select 
              </option>
            </select>
          </div>
          <button className='text-white bg-bgreen flex items-center space-x-2 border-0 py-2 px-6 focus:outline-none hover:bg-green-500 rounded-full justify-center text-lg'>
            <span>Apply</span>
            <FaArrowRight />
          </button>
        </form>
      </div>
    </div>
  )
}

export default Career

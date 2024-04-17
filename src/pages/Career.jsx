import React, { useState } from 'react'
import { GoDotFill } from 'react-icons/go'
import { Tabtitle } from '../component/utilis/PageTitle'
import { FaArrowRight, FaClock } from 'react-icons/fa6'
import { MdLocationPin, MdLockClock } from 'react-icons/md'
import { HiOutlineClock } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import { HiArrowUpRight } from 'react-icons/hi2'

const Career = () => {
  Tabtitle('Career | Zerta')
  

 Tabtitle('Career | Zerta')
  return (
    <div className='p-4 mt-28 md:p-0 md:px-12 md:py-8 lg:px-24 lg:py-16 bg-cream'>
      <div className='flex items-center space-x-2 pb-5 border-b border-bud w-full'>
        <GoDotFill className='text-bgreen text-xl' />
        <p className='text-primary font-medium font-roboto text-sm '>Career</p>
      </div>
      <div className='mt-8 '>
        <div>
          <h1 className='text-2xl lg:text-4xl tracking-widest leading-8 lg:leading-[60px]  font-ribeye'>
            Join our team
          </h1>
          <p className='mt-6 lg:mt-4'>
            Our philosophy is simple – make the world a better place one product
            at a time!
          </p>
        </div>
      </div>
      <div className='w-full mt-10 lg:mt-16'>
        <div className='w-full'>
          <div className='mb-8'>
            <p className='text-grey text-xl font-medium font-roboto'>
              Branding and Marketing{' '}
            </p>
          </div>
          <div className='flex-col w-full md:flex md:flex-row md:flex-wrap  space-y-5 md:space-y-0 md:gap-y-12 md:gap-x-8'>
            <div className='border-t-4 border-bgreen rounded-lg bg-white shadow-sm px-4 py-6 lg:px-8 w-full md:w-max'>
              <div className='pr-16'>
                <div className=''>
                  <p className='text-base text-black font-roboto font-semibold'>
                    Brand Manager
                  </p>
                  <span className=' inline-flex text-xs justify-center items-center font-medium py-1 px-4 mt-4 bg-bgreen text-tblack rounded-full'>
                    Open position
                  </span>
                </div>
                <div className='flex items-center space-x-5 font-roboto text-grey font-medium mt-6'>
                  <div className='flex items-center px-3 space-x-1 py-1 border border-grey rounded-full'>
                    <MdLocationPin className=' text-sm' />
                    <p className=' text-sm'>Remote</p>
                  </div>
                  <div className='flex items-center px-3 space-x-1 py-1 border border-grey rounded-full'>
                    <HiOutlineClock className=' text-sm' />
                    <p className=' text-sm'>Full-time</p>
                  </div>
                </div>
                <Link to={'/hire'} className='flex items-center space-x-1 mt-6'>
                  <span className='text-base lg:text-lg font-medium'>
                    Apply
                  </span>
                  <HiArrowUpRight />
                </Link>
              </div>
            </div>
            <div className='border-t-4 border-bgreen rounded-lg bg-white shadow-sm px-4 py-6 lg:px-8 w-full md:w-max'>
              <div className='pr-16'>
                <div className=''>
                  <p className='text-base text-black font-roboto font-semibold'>
                    Graphics Designer
                  </p>
                  <span className=' inline-flex text-xs justify-center items-center font-medium py-1 px-4 mt-4 bg-bgreen text-tblack rounded-full'>
                    Open position
                  </span>
                </div>
                <div className='flex items-center space-x-5 font-roboto text-grey font-medium mt-6'>
                  <div className='flex items-center px-3 space-x-1 py-1 border border-grey rounded-full'>
                    <MdLocationPin className=' text-sm' />
                    <p className=' text-sm'>Remote</p>
                  </div>
                  <div className='flex items-center px-3 space-x-1 py-1 border border-grey rounded-full'>
                    <HiOutlineClock className=' text-sm' />
                    <p className=' text-sm'>Full-time</p>
                  </div>
                </div>
                <Link to={'/hire'} className='flex items-center space-x-1 mt-6'>
                  <span className='text-base lg:text-lg font-medium'>
                    Apply
                  </span>
                  <HiArrowUpRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full mt-12 lg:mt-20'>
        <div className='w-full'>
          <div className='mb-8'>
            <p className='text-grey text-xl font-medium font-roboto'>
              Engineering
            </p>
          </div>
          <div className='flex-col w-full md:flex md:flex-row md:flex-wrap space-y-8 md:space-y-0  md:gap-y-12 md:gap-x-8'>
            <div className='border-t-4 border-bgreen rounded-lg bg-white shadow-sm px-4 py-6 lg:px-8 w-full md:w-max'>
              <div className='pr-16'>
                <div className=''>
                  <p className='text-base text-black font-roboto font-semibold'>
                   Frontend Enginner
                  </p>
                  <span className=' inline-flex text-xs justify-center items-center font-medium py-1 px-4 mt-4 bg-bgreen text-tblack rounded-full'>
                    Open position
                  </span>
                </div>
                <div className='flex items-center space-x-5 font-roboto text-grey font-medium mt-6'>
                  <div className='flex items-center px-3 space-x-1 py-1 border border-grey rounded-full'>
                    <MdLocationPin className=' text-sm' />
                    <p className=' text-sm'>Remote</p>
                  </div>
                  <div className='flex items-center px-3 space-x-1 py-1 border border-grey rounded-full'>
                    <HiOutlineClock className=' text-sm' />
                    <p className=' text-sm'>Full-time</p>
                  </div>
                </div>
                <Link to={'/hire'} className='flex items-center space-x-1 mt-6'>
                  <span className='text-base lg:text-lg font-medium'>
                    Apply
                  </span>
                  <HiArrowUpRight />
                </Link>
              </div>
            </div>
            <div className='border-t-4 border-bgreen rounded-lg bg-white shadow-sm px-4 py-6 lg:px-8 w-full md:w-max'>
              <div className='pr-16'>
                <div className=''>
                  <p className='text-base text-black font-roboto font-semibold'>
                    Backend Engineer
                  </p>
                  <span className=' inline-flex text-xs justify-center items-center font-medium py-1 px-4 mt-4 bg-bgreen text-tblack rounded-full'>
                    Open position
                  </span>
                </div>
                <div className='flex items-center space-x-5 font-roboto text-grey font-medium mt-6'>
                  <div className='flex items-center px-3 space-x-1 py-1 border border-grey rounded-full'>
                    <MdLocationPin className=' text-sm' />
                    <p className=' text-sm'>Remote</p>
                  </div>
                  <div className='flex items-center px-3 space-x-1 py-1 border border-grey rounded-full'>
                    <HiOutlineClock className=' text-sm' />
                    <p className=' text-sm'>Full-time</p>
                  </div>
                </div>
                <Link to={'/hire'} className='flex items-center space-x-1 mt-6'>
                  <span className='text-base lg:text-lg font-medium'>
                    Apply
                  </span>
                  <HiArrowUpRight />
                </Link>
              </div>
            </div>
            <div className='border-t-4 border-bgreen rounded-lg bg-white shadow-sm px-4 py-6 lg:px-8 w-full md:w-max'>
              <div className='pr-16'>
                <div className=''>
                  <p className='text-base text-black font-roboto font-semibold'>
                    DevOP Engineer
                  </p>
                  <span className=' inline-flex text-xs justify-center items-center font-medium py-1 px-4 mt-4 bg-bgreen text-tblack rounded-full'>
                    Open position
                  </span>
                </div>
                <div className='flex items-center space-x-5 font-roboto text-grey font-medium mt-6'>
                  <div className='flex items-center px-3 space-x-1 py-1 border border-grey rounded-full'>
                    <MdLocationPin className=' text-sm' />
                    <p className=' text-sm'>Remote</p>
                  </div>
                  <div className='flex items-center px-3 space-x-1 py-1 border border-grey rounded-full'>
                    <HiOutlineClock className=' text-sm' />
                    <p className=' text-sm'>Full-time</p>
                  </div>
                </div>
                <Link to={'/hire'} className='flex items-center space-x-1 mt-6'>
                  <span className='text-base lg:text-lg font-medium'>
                    Apply
                  </span>
                  <HiArrowUpRight />
                </Link>
              </div>
            </div>
            <div className='border-t-4 border-bgreen rounded-lg bg-white shadow-sm px-4 py-6 lg:px-8 w-full md:w-max'>
              <div className='pr-16'>
                <div className=''>
                  <p className='text-base text-black font-roboto font-semibold'>
                    Mobile Developer
                  </p>
                  <span className=' inline-flex text-xs justify-center items-center font-medium py-1 px-4 mt-4 bg-bgreen text-tblack rounded-full'>
                    Open position
                  </span>
                </div>
                <div className='flex items-center space-x-5 font-roboto text-grey font-medium mt-6'>
                  <div className='flex items-center px-3 space-x-1 py-1 border border-grey rounded-full'>
                    <MdLocationPin className=' text-sm' />
                    <p className=' text-sm'>Remote</p>
                  </div>
                  <div className='flex items-center px-3 space-x-1 py-1 border border-grey rounded-full'>
                    <HiOutlineClock className=' text-sm' />
                    <p className=' text-sm'>Full-time</p>
                  </div>
                </div>
                <Link to={'/hire'} className='flex items-center space-x-1 mt-6'>
                  <span className='text-base lg:text-lg font-medium'>
                    Apply
                  </span>
                  <HiArrowUpRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Career

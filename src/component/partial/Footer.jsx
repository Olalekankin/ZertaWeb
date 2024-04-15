import React from 'react'
import { FaLinkedin, FaXTwitter } from 'react-icons/fa6'
import { RiInstagramLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='w-full text-white font-lora border-t border-foo bg-primary bg-pattern bg-contain bg-no-repeat p-4 lg:p-0 lg:px-16 lg:py-24'>
      <div className='w-full lg:mx-0 font-roboto flex md:items-center md:justify-between lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col'>
        <div className='w-full px-auto md:px-0 md:w-80 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left'>
          <Link to={'/'} className='flex items-center justify-center'>
            <img
              src='./asset/logo-white.png'
              className='h-10 md:h-auto'
              alt='Zerta Logo'
            />
          </Link>
          <p className='mt-2 text-base text-white font-normal text-center font-lora'>
            With us, you get the highest level of customer satisfaction, we have
            a great workforce to deliver superior products and services to our
            clients and the consumer market.
          </p>
        </div>

        <div className='flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center md:justify-between lg:justify-center'>
          <div className='lg:w-1/4 md:w-1/2 w-full px-4'>
            <h2 className='font-medium text-white tracking-widest  mb-3'>
              Platform
            </h2>
            <nav className='list-none mb-10 space-y-6'>
              <li>
                <Link
                  to='/'
                  className='text-gray-400 hover:text-gray-200 font-normal'
                >
                  Solutions
                </Link>
              </li>
              <li>
                <Link
                  to='/'
                  className='text-gray-400 hover:text-gray-200 font-normal'
                >
                  Internship Program
                </Link>
              </li>
              <li>
                <Link
                  to='/'
                  className='text-gray-400 hover:text-gray-200 font-normal'
                >
                  Worklife at Zerta
                </Link>
              </li>
              <li className='flex items-center justify-center md:justify-start space-x-2'>
                <Link
                  to='/'
                  className='text-gray-400 hover:text-gray-200 font-normal'
                >
                  Zerta Academy
                </Link>
                <Link className='bg-bgreen px-2 py-1 flex justify-center text-sm text-primary font-medium rounded-xl'>
                  Apply now
                </Link>
              </li>
            </nav>
          </div>
          <div className='lg:w-1/4 md:w-1/2 w-full px-4'>
            <h2 className='font-medium text-white tracking-widest  mb-3'>
              Company
            </h2>
            <nav className='list-none mb-10 space-y-6'>
              <li>
                <Link
                  to='/'
                  className='text-gray-400 hover:text-gray-200 font-normal'
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to='/'
                  className='text-gray-400 hover:text-gray-200 font-normal'
                >
                  Our mission
                </Link>
              </li>
              <li className=''>
                <Link
                  to={'/career'}
                  className='text-gray-400 hover:text-gray-200 font-normal flex items-center justify-center md:justify-start space-x-2'
                >
                  <span>Career</span>
                  <span className='bg-bgreen px-4 py-1 flex justify-center text-sm text-primary font-medium rounded-xl'>
                    Hiring
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to='/'
                  className='text-gray-400 hover:text-gray-200 font-normal'
                >
                  Contact
                </Link>
              </li>
            </nav>
          </div>
          <div className='lg:w-1/4 md:w-1/2 w-full px-4'>
            <h2 className='font-medium text-white tracking-widest  mb-3'>
              Resources
            </h2>
            <nav className='list-none mb-10 space-y-6'>
              <li>
                <Link
                  to='/'
                  className='text-gray-400 hover:text-gray-200 font-normal'
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to='/'
                  className='text-gray-400 hover:text-gray-200 font-normal'
                >
                  Support
                </Link>
              </li>
            </nav>
          </div>
        </div>

        <div className='md:w-1/3 lg:w-1/4 flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center'>
          <div className='w-full px-4'>
            <nav className='list-none mb-10 space-y-4'>
              <div className=''>
                <a
                  href='https://x.com/zertahq?s=21'
                  target='_blank'
                  className='bg-soc rounded-full flex items-center space-x-4 p-1.5'
                >
                  <span className='bg-bgreen w-8 h-8 md:w-12 md:h-12 flex justify-center items-center rounded-full'>
                    <FaXTwitter className='text-primary text-2xl md:text-3xl' />
                  </span>
                  <span className='text-white font-roboto font-medium'>
                    Follow us on X
                  </span>
                </a>
              </div>
              <div className=''>
                <a
                  href='https://www.instagram.com/zertahq?igsh=MXAxNzJ4dnJiNjMwcA=='
                  target='_blank'
                  className='bg-soc rounded-full flex items-center space-x-4 p-1.5'
                >
                  <span className='bg-bgreen w-8 h-8 md:w-12 md:h-12 flex justify-center items-center rounded-full'>
                    <RiInstagramLine className='text-primary text-2xl md:text-3xl' />
                  </span>
                  <span className='text-white font-roboto font-medium'>
                    Follow us on Instagram
                  </span>
                </a>
              </div>
              <div className=''>
                <a
                  href='https://www.linkedin.com/company/zertatechnology/'
                  target='_blank'
                  className='bg-soc rounded-full flex items-center space-x-4 p-1.5'
                >
                  <span className='bg-bgreen w-8 h-8 md:w-12 md:h-12 flex justify-center items-center rounded-full'>
                    <FaLinkedin className='text-primary text-2xl md:text-3xl' />
                  </span>
                  <span className='text-white font-roboto font-medium'>
                    Follow us on LinkedIn
                  </span>
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <div className='flex w-full md:justify-end mt-28'>
        <div>
          <p class='text-[#FFFFFFCC] text-sm text-center sm:text-left'>
            © 2024 All Rights Reserved. Zerta Technolgy Ltd. RC 7332542.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

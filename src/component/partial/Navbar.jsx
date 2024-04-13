import React, { useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { HiMenu } from 'react-icons/hi'
import { Link } from 'react-router-dom'

const Navbar = () => {
 const [isOpen, setIsOpen] = useState(false)

 const handleNavbar = () => {
   setIsOpen((prevIsOpen) => !prevIsOpen) 
 }

  return (
    <nav className='bg-white border-b border-bud fixed w-full z-20 top-0 start-0'>
      <div className='w-full flex flex-wrap items-center justify-between mx-auto lg:mx-0 p-4 lg:p-0 lg:px-16 lg:py-8 font-roboto font-medium text-link'>
        {/* brand logo */}
        <Link to={'/'} className='flex items-center'>
          <img src='./asset/logo.svg' className='' alt='Zerta Logo' />
        </Link>
        {/* Mobile Nav button */}
        <div className='flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse'>
          <Link
            to={'/contat-us'}
            className='text-link border border-link   focus:ring-primary font-medium rounded-full flex px-4 py-3 items-center space-x-2'
          >
            <span>Get in touch</span>
            <FaArrowRight />
          </Link>
          <button
            onClick={handleNavbar}
            type='button'
            className='inline-flex items-center p-2 w-10 h-10 justify-center bg-gray-200 text-sm text-link rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200'
          >
            <span className='sr-only'>Open main menu</span>
            <HiMenu className='text-2xl' />
          </button>
        </div>
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
            isOpen ? 'block' : 'hidden'
          }`}
        >
          <ul className='flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white'>
            <li>
              <Link
                to={'/'}
                className='block py-2 px-3 text-link rounded md:bg-transparent md:text-link md:p-0'
              >
                Home
              </Link>
            </li>
            <li>
              <a
                href='#about'
                className='block py-2 px-3 text-link rounded md:bg-transparent md:text-link md:p-0'
              >
                About us
              </a>
            </li>
            <li>
              <a
                href='#service'
                className='block py-2 px-3 text-link rounded md:bg-transparent md:text-link md:p-0'
              >
                Services
              </a>
            </li>
            <li>
              <a
                href='#product'
                className='block py-2 px-3 text-link rounded md:bg-transparent md:text-link md:p-0'
              >
                Our Product
              </a>
            </li>
            <li>
              <Link
                to={'/contact'}
                className='block py-2 px-3 text-link rounded md:bg-transparent md:text-link md:p-0'
              >
                Contact us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

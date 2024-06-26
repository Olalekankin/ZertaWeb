import React, { useEffect, useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { HiMenu } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import { HashLink as Hash } from 'react-router-hash-link'

const Navbar = () => {
 const [isOpen, setIsOpen] = useState(false)

 const handleNavbar = () => {
   setIsOpen((prevIsOpen) => !prevIsOpen) 
 }

  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.scrollY
    const yOffset = -114
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' })
  }

  return (
    <nav className='bg-white border-b border-bud fixed w-full z-20 top-0 start-0'>
      <div className='w-full flex flex-wrap items-center justify-between mx-auto lg:mx-0 p-4 lg:p-0 lg:px-16 lg:py-8 font-roboto font-medium text-link'>
        {/* brand logo */}
        <Hash
          to={'/#home'}
          smooth
          scroll={(el) => scrollWithOffset(el)} 
          className='flex items-center'>
          <img
            src='./asset/logo.svg'
            className='h-6 md:h-auto'
            alt='Zerta Logo'
          />
        </Hash>
        {/* Mobile Nav button */}
        <div className='flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse'>
          <a
            href='https://wa.link/1poevk'
            target='_blank'
            to={'/contat-us'}
            className='text-link border border-link focus:ring-primary text-sm md:text-base  md:font-medium rounded-full flex px-4 py-2  md:py-3 items-center space-x-2'
          >
            <span>Get in touch</span>
            <FaArrowRight />
          </a>
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
              <Hash
                to={'/#home'}
                smooth
                scroll={(el) => scrollWithOffset(el)}
                className='block py-2 px-3 text-link rounded md:bg-transparent md:text-link md:p-0'
              >
                Home
              </Hash>
            </li>
            <li>
              <Hash
                to='/#about'
                smooth
                scroll={(el) => scrollWithOffset(el)}
                className='block py-2 px-3 text-link rounded md:bg-transparent md:text-link md:p-0'
              >
                About us
              </Hash>
            </li>
            <li>
              <Hash
                to='/#service'
                smooth
                scroll={(el) => scrollWithOffset(el)}
                className='block py-2 px-3 text-link rounded md:bg-transparent md:text-link md:p-0'
              >
                Services
              </Hash>
            </li>
            <li>
              <Hash
                to='/#product'
                smooth
                scroll={(el) => scrollWithOffset(el)}
                className='block py-2 px-3 text-link rounded md:bg-transparent md:text-link md:p-0'
              >
                Our Product
              </Hash>
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

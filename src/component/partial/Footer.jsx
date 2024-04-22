import React from 'react'
import { FaLinkedin, FaXTwitter } from 'react-icons/fa6'
import { RiInstagramLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { HashLink as Hash } from 'react-router-hash-link'

const Footer = () => {

  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.scrollY
    const yOffset = -114
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' })
  }

  return (
    <footer className='w-full text-white font-lora border-t border-foo bg-primary bg-pattern bg-contain bg-no-repeat p-4 lg:p-0 lg:px-16 lg:py-24'>
      <div className='w-full lg:mx-0 font-roboto flex  lg:justify-between lg:items-start lg:flex-row lg:flex-nowrap flex-wrap flex-col'>
        <div className='w-full px-auto lg:px-0 lg:w-80 flex-shrink-0 lg:mx-0 mx-auto text-center lg:text-left'>
          <Hash
            to={'/#home'}
            smooth
            scroll={(el) => scrollWithOffset(el)}
            className='flex items-center justify-center lg:justify-start'
          >
            <img
              src='./asset/logo-white.png'
              className='h-10 md:h-auto'
              alt='Zerta Logo'
            />
          </Hash>
          <p className='mt-2 text-base text-white font-normal font-lora'>
            With us, you get the highest level of customer satisfaction, we have
            a great workforce to deliver superior products and services to our
            clients and the consumer market.
          </p>
        </div>

        <div className='flex-grow flex flex-wrap -mb-10 lg:mt-0 mt-10 lg:text-left text-center lg:justify-between xl:justify-center'>
          <div className='lg:w-1/3 xl:w-1/4 md:w-1/3 w-full px-4 lg:px-3'>
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
                  to=''
                  className='text-gray-400 hover:text-gray-200 font-normal'
                >
                  Internship Program
                </Link>
              </li>
              <li>
                <Link
                  to=''
                  className='text-gray-400 hover:text-gray-200 font-normal'
                >
                  Worklife at Zerta
                </Link>
              </li>
              <li className='flex items-center justify-center lg:justify-start space-x-1'>
                <Link
                  to=''
                  className='text-gray-400 hover:text-gray-200 font-normal'
                >
                  Zerta Academy
                </Link>
                <Link className='bg-bgreen px-2 py-1 flex justify-center text-sm text-primary font-medium rounded-xl'>
                  Apply
                </Link>
              </li>
            </nav>
          </div>
          <div className='lg:w-1/3 xl:w-1/4 md:w-1/3 w-full px-4 lg:px-3'>
            <h2 className='font-medium text-white tracking-widest  mb-3'>
              Company
            </h2>
            <nav className='list-none mb-10 space-y-6'>
              <li>
                <Hash
                  to='/#about'
                  smooth
                  scroll={(el) => scrollWithOffset(el)}
                  className='text-gray-400 hover:text-gray-200 font-normal'
                >
                  About
                </Hash>
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
                  className='text-gray-400 hover:text-gray-200 font-normal flex items-center justify-center lg:justify-start space-x-2'
                >
                  <span>Career</span>
                  <span className='bg-bgreen px-4 py-1 flex justify-center text-sm text-primary font-medium rounded-xl'>
                    Hiring
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to={'/contact'}
                  className='text-gray-400 hover:text-gray-200 font-normal'
                >
                  Contact
                </Link>
              </li>
            </nav>
          </div>
          <div className='lg:w-1/3 xl:w-1/4 md:w-1/3 w-full px-4 lg:px-3'>
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

        <div className='lg:w-1/4 flex-wrap -mb-10 lg:mt-0 mt-10 md:text-left text-center'>
          <div className='w-full px-4'>
            <nav className='list-none mb-10 md:flex md:justify-center lg:block space-y-4  md:space-y-0 lg:space-y-4 md:space-x-3 lg:space-x-0'>
              <div className=''>
                <a
                  href='https://x.com/zertahq?s=21'
                  target='_blank'
                  className='bg-soc md:w-max md:pr-5 lg:w-auto rounded-full flex items-center space-x-4 p-1.5'
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
                  className='bg-soc rounded-full md:w-max md:pr-5 lg:w-auto flex items-center space-x-4 p-1.5'
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
                  className='bg-soc rounded-full md:w-max md:pr-5 lg:w-auto flex items-center space-x-4 p-1.5'
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
      <div className='flex w-full justify-center lg:justify-end mt-14 lg:mt-28'>
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

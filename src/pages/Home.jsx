
import { GoDotFill } from 'react-icons/go'
import { Tabtitle } from '../component/utilis/PageTitle'
import { useState } from 'react'


const Home = () => {
  Tabtitle('Home | Zerta')

   const [isOpen, setIsOpen] = useState(false)

   const toggleAccordion = () => {
     setIsOpen(!isOpen)
   }

  return (
    <div className='w-full bg-white mt-28'>
      <div className='w-full flex flex-col  lg:flex-row lg:flex-wrap'>
        <div className='lg:h-full md:pt-10 p-4 md:p-0 md:py-5 lg:pt-28 md:px-12  lg:px-24 w-full lg:w-2/3'>
          <div className='lg:w-2/3'>
            <div className='flex items-center mb-10'>
              <img src='./asset/icon.png' alt='' />
              <p className='text-tblack font-roboto font-medium text-sm'>
                …One solution at a time for your business
              </p>
            </div>
            <p className='text-4xl lg:text-7xl tracking-widest leading-8 lg:leading-[90px]  font-aclon'>
              We Pride in <br className='hidden md:inline' /> Tech Solutions
              <br className='hidden md:inline' />
              that works.
            </p>
            <p className='mt-10 text-base md:text-xl'>
              At Zerta, your business growth is our priority.{' '}
              <br className='hidden md:inline' />
              With our team of professionals and experts in tech,{' '}
              <br className='hidden md:inline' /> we’ll help you craft
              innovative business solutions that work.
            </p>
            <div className='mt-10 flex space-x-4 w-full md:w-auto'>
              <a
                href=''
                className='bg-primary w-1/2 md:w-auto flex items-center justify-center text-white rounded-full py-3 md:py-4 px-6'
              >
                What we do
              </a>
              <a
                href=''
                className='border border-primary w-1/2 md:w-auto flex items-center justify-center text-primary rounded-full py-3 md:py-4 px-6'
              >
                Get in touch
              </a>
            </div>
          </div>
        </div>
        <div className='lg:h-ful mt-10 md:mt-0 lg:w-1/3 bg-bgreen flex justify-center items-center relative'>
          <img src='./asset/hero.png' alt='' />
        </div>
      </div>
      {/* Partner */}
      <div className='border-y border-bud p-4 md:p-0 md:py-9 md:px-24 my-2'>
        <div className='flex w-full flex-col lg:flex-row justify-between items-center lg:space-x-12'>
          <div>
            <p className='font-medium font-roboto text-tblack'>
              Global partners that trusted us
            </p>
          </div>
          <div className='flex-grow space-x-6 lg:space-x-0 mt-4 lg:mt-0 flex lg:justify-evenly lg:items-center'>
            <img
              className='h-5 md:h-auto'
              src='./asset/alt.png'
              alt='altschool logo'
            />
            <img
              className='h-5 md:h-auto'
              src='./asset/actelis.png'
              alt='actelis logo'
            />
            <img
              className='h-5 md:h-auto'
              src='./asset/kuda.png'
              alt='kuda logo'
            />
          </div>
        </div>
      </div>
      <div className='p-4 md:p-0 md:px-12 md:py-8 lg:px-24 lg:py-16 bg-cream'>
        <div className='flex items-center space-x-2'>
          <GoDotFill className='text-bgreen text-xl' />
          <p className='text-primary font-medium font-roboto text-sm'>
            What we do
          </p>
        </div>
        <div className='mt-8 lg:mt-14'>
          <div>
            <p className=''>
              We help small and global brands change the narrative for the
              better with our expertise
            </p>
          </div>
          <div className='accordion'>
            <div className='accordion-header' onClick={toggleAccordion}>
              <div className={`cursor-pointer ${isOpen ? 'open' : ''}`}>Hello</div>
            </div>
            {isOpen && <div className='accordion-content'>Sup</div>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home

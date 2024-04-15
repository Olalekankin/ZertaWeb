
import { GoDotFill } from 'react-icons/go'
import { Tabtitle } from '../component/utilis/PageTitle'
import { useState } from 'react'
import { FaArrowRight } from 'react-icons/fa6'
import { Link } from 'react-router-dom'


const Home = () => {
  Tabtitle('Home | Zerta')

  // State to manage each accordion item individually
  const [openAccordion, setOpenAccordion] = useState(0)
  const [isOpen, setIsOpen] = useState(false)

  // Function to toggle accordion state
  const toggleAccordion = (index) => {
    setOpenAccordion((prevIndex) => (prevIndex === index ? -1 : index))
  }

  // Function to toggle read more
  const toggleReadMore = () => {
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
        <div>
          <div className='inline-flex items-center border-b py-3 border-bud space-x-2'>
            <GoDotFill className='text-bgreen text-xl' />
            <p className='text-primary font-medium font-roboto text-sm'>
              What we do
            </p>
          </div>
        </div>
        <div className='mt-8 lg:mt-14'>
          <div>
            <p className='text-2xl font-medium text-tblack'>
              We help small and global brands change the{' '}
              <br className='hidden lg:inline' /> narrative for the better with
              our expertise
            </p>
          </div>
          {/* Accordions */}
          <div className='w-full mt-10 space-y-8'>
            <div className='accordion w-full lg:w-1/3'>
              <div
                className='accordion-header'
                onClick={() => toggleAccordion(0)}
              >
                <div
                  className={`cursor-pointer text-5xl relative ${
                    openAccordion === 0 ? 'text-black bo' : 'text-ina'
                  }`}
                >
                  <p
                    className={` ${
                      openAccordion === 0
                        ? 'border-b-2 border-bud py-3 after:absolute after:w-52 after:border-b-2 after:border-primary after:bottom-0 after:left-0'
                        : ''
                    } `}
                  >
                    Software Development
                  </p>
                </div>
              </div>
              {openAccordion === 0 && (
                <div className='text-base lg:text-lg mt-4 text-primary w-full'>
                  At Zerta, We help mega brands and SMEs develop problem-solving
                  and intuitive mobile and application software solutions within
                  budget. With expert hands dedicated to working on your
                  projects, Expect nothing short of excellence and perfection.
                </div>
              )}
            </div>
            <div className='accordion w-full lg:w-1/3'>
              <div
                className='accordion-header'
                onClick={() => toggleAccordion(1)}
              >
                <div
                  className={`cursor-pointer text-5xl relative ${
                    openAccordion === 1 ? 'text-black bo' : 'text-ina'
                  }`}
                >
                  <p
                    className={` ${
                      openAccordion === 1
                        ? 'border-b-2 border-bud py-3 after:absolute after:w-52 after:border-b-2 after:border-primary after:bottom-0 after:left-0'
                        : ''
                    } `}
                  >
                    Mobile Apps
                  </p>
                </div>
              </div>
              {openAccordion === 1 && (
                <div className='text-base lg:text-lg mt-4 text-primary w-full'>
                  At Zerta, We help mega brands and SMEs develop problem-solving
                  and intuitive mobile and application software solutions within
                  budget. With expert hands dedicated to working on your
                  projects, Expect nothing short of excellence and perfection.
                </div>
              )}
            </div>
            <div className='accordion w-full lg:w-1/3'>
              <div
                className='accordion-header'
                onClick={() => toggleAccordion(2)}
              >
                <div
                  className={`cursor-pointer text-5xl relative ${
                    openAccordion === 2 ? 'text-black bo' : 'text-ina'
                  }`}
                >
                  <p
                    className={` ${
                      openAccordion === 2
                        ? 'border-b-2 border-bud py-3 after:absolute after:w-64 after:border-b-2 after:border-primary after:bottom-0 after:left-0'
                        : ''
                    } `}
                  >
                    Agency Partnership
                  </p>
                </div>
              </div>
              {openAccordion === 2 && (
                <div className='text-base lg:text-lg mt-4 text-primary w-full'>
                  Got a great product idea, funding but less workforce? our team
                  at Zerta are ready to take up your ideas and make something
                  great out of it. Here, we love to make the world a better
                  place ONE PRODUCT AT A TIME!
                </div>
              )}
            </div>
            <div className='accordion w-full lg:w-1/3'>
              <div
                className='accordion-header'
                onClick={() => toggleAccordion(3)}
              >
                <div
                  className={`cursor-pointer text-5xl relative ${
                    openAccordion === 3 ? 'text-black bo' : 'text-ina'
                  }`}
                >
                  <p
                    className={` ${
                      openAccordion === 3
                        ? 'border-b-2 border-bud py-3 after:absolute after:w-64 after:border-b-2 after:border-primary after:bottom-0 after:left-0'
                        : ''
                    } `}
                  >
                    Virtual Assistant
                  </p>
                </div>
              </div>
              {openAccordion === 3 && (
                <div className='text-base lg:text-lg mt-4 text-primary w-full'>
                  Your business needs support agents to help attend to your
                  customers on issues either technical or non-technical, Zerta
                  is your go-to Company for such service. We got you.
                </div>
              )}
            </div>
            <div className='accordion w-full lg:w-1/3'>
              <div
                className='accordion-header'
                onClick={() => toggleAccordion(4)}
              >
                <div
                  className={`cursor-pointer text-5xl relative ${
                    openAccordion === 4 ? 'text-black bo' : 'text-ina'
                  }`}
                >
                  <p
                    className={` ${
                      openAccordion === 4
                        ? 'border-b-2 border-bud py-3 after:absolute after:w-64 after:border-b-2 after:border-primary after:bottom-0 after:left-0'
                        : ''
                    } `}
                  >
                    Brand Management
                  </p>
                </div>
              </div>
              {openAccordion === 4 && (
                <div className='text-base lg:text-lg mt-4 text-primary w-full'>
                  We’ll help your business or brand get the recognition it
                  needs. With our team of brand strategists, copywriters/ UX
                  writers, graphic designers, and UI/UX designers your brand is
                  in safe hands.
                </div>
              )}
            </div>
            <div className='accordion w-full lg:w-1/3'>
              <div
                className='accordion-header'
                onClick={() => toggleAccordion(5)}
              >
                <div
                  className={`cursor-pointer text-5xl relative ${
                    openAccordion === 5 ? 'text-black bo' : 'text-ina'
                  }`}
                >
                  <p
                    className={` ${
                      openAccordion === 5
                        ? 'border-b-2 border-bud py-3 after:absolute after:w-64 after:border-b-2 after:border-primary after:bottom-0 after:left-0'
                        : ''
                    } `}
                  >
                    Social Media Management
                  </p>
                </div>
              </div>
              {openAccordion === 5 && (
                <div className='text-base lg:text-lg mt-4 text-primary w-full'>
                  Your business needs an online presence to thrive and flourish
                  the way you want, at Zerta we’ll help create and manage your
                  brand’s online presence across different social media
                  platforms to attract qualified leads and drive conversion.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* About US */}
      <div className='w-full p-4 md:p-0 md:px-12 md:py-8 lg:px-24 lg:py-16 bg-white'>
        <div className='w-full lg:flex lg:justify-between'>
          <div className='w-full lg:w-2/5'>
            <h1 className='text-4xl lg:text-6xl text-tblack font-roboto'>
              About Us
            </h1>
          </div>
          <div className='w-full lg:w-3/5 lg:flex lg:justify-end'>
            <div>
              <p className='text-base lg:text-2xl'>
                At Zerta, we're more than just a software development company
                we're your digital partners, dedicated to bringing your vision
                to life with innovative solutions tailored to your needs.
                Founded on the principles of creativity, reliability, and
                excellence, we're committed to empowering businesses to thrive
                in the digital landscape. Whether you're embarking on a new
                project or seeking to enhance
              </p>
              <p
                className={`text-base lg:text-2xl mt-5 ${
                  isOpen
                    ? 'max-h-screen transition-max-height ease-in duration-300'
                    : 'max-h-0 overflow-hidden'
                }`}
              >
                Whether you're embarking on a new project or seeking to enhance{' '}
                {isOpen && (
                  <span className=''>
                    your digital presence, Zerta is here to accompany you every
                    step of the way and get you the results you need. Let's
                    innovate, create, and elevate together.
                  </span>
                )}
              </p>
              <div
                className={`text-base lg:text-2xl mt-5 ${
                  isOpen
                    ? 'max-h-screen transition-max-height ease-in duration-300'
                    : 'max-h-0 overflow-hidden'
                }`}
              >
                {isOpen && (
                  <p className='mt-5 text-base lg:text-2xl'>
                    Welcome to Zerta – where we create one solution at a time
                    for your business.
                  </p>
                )}
              </div>
              <div className='mt-0'>
                <button
                  onClick={toggleReadMore}
                  className={`bg-bgreen text-primary lg:py-4 lg:px-6 px-4 py-2 rounded-full ${
                    isOpen ? 'mt-10' : 'mt-0'
                  }`}
                >
                  Read more
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full p-4 md:p-0 md:px-12 md:py-8 lg:px-24  bg-primary'>
        <div className='flex space-x-3'>
          <div className='flex-grow'>
            <h2 className='text-base lg:text-5xl text-white font-aclon leading-[68px]'>
              10x your Business results with {' '}
              <br className='hidden lg:inline' /> the Digital Services we offer{' '}
              <br className='hidden lg:inline' /> at Zerta
            </h2>
            <p className='mt-4 text-gray-300'>
              Get in touch with us today and let’s help elevate your{' '}
              <br className='hidden lg:inline' /> business with our solutions.
            </p>
            <div className='mt-10'>
              <button
                className={`bg-bgreen text-primary lg:py-4 lg:px-6 px-4 py-2 rounded-full `}
              >
                Get in touch
              </button>
            </div>
          </div>
          <div className=''>
            <img src='./asset/circle.png' alt='' />
          </div>
        </div>
      </div>
      <div className='w-full p-4 md:p-0 md:px-12 md:py-8 lg:px-24 lg:py-16 bg-cream'>
        <div className='flex items-center justify-between'>
          <h1 className='text-tblack text-4xl lg:text-6xl'>Our Products</h1>
          <Link className='flex items-center space-x-2 border border-bud rounded-full py-3 px-4'>
            <span>See all</span>
            <FaArrowRight />
          </Link>
        </div>
        <div className='mt-9 flex space-x-3'>
          <div className='accordion w-full lg:w-1/3'>
            <div
              className='accordion-header'
            >
              <div className='relative'>
                <p className='border-b-2 border-bud text-base lg:text-5xl py-3 after:absolute after:w-64 after:border-b-2 after:border-primary after:bottom-0 after:left-0'>
                  Beema by Zerta
                </p>
              </div>
            </div>
            <div className='text-base lg:text-lg mt-4 text-primary w-full'>
              Your business needs an online presence to thrive and flourish the
              way you want, at Zerta we’ll help create and manage your brand’s
              online presence across different social media platforms to attract
              qualified leads and drive conversion.
            </div>
          </div>
          <div>
            <img src="./asset/beema.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home

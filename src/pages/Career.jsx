import React, { useState } from 'react'
import { GoDotFill } from 'react-icons/go'
import { Tabtitle } from '../component/utilis/PageTitle'
import { FaArrowRight } from 'react-icons/fa6'

const Career = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    role: '',
    experience: '',
    link: '',
    how: '',
    cv: null
  });
  const [response, setResponse] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, cv: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append('fullName', formData.fullName);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('role', formData.role);
    formDataToSend.append('experience', formData.experience);
    formDataToSend.append('link', formData.link);
    formDataToSend.append('how', formData.how);
    formDataToSend.append('cv', formData.cv);

    const response = await fetch('/backend/recruitment.php', {
    // const response = await fetch('/backend/response.json', {
      method: 'POST',
      body: formDataToSend,
    });

    const data = await response.json();

    if (response.ok) {
      setResponse(data.message);
    } else {
      setResponse('Failed to submit application');
    }
  };

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
        <form onSubmit={handleSubmit} className='lg:w-2/4 lg:px-12  container mx-auto mt-12 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full border-t-4 text-tblack font-roboto border-bgreen shadow-md'>
          <h2 className='text-lg mb-8 font-medium font-roboto'>
            Fill out the form
          </h2>
          <p className='text-white bg-bgreen flex items-center space-x-2 border-0 py-2 px-6 focus:outline-none hover:bg-green-500 rounded-full justify-center text-lg'>{response}</p> <br></br>
          <div className='relative mb-6'>
            <label htmlFor='full name' className='leading-7 text-tblack'>
              Full name
            </label>
            <input
              type='text'
              id='fullName'
              name='fullName'
              value={formData.fullName} 
              onChange={handleChange}
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
              value={formData.email} 
              onChange={handleChange}
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
              value={formData.role} 
              onChange={handleChange}
              className='w-full bg-white rounded-full border border-bud focus:border-primary focus:ring-2 focus:ring-primary text-base outline-none text-primary py-2.5 px-3 leading-8 transition-colors duration-200 ease-in-out'
            >
              <option selected value='' disabled>Role</option>
              <option value="software_engineer">Software Engineer</option>
              <option value="data_scientist">Data Scientist</option>
              <option value="web_developer">Web Developer</option>
              <option value="mobile_developer">Mobile Developer</option>
              <option value="UI_UX_designer">UI/UX Designer</option>
              <option value="product_manager">Product Manager</option>
              <option value="network_engineer">Network Engineer</option>
              <option value="systems_administrator">Systems Administrator</option>
              <option value="QA_engineer">QA Engineer</option>
              <option value="technical_writer">Technical Writer</option>
            </select>
          </div>
          <div className='relative mb-6'>
            <label htmlFor='reason' className='leading-7 text-tblack'>
              Years of experience
            </label>
            <select
              id='experience'
              name='experience'
              value={formData.experience} 
              onChange={handleChange}
              className='w-full bg-white rounded-full border border-bud focus:border-primary focus:ring-2 focus:ring-primary text-base outline-none text-primary py-2.5 px-3 leading-8 transition-colors duration-200 ease-in-out'
            >
              <option selected value='' disabled>Select years</option>
              <option value="0">Less than 1 year</option>
              <option value="1">1 year</option>
              <option value="2">2 years</option>
              <option value="3">3 years</option>
              <option value="4">4 years</option>
              <option value="5">5 years</option>
              <option value="6">6 years</option>
              <option value="7">7 years</option>
              <option value="8">8 years</option>
              <option value="9">9 years</option>
              <option value="10">10+ years</option>
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
              value={formData.link} 
              onChange={handleChange}
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
              name='cv'
              onChange={handleFileChange}
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
              value={formData.how} 
              onChange={handleChange}
              className='w-full bg-white rounded-full border border-bud focus:border-primary focus:ring-2 focus:ring-primary text-base outline-none text-primary py-2.5 px-3 leading-8 transition-colors duration-200 ease-in-out'
            >
              <option selected value='' disabled>Select</option>
              <option value="company_website">Company Website</option>
              <option value="job_board">Job Board (e.g., Indeed, Glassdoor)</option>
              <option value="social_media">Social Media (e.g., LinkedIn, Twitter)</option>
              <option value="employee_referral">Employee Referral</option>
              <option value="recruiter_contact">Recruiter Contact</option>
              <option value="career_fair">Career Fair/Event</option>
              <option value="university">University/Campus Recruitment</option>
              <option value="other">Other</option>
            </select>
          </div>
          <button type='submit' className='text-white bg-bgreen flex items-center space-x-2 border-0 py-2 px-6 focus:outline-none hover:bg-green-500 rounded-full justify-center text-lg'>
            <span>Apply</span>
            <FaArrowRight />
          </button>
        </form>
      </div>
    </div>
  )
}

export default Career

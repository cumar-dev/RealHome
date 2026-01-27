import React, { useState } from 'react'
import { MdCall } from 'react-icons/md';

const Contact = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  return (
    <>
    <div className='min-h-screen flex justify-center items-center bg-gray-50'>
      <div className='max-w-xl w-full'>
        <div className='text-center mb-10'>
          <span className='flex items-center justify-center gap-2 text-2xl bold'>
            <MdCall className='text-blue-700 text-3xl' />
            Contact us
          </span>
          <p className='text-gray-500 hover:text-gray-700'>let's contact us if you need to get more external information about our properties</p>
        </div>
        <div className='bg-white shadow-md rounded p-5'>
          <form className='p-3'>
            <div className='flex flex-col gap-3 mb-3'>
              <label className='text-gray-800 font-semibold'>Full name</label>
              <input className='px-4 py-3 rounded bg-[#F8F9FA] text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-700' type="text" placeholder='Full name' />
            </div>
            <div className='flex flex-col gap-3 mb-3'>
              <label className='text-gray-800 font-semibold'>Email</label>
              <input className='px-4 py-3 rounded bg-[#F8F9FA] text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-700' type="email" placeholder='Email' />
              </div>
              <div className='flex flex-col gap-3 mb-3'>
                <label className='text-gray-800 font-semibold'>Message</label>
                <textarea className='px-4 py-3 h-30 rounded bg-[#F8F9FA] text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-700' placeholder='Message'></textarea>
              </div>
          </form>
          <button className='px-4 py-3 rounded text-center  bg-[#000000] text-white w-full mb-4 cursor-pointer' type='submit'>Submit</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default Contact;
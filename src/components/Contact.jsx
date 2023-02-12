import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className=' bg-gradient-to-b from-slate-500 to-black w-full h-screen p-4 text-white' >
      <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
        <div className=' pb-8'>
          <p className='text-4xl font-bold border-b-4 border-gray-300 inline'>Contact</p>
          <p className='py-4'>Fill the form to contact me for projects</p>
        </div>
        <div className='flex justify-center items-center'>
          <form action="https://getform.io/f/e307d67d-a3b9-47ec-942b-a3fe057188c8" method='POST' className='flex flex-col w-full md:w-1/2'>
            <input type="text" name="name" placeholder='Enter your Name' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />
            <input type="text" name="email" placeholder='Enter your email' className=' my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />
            <textarea name="message" placeholder='Enter your Message' rows="10" className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></textarea>
            <button className='text-white bg-gradient-to-b from-blue-400 to-purple-600 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Contact Me</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact;
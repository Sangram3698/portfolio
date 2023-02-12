/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import heroImage from '../assets/heroImage.jpg';
import {MdOutlineKeyboardArrowRight} from 'react-icons/md';
import {Link} from 'react-scroll'

const Home = () => {
  return (
    <div name="home"
    className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'
    >
     <div
     className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'
     >
      <div
      className='flex flex-col justify-center h-full'
      >
        <h2 className='text-3xl font-bold sm:text-5xl text-white'>I am a web developer,App developer and an UI/UX designer.</h2>
        <p className='text-white py-4 max-w-md'>
          I am an electronics communication and information engineer. I am a web developer, App developer , UI/UX designer.
          I have been learning tech for last 6 years and i have done more than 100s of projects.
          Since long tech,AI,innovation and automation has been my subject of interest as well as my dream and now i can say i m living my dream.
        </p>
        <div>
         <Link to='portfolio' smooth duration={450}> <button className='group text-white w-fit px-6 py-3 my2 flex items-center rounded-md bg-gradient-to-b from-blue-700 to-blue-400 cursor-pointer'>
            Portfolio
            <span className='group-hover:rotate-90 duration-300'><MdOutlineKeyboardArrowRight size={25} className='ml-1'/></span>
          </button></Link>
        </div>
      </div> 
      <div  className='mx-auto w-1/3 md:w-full right-2 left-0'>
        <img src={heroImage} alt="my_profile" height={400} width={750} className='rounded-3xl' />
      </div>
     </div>
    </div>
  )
}

export default Home;
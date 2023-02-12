/* eslint-disable no-useless-concat */
import React from 'react';
import {FaGithub,FaLinkedin} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';

const SocialLinks = () => {
  const links=[
    {
      id:1,
      child:(
        <>
        Github<FaGithub/>
        </>
      ),
        href:'https://github.com/Sangram3698',
        style:'rounder-tr-md'
    },
    {
      id:2,
      child:(
        <>
        Linkdin<FaLinkedin/>
        </>
      ),
        href:'https://www.linkedin.com',
    },
    {
      id:3,
      child:(
        <>
        Mail<HiOutlineMail/>
        </>
      ),
        href:'mailto:sngrmbhandari@gmail.com',
      
    },
    {
      id:4,
      child:(
        <>
        Resume<BsFillPersonLinesFill/>
        </>
      ),
        href:'https://github.com/Sangram3698',
        style:'rounder-br-md'
    },

  ];
  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
      <ul>
      {links.map(({id,child,href,style})=>(
          <li key={id} className={'flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-600' + ' '+style}>
          <a href={href} className='flex justify-between items-center w-full text-white' target="_blank" rel="noreferrer">
          {child}
          </a></li>
      ))}
      </ul>
    </div>
  )
}

export default SocialLinks;
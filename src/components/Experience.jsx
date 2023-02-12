import React from 'react'
import html from '../assets/html.png';
import css from '../assets/css.png';
import flutter from '../assets/flutter.jpg';
import github from '../assets/github.png';
import javascript from '../assets/javascript.png';
import nextjs from '../assets/nextjs.png';
import node from '../assets/node.png';
import react from '../assets/react.png';
import tailwind from '../assets/tailwind.png';










const Experience = () => {

  const lists=[
    {
      id:1,
      src:flutter,
      name:'Flutter',
      style:'shadow-md shadow-blue-500 hover:scale-105 duration-500 py-2 rounded-lg'
    },
    {
      id:2,
      src:html,
      name:'HTML',
      style:'shadow-md shadow-orange-500 hover:scale-105 duration-500 py-2 rounded-lg'
    },
    {
      id:3,
      src:css,
      name:'CSS',
      style:'shadow-md shadow-blue-500 hover:scale-105 duration-500 py-2 rounded-lg'
    },
    {
      id:4,
      src:javascript,
      name:'Javascript',
      style:'shadow-md shadow-yellow-500 hover:scale-105 duration-500 py-2 rounded-lg'
    }
    ,
    {
      id:5,
      src:tailwind,
      name:'TailwindCSS',
      style:'shadow-md shadow-blue-500 hover:scale-105 duration-500 py-2 rounded-lg'
    },
    {
      id:6,
      src:react,
      name:'react',
      style:'shadow-md shadow-blue-500 hover:scale-105 duration-500 py-2 rounded-lg'
    },
    {
      id:7,
      src:github,
      name:'Github',
      style:'shadow-md shadow-purple-500 hover:scale-105 duration-500 py-2 rounded-lg'
    },
    {
      id:8,
      src:node,
      name:'Node',
      style:'shadow-md shadow-green-500 hover:scale-105 duration-500 py-2 rounded-lg'
    },
    {
      id:9,
      src:nextjs,
      name:'NextJs',
      style:'shadow-md shadow-pink-500 hover:scale-105 duration-500 py-2 rounded-lg'
    }
  ];
  return (
    <div name='experience' className='bg-gradient-to-b from-slate-600 to-red-200 w-full h-auto md:h-screen'>
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
        <div>
          <p className='text-4xl font-bold border-b-4 border-gray-400 p-2 inline'>Experience</p>
          <p className='py-6'>I am handy with these sorts of stuffs</p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
          {
            lists.map(({id,src,name,style})=>(
              <div key={id} className={style}>
            <img src={src} alt="item" className='w-20 mx-auto' />
            <p className='mt-4 text-black font-semibold'>{name}</p>
          </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Experience;
import React, { useState } from 'react'

const Header = () => {
  const [opennav, setopennav] = useState(false)
  return (
    <nav className='flex justify-between  tracking-wide text-white font-semibold py-3'>
      <h1 className='text-4xl'>
        <span className='text-red-700 '>S</span>portnail
      </h1>

      <ul
        className='md:flex hidden
 mx-4 text-base font-normal text-slate-300 space-x-6'
      >
        <li className='hover:text-red-700 delay-150'>
          <a href=''>Home</a>
        </li>
        <li className='hover:text-red-700 delay-150'>
          <a href='#about'>About</a>
        </li>
        <li className='hover:text-red-700 delay-150'>
          <a href='#projects'>My Projects</a>
        </li>
  
      </ul>

      {/* smaller device */}
      <div
        className='md:hidden fixed right-6'
        onClick={() => {
          setopennav(prev => !prev)
        }}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='40'
          height='40'
          fill='currentColor'
          class='bi bi-list md:hidden'
          viewBox='0 0 16 16'
        >
          <path
            fill-rule='evenodd'
            d='M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z'
          />
        </svg>
      </div>

      {opennav && (
        <div className='md:hidden'>
          <ul className='fixed md:hidden  bottom-0 z-50 p-5  top-0 space-y-6  right-0 w-[60%] bg-red-600'>
            <div
              className='md:hidden fixed right-6'
              onClick={() => {
                setopennav(false)
              }}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='30'
                height='30'
                fill='currentColor'
                class='bi bi-chevron-right'
                viewBox='0 0 16 16'
              >
                <path
                  fill-rule='evenodd'
                  d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'
                />
              </svg>
            </div>
            <li>
              <a href=''>Home</a>
            </li>
            <li >
              <a href='#about'>About</a>
            </li>
            <li >
              <a href='#projects'>My Projects</a>
            </li>
           
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Header

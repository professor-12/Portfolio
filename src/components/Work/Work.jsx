import React from 'react'

const Work = () => {
  return (
    <section id='projects' className='mb-[15rem] space-y-12'>
      <h1 className='text-4xl font-medium'>My Works</h1>

      <div className='grid gap-3 grid-cols-2 md:grid-cols-3 overflow-hidden'>
        <a
          target='_blank'
          className='hover:scale-105 duration-150
'
          href='https://emmanuelmoviebox.netlify.app'
        >
          <div className='relative h-[15rem] overflow-hidden bg-[#3b423b44]  rounded-xl'>
            <img src='/Movie.png' className='rounded-t-lg' alt='' />
            <a
              target='_blank'
              className='absolute bg-[#7c7070b2]  rounded-xl p-3 right-2 -translate-y-2'
              href='https://github.com/professor-12/MovieBox'
            >
              Repo
            </a>
            <div className='p-3'>
              <h1 className='text-3xl font-semibold text-red-500'>
                MovieBox App
              </h1>

              <p className='group text-sm text-slate-300'>
                A project that allows you to search ad save your favourite
                Movies
              </p>
            </div>
          </div>
        </a>
        <a
          target='_blank'
          className='hover:scale-105 duration-150'
          href='https://professor-12.github.io/template/'
        >
          <div className='relative h-[15rem] bg-[#3b423b44]  rounded-xl'>
            <div className='bg-green-400 text-center justify-center rounded-t-lg flex items-center text-5xl font-bold h-[65%]'>
              Template
            </div>
            <div>
              <a
                target='_blank'
                className='absolute bg-[#7c7070b2]  rounded-xl p-3 right-2 -translate-y-2'
                href='https://github.com/professor-12/Meal'
              >
                Repo
              </a>

              <div className='p-3'>
                <h1 className='text-3xl font-semibold text-red-500'>
                  Template Project
                </h1>
                <p className='group text-sm text-slate-300'>
                  A project that shows list of store of emoloyee's
                </p>
              </div>
            </div>
          </div>
        </a>
        <a
          target='_blank'
          className='hover:scale-105 duration-150'
          href='https://magenta-creponne-bf0cc0.netlify.app'
        >
          <div className='relative h-[15rem] bg-[#3b423b44]  rounded-xl'>
            <img
              src='https://magenta-creponne-bf0cc0.netlify.app/assets/meals-453fc4aa.jpg'
              alt=''
              className='rounded-t-lg'
            />
            <div>
              <a
                target='_blank'
                className='absolute bg-[#7c7070b2]  rounded-xl p-3 right-2 -translate-y-2'
                href='https://github.com/professor-12/Meal'
              >
                Repo
              </a>

              <div className='p-3'>
                <h1 className='text-3xl font-semibold text-red-500'>
                  Meals App
                </h1>
                <p className='group text-sm text-slate-300'>
                  An ecommerce Website in which you can add your favourite food
                  to cart and place order.
                </p>
              </div>
            </div>
          </div>
        </a>
      </div>
    </section>
  )
}

export default Work

import React from 'react'

const Hero = () => {
  return (
    <section className='flex flex-col md:flex-row  my-[12rem] items-center justify-between'>
        <div className='md:w-1/2'>
            <h1 className='text-3xl text-slate-400'>Frontend developer.</h1>
            <p className='text-5xl mt-5 font-semibold '>Hello!, I'm <span className='text-red-600'>Emmanuel</span> Badejo </p>
        </div>
        <div className='md:w-[60%] border rouned-lg border-slate-700'><img  src="/Poster.jpg" className='w-full rounded-lg h-[30rem]' alt="profileimage" /></div>
    </section>
  )
}

export default Hero
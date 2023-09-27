import React from 'react'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Footer from './components/Footer/Footer'
import Services from './components/Services/Services'
import Work from './components/Work/Work'


const App = () => {
  return (
    <div className='text-white'>
      <div className='container mx-auto lg:w-[70%]'>
        <Header/>
        <Hero/>
        <About/>
        <Services/>
        <Work/>
       
        <Footer/>
      </div>
    </div>
  )
}

export default App
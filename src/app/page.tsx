import React from 'react'
import Home from '@/components/Home';
import About from '@/components/About';
import Flower from '@/components/Flower';
import Contact from '@/components/Contact';



const page = () => {
  return (

      <main>
        <Home/>
        <Flower />
        <About />
        <Contact /> 
      </main>


  )
}

export default page
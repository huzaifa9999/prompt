import React from 'react'
import Feed from '@components/Feed'
const Home = () => {
  return (
  <section className='w-full flex-center flex-col '>
  <h1 className='head_text text-center'>
    discover and share
    <br  className='max-md:hidden'/>
    <span className='orange_gradient text-center'>
AI-powered promts
    </span>
  </h1>
  <p className=' desc text-center'>
    hue hue hue hue hue hue hue hue

  </p>
  <Feed/>
  </section>
  )
}

export default Home
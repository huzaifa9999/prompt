import React from 'react'
import Feed from '@components/Feed'
const Home = () => {
  return (
  <section className='w-full flex-center flex-col '>
  <h1 className='head_text text-center'>
    discover and share
    <br  className='max-md:hidden'/>
    <span className='orange_gradient text-center'>
Prompts for AI like ChatGPT
    </span>
  </h1>
  <p className=' desc text-center'>
   Filter the prompts by searching the desired tags

  </p>
  <Feed/>
  </section>
  )
}

export default Home
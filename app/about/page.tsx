import { Cards, HeroSection, Jumbotron } from '@/components'
import { about, aboutCards, aboutObjOne, aboutObjTwo } from '@/constants'
import React from 'react'

const About = () => {
  return (
    <>
      <Jumbotron {...about} />
      <HeroSection {...aboutObjOne} />
      <Cards cards={aboutCards} />
      <div className='black-slope'></div>
      <HeroSection {...aboutObjTwo} />
    </>
  )
}

export default About
import HeroSection from '@/components/sections/HeroSection';
import Card from '@/components/ui/Card'; 
import Jumbotron from '@/components/sections/Jumbotron';
import Newsletter  from '@/components/sections/Newsletter';
import { about, aboutCards, aboutObjOne, aboutObjTwo } from '@/constants'
import React from 'react'

const About = () => {
  return (
    <>
      <Jumbotron {...about} />
      <HeroSection {...aboutObjOne} />
      <Card cards={aboutCards} />
      <div className='black-slope'></div>
      <HeroSection {...aboutObjTwo} />
      <Newsletter />
    </>
  )
}

export default About
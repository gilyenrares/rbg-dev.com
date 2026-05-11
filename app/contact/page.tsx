import HeroSection from '@/components/sections/HeroSection';
import Jumbotron from '@/components/sections/Jumbotron';
import Newsletter  from '@/components/sections/Newsletter';
import { contact, contactObjOne, contactObjThree, contactObjTwo } from '@/constants'
import ContactForm  from '@/components/forms/ContactForm';
import React from 'react'

const Contact = () => {
  return (
    <>
      <Jumbotron {...contact} />
      <HeroSection {...contactObjOne} />
      <ContactForm />
      <HeroSection {...contactObjTwo} />
      <HeroSection {...contactObjThree} />
      <Newsletter />
    </>
  )
}

export default Contact
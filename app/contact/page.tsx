import { HeroSection, Jumbotron, Newsletter } from '@/components'
import { contact, contactObjOne, contactObjThree, contactObjTwo } from '@/constants'
import { ContactForm } from '@/forms'
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
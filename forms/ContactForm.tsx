import React from 'react'
import { IoMdCall, IoMdMail } from 'react-icons/io'
import { IoLocationSharp } from 'react-icons/io5'
import Image from 'next/image'
import { Button } from '@/components'
import './Forms.css'

const ContactForm = () => {
  return (
    <div className='form--custom  my-10 p-10  justify-center mx-auto md:container container text-white' id="contact">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-5 ">
        <div className="lg:col-span-2  pb-5 text-current">
          <section className="logo flex flex-row items-center justify-center">
            <Image className='  align-top mr-2' src="/logo.png" alt='RBG Logo' height={20} width={50} />
            <h2>RGB-Dev</h2>
          </section>
          <p className="mt-5 justify-center">
            Contact RBG Development for any questions, requests or
            any type of inquiry.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center">
            <a href="tel:+4474 925 65888" className='md:col-span-1'>
              <Button buttonStyle="btn--success">
                <IoMdCall /> Call us{" "}
              </Button>
            </a>
            <a href="mailto: gilyenrares@gmail.com" className='md:col-span-1'>
              <Button buttonStyle="btn--danger">
                <IoMdMail /> Email us{" "}
              </Button>
            </a>
            <a href="#address" className='col-span-1 md:col-span-2 '>
              <Button buttonStyle="btn--info" >
                <IoLocationSharp /> Find Us{" "}
              </Button>
            </a>
          </div>
        </div>
        <div className='lg:col-span-3 pb-5'>
          <h2 className=" text-current text-center">Contact Form</h2>
          <div className="">
            <form action="includes/contact.inc.php" method="post" className='grid grid-cols-1 md:grid-cols-2 gap-4 justify-center'>
              <input
                type="text"
                name="fn"
                className="h-14 col-span-2 md:col-span-1 rounded bg-neutral-800 text-white border-red-500 border-b-2 p-4 my-2 w-full placeholder:text-cyan-500"
                placeholder="First Name"
                required
              ></input>

              <input
                type="text"
                name="ln"
                className="h-14 col-span-2 md:col-span-1 rounded bg-neutral-800 text-white border-red-500 border-b-2 p-4 my-2 w-full placeholder:text-cyan-500"
                placeholder="Last Name"
                required
              ></input>

              <input
                type="email"
                name="email"
                className="h-14 rounded bg-neutral-800 text-white border-red-500 border-b-2 p-4 my-2 col-span-2 placeholder:text-cyan-500"
                placeholder="E-mail"
                required
              ></input>
              <textarea
                name="message"
                className=" h-32 rounded bg-neutral-800 text-white border-red-500 border-b-2 p-4 my-2 col-span-2 placeholder:text-cyan-500"
                placeholder="Message"
                required
              ></textarea>
              <div className='flex col-span-2 justify-center'>
                <Button
                  buttonSize="btn--wide"
                  buttonStyle="btn--success"
                  type="submit"
                  name="contact-submit"
                >
                  Send
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactForm
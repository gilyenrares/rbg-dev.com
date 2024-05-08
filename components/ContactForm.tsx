import React from 'react'
import Button from './Button'
import { IoMdCall, IoMdMail } from 'react-icons/io'
import { IoLocationSharp } from 'react-icons/io5'
import Image from 'next/image'

const ContactForm = () => {
  return (
    <div className='flex container md:container justify-center mx-auto py-20' id="contact">
      <div className="grid grid-cols-3 gap-4">
        <div className=" md:col-span-3 lg:col-span-1 grid-cols-1 pb-5 text-current">
          <section className="logo flex flex-row items-center justify-center">
            <Image className='  align-top mr-2' src="/logo.png" alt='RBG Logo' height={20} width={50} />
            <h2>RGB-Dev</h2>
          </section>
          <p className="mt-5 justify-center">
            Contact RBG Development for any questions, requests or
            any type of inquiry.
          </p>
          <div className="grid md:grid-cols-1 lg:grid-cols-2 justify-center">
            <a href="tel:+4474 925 65888" className=' flex justify-center'>
              <Button buttonStyle="btn--success">
                <IoMdCall /> Call us{" "}
              </Button>
            </a>
            <a href="mailto: gilyenrares@gmail.com" className=' flex justify-center'>
              <Button buttonStyle="btn--danger">
                <IoMdMail /> Email us{" "}
              </Button>
            </a>
            <a href="#address" className='col-span-2 flex justify-center'>
              <Button buttonStyle="btn--info" >
                <IoLocationSharp /> Find Us{" "}
              </Button>
            </a>
          </div>
        </div>
        <div className='col-span-2 pb-5'>
          <h2 className=" text-current text-center">Contact Form</h2>
          <div className="">
            <form action="includes/contact.inc.php" method="post" className='grid grid-cols-2 gap-4 justify-center'>
              <div className='grid grid-cols-2 col-span-2 gap-4'>
                <div className=''>
                  <input
                    type="text"
                    name="fn"
                    className="h-14 rounded bg-neutral-800 text-white border-red-500 border-b-2 p-4 my-2 w-full"
                    placeholder="First Name"
                    required
                  ></input>
                </div>
                <div className=''>
                  <input
                    type="text"
                    name="ln"
                    className="h-14 rounded bg-neutral-800 text-white border-red-500 border-b-2 p-4 my-2 w-full"
                    placeholder="Last Name"
                    required
                  ></input>
                </div>
              </div>
              <input
                type="email"
                name="email"
                className="h-14 rounded bg-neutral-800 text-white border-red-500 border-b-2 p-4 my-2 col-span-2"
                placeholder="E-mail"
                required
              ></input>
              <textarea
                name="message"
                className=" h-32 rounded bg-neutral-800 text-white border-red-500 border-b-2 p-4 my-2 col-span-2"
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
import React from 'react'
import Button from './Button'
import { footerLinks } from '@/constants'
import Link from 'next/link'
import './Newsletter.css'

const Newsletter = () => {
  return (
    <>
      <div className='top-slope'></div>
      <div className='footer-container'>
        <div className='footer-subscription col-span-12'>
          <p className='footer-subscription-heading'>
            Join our exclusive membership to receive the latest news and trends
          </p>
          <p className='footer-subscription-text'>
            You can unsubscribe at any time.
          </p>
          <div className='input-areas'>
            <form>
              <input
                className='footer-input'
                name='email'
                type='email'
                placeholder='Your Email'
              />
              <Button buttonStyle='btn--outline'>Subscribe</Button>
            </form>
          </div>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 justify-center'>
          {footerLinks.map((cat) => (
            <div key={cat.id} className='flex flex-col items-start m-4 text-white'>
              <h2 className='mb-4 whitespace-nowrap '>{cat.title}</h2>
              {cat.links.map((link) => (
                <Link key={link.title} href={link.url}>{link.title}</Link>
              ))}
            </div>))}
        </div>
      </div>
    </>
  )
}

export default Newsletter
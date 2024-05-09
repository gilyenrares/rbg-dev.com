import Link from 'next/link'
import React from 'react'
import Button from './Button'
import Image from 'next/image'
import './HeroSection.css';
import { HeroSectionProps } from '@/types';

const HeroSection = ({
  hasTop,
  hasBottom,
  lightBg,
  topLine,
  headline,
  description,
  buttonLink,
  buttonLabel,
  buttonStyle,
  img,
  alt,
  imgStart
}: HeroSectionProps) => {
  return (
    <>
      {hasTop ? <div className={lightBg ? 'light-slope' : 'dark-slope'}></div> : null}
      <div className={lightBg ? 'py-40 text-black lightBg ' : 'py-40 text-white darkBg'}>
        <div className=' container md:container mx-auto'>
          <div className='mx-4 grid md:grid-cols-2 grid-cols-1 items-center'>
            <div className='flex flex-col items-center' style={{
              order: imgStart === true ? '1' : '0'
            }}>
              <div className='top-line'>{topLine}</div>
              <h1 className={lightBg ? 'heading dark' : 'heading'}>
                {headline}
              </h1>
              <section className={lightBg ? 'hero-desc dark' : 'hero-desc'}>
                <p>{description.p1}</p>
                <p>{description.p2}</p>
                <p>{description.p3}</p>
              </section>
              <Link href={buttonLink}>
                <Button buttonStyle={buttonStyle} buttonSize='btn--large'>
                  {buttonLabel}
                </Button>
              </Link>
            </div>
            <div className='flex flex-col items-center justify-center'>
              <Image src={img} alt={alt} width={400} height={100} className='max-w-full min-w-64 pt-10' />
            </div>
          </div>
        </div>
      </div>
      {hasBottom ? <div className={lightBg ? 'inverted-light-slope' : 'inverted-dark-slope'}></div> : null}
    </>
  )
}

export default HeroSection
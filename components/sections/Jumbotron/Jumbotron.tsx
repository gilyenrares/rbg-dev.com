// import React, { useEffect } from 'react'
import "./Jumbotron.css"
import Link from 'next/link'
import Button from '@/components/ui/Button'

type JumbotronProps = {
  location: string
  titleCyan: string
  titlePurple: string
  subtitle: string
  urlOne: string
  buttonOne: string
  btnStyleOne: string
  urlTwo: string
  buttonTwo: string
  btnStyleTwo: string
}


const Jumbotron = ({ location, titleCyan, titlePurple, subtitle, urlOne, buttonOne, btnStyleOne, urlTwo, buttonTwo, btnStyleTwo }: JumbotronProps) => {
  let hasStyleOne = true;
  let hasStyleTwo = true;
  if(urlOne){
    if (btnStyleOne === 'btn-primary' || btnStyleOne === 'btn-secondary'){
      hasStyleOne = false;
    }
  } 
  if(urlTwo){
    if (btnStyleTwo === 'btn-primary' || btnStyleTwo === 'btn-secondary'){
      hasStyleTwo = false;
    }
  }
  
  return (
    <>
        {/* <!-- Hero Section --> */}
    <section className="hero">
        <div className="hero-container">
            <h1 className="hero-title">
                <span className="hero-neo">{titleCyan}</span><span className="hero-nexus">{titlePurple}</span>
            </h1>
            <p className="hero-subtitle">{subtitle}</p>
            <div className="hero-buttons">
            {urlOne === '' ? (
              null
            ) : ( hasStyleOne === true ? (
                <Link href={urlOne}>
                  <Button className='btn--clip' type={buttonOne} buttonSize='btn--wide' buttonStyle={btnStyleOne}>{buttonOne}</Button>
                </Link>
              ) : (
                <Link className={btnStyleOne} href={urlOne}>
                 {buttonOne}
                </Link>
              ))
            }
            {urlTwo === '' ? (
              null
            ) : ( hasStyleTwo === true ? (
                <Link href={urlTwo}>
                  <Button className='btn--clip' type={buttonTwo} buttonSize='btn--wide' buttonStyle={btnStyleTwo}>{buttonTwo}</Button>
                </Link>
              ) : (
                <Link className={btnStyleTwo} href={urlTwo}>
                  {buttonTwo}
                </Link>
              ))
            }
            </div>
        </div>
    </section>
    {/* <div className={location}>
      <section className='d-flex flex-column content-center text-center banner'>
        <h1>{title}</h1>
        <h2 className='mx-auto max-w-lg'>{subtitle}</h2>
        {url === '' ? (
          null
        ) : ( hasStyle === true ? (
          <Link href={url}>
            <Button type={button} buttonSize='btn--wide' buttonStyle={btnStyle}>{button}</Button>
          </Link>
        ) : (
          <Link href={url}>
            <button className={` ${btnStyle} `} >{button}</button>
          </Link>
        ))
        }
      </section>
    </div> */}
    </>
  )
}

export default Jumbotron
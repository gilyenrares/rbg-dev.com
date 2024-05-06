import React, { useEffect } from 'react'
import "./Jumbotron.css"
import Link from 'next/link'
import Button from './Button'

type JumbotronProps = {
  location: string
  title: string
  subtitle: string
  url: string
  button: string
  btnStyle: string
}


const Jumbotron = ({ location, title, subtitle, url, button, btnStyle }: JumbotronProps) => {
  return (
    <div className={location}>
      <section className='d-flex flex-column align-items-center text-center banner'>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        {url === '' ? (
          null
        ) : (
          <Link href={url}>
            <Button type={button} buttonSize='btn--wide' buttonStyle={btnStyle}>{button}</Button>
          </Link>
        )
        }
      </section>
    </div>
  )
}

export default Jumbotron
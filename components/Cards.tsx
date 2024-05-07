import React from 'react'
import './Cards.css'
import Button from './Button'
import Image from 'next/image'

const Cards = (props: any) => {
  const cards = props.cards

  return (
    <>
      <div className='card--custom grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center'>
        {cards.map((card: any) => (
          <section key={card.id} className='card flex flex-col items-start m-4'>
            <h3 className='mb-4 whitespace-nowrap text-white'>{card.title}</h3>
            <div className='card-icon'>
              <Image src={card.img} alt={card.title + " badge"} height={100} width={100} />
            </div>
            <article className='card-text my-auto'>
              <p>{card.p1}</p>
              <p>{card.p2}</p>
              <p>{card.p3}</p>
            </article>
            <a href={card.url} target='_blank' rel='noreferrer'>
              <Button
                buttonStyle='btn--info'
                buttonSize='btn--large'
              >
                Find out more
              </Button>
            </a>
          </section>))}
      </div>
    </>
  )
}

export default Cards
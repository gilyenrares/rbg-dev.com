import React from 'react'
import './Cards.css'
import Button from './Button'
import Image from 'next/image'
import { DiVim } from 'react-icons/di'
import { FaCheck } from 'react-icons/fa'
import { FaX } from 'react-icons/fa6'

const Cards = (props: any) => {
  const cards = props.cards

  return (
    <>
      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 container mx-auto p-10 justify-center'>
        {cards.map((card: any) => (
          <section key={card.id} className='card--custom card flex flex-col items-center m-4'>
            <div className='bookmark border-4 border-red-500 text-white bg-red-800 w-40 text-center'>{card.type}</div>
            <h3 className='mb-4 whitespace-nowrap text-white  text-xl'>{card.title}</h3>
            <div className='card-icon'>
              <Image className='card-icon' src={card.img} alt={card.title + " badge"} height={100} width={100} />
            </div>
            {(card.display === 'services') ?
              <div className='card-text my-auto'>
                <h2 className=' text-4xl text-white text-center'>{card.price}</h2>
                <ul className='text-center grid grid-cols-1 justify-items-start'>
                  {card.itemList.map((item: any) => (<li key={item.id} className='flex items-center text-lg text-white'>{(item.isIncluded === true) ? <FaCheck className='mr-2 text-green-500' /> : <FaX className='mr-2 text-red-500' />} {item.name}</li>))}

                </ul>

              </div>
              :
              <article className='card-text my-auto'>
                <p>{card.p1}</p>
              </article>
            }
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
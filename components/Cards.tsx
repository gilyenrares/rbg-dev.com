import React from 'react'
import './Cards.css'
import Button from './Button'
import Image from 'next/image'
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
                <ul className='text-left grid grid-cols-1 justify-items-start'>
                  {card.itemList.map((item: any) => (<li key={item.name + item.id} className='flex items-center text-lg text-white py-2'>{(item.isIncluded === true) ? <FaCheck className='mr-2 text-green-500 w-5' /> : <FaX className='mr-2 text-red-500' />} {item.name}</li>))}

                </ul>
                <hr></hr>
                <div className='grid py-3 grid-cols-6 gap-1'>
                  {card.techList.map((tech: any) => (<Image key={tech.id} className='' src={tech.url} height={20} width={20} alt='icon' />))}
                </div>
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
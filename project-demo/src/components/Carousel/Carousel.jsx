import React from 'react'
import './Carousel.css'

const Carousel = () => {
  return (
    <div className='carousel'>
        <div className='group'>
            <div className='card'>Supa Blox</div>
            <div className='card'>Hype Blox</div>
            <div className='card'>Ultra Blox</div>
            <div className='card'>Frame Blox</div>
            <div className='card'>Figma</div>
            <div className='card'>Canva</div>
        </div>
        <div aria-hidden className='group'>
            <div className='card'>Supa Blox</div>
            <div className='card'>Hype Blox</div>
            <div className='card'>Ultra Blox</div>
            <div className='card'>Frame Blox</div>
            <div className='card'>Figma</div>
            <div className='card'>Canva</div>
        </div>
    </div>
  )
}

export default Carousel
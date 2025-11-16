import React from 'react'
import Hero from '../../assets/hero.jpg'
import Navbar from '../Navbar/Navbar'
import {motion} from 'framer-motion'

const Intro = () => {
  return (
    <div className='h-[85vh] bg-no-repeat bg-cover bg-center rounded-b-[70px]'
    style={{backgroundImage:`URL(${Hero})`}}>
    <Navbar/>
    <div className="flex justify-between mt-24 px-16">
      <div className="w-[33vw] flex flex-col gap-7">
        <h4 className='text-blue-400/80 font-sans text-2xl font-extrabold text-shadow-2xs text-shadow-black/50'>Hey, I'm Liam,</h4>
        <motion.h1 
        initial={{opacity:0, x:-50}}
        whileInView={{opacity:1, x:0}}
        transition={{duration:1.5, ease:"backInOut"}}
        className='text-white text-[80px] font-extrabold text-shadow-2xs text-shadow-black leading-23'>
          Interior Designer
        </motion.h1>
      </div>
      <div className="w-[33vw] flex flex-col justify-end gap-4">
        <h3 className='text-white text-3xl font-bold'>Great designs should be invisible</h3>
        <p className='text-cyan-400 text-sm'>From logo to language, I build brands that connect and convert</p>
      </div>
    </div>

    <div className=" text-cyan-700 flex mt-10 font-bold px-16 justify-between">
      <div className='w-[25vw] text-lg'>
      <h5 className=''>#01</h5>
      <p>Brand Strategy</p>
      </div>
      <div className='w-[25vw] text-lg'>
      <h5 className=''>#02</h5>
      <p>Brand Identity Design</p>
      </div>
      <div className='w-[25vw] text-lg'>
      <h5 className=''>#03</h5>
      <p>Packaging Design</p>
      </div>
      <div className='w-[25vw] text-lg'>
      <h5 className=''>#04</h5>
      <p>Creative Direction</p>
      </div>
    </div>
    </div>
  )
}

export default Intro
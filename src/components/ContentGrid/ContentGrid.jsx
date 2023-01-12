import React from 'react'
import './ContentGrid.css'
import image from '../../assets/image-web-3-desktop.jpg'

export default function ContentGrid() {
  return (
    <section className='my-36 grid grid-rows-2 grid-cols-3 gap-x-6 gap-y-6'>
        <div className='div1'>
            <img className=' w-full ' src={image} alt="" />
        </div>
        <div className='div2 w-full h-auto bg-cyan-900/100 py-6 px-4'>
            <h1 className=' font-bold font-sans text-5xl text-orange-300'>New</h1>
            <div className='my-6'>
                <h3 className=' font-bold text-2xl text-white my-2'>Hydrogen vs Electric cars</h3>
                <p className=' text-sm text-gray-400'>will hydrogen-ffueeled cars ever catch up to EVs?</p>
            </div>
            <hr />
            <div className='my-6'>
                <h3 className=' font-bold text-2xl text-white my-2'>Hydrogen vs Electric cars</h3>
                <p className=' text-sm text-gray-400'>will hydrogen-ffueeled cars ever catch up to EVs?</p>
            </div>
            <hr />
            <div className='my-6'>
                <h3 className=' font-bold text-2xl text-white my-2'>Hydrogen vs Electric cars</h3>
                <p className=' text-sm text-gray-400'>will hydrogen-ffueeled cars ever catch up to EVs?</p>
            </div>
        </div>
        <div className='div3'>
            <h1 className=' text-7xl text-black '>The Bright Future of Web 3.0?</h1>
            
        </div>
        <div className='div4 flex flex-col justify-between text-xl'>
            <p>We dive into the next evolution of the web that
                claims to put the power of the platforms back
                into the hands of the people. But is it really
                fulfilling its promise?</p>
                <button className=' my-4 p-3 bg-slate-800 text-white text-bold'>READ MORE</button>
        </div>
    </section>
  )}

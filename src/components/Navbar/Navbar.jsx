import React from 'react'
import logo from '../../assets/logo.svg'


export default function Navbar() {
  return (
    <nav className='flex justify-between'>
        <img className=' w-11' src={logo} alt="Logo" />

        <ul className='flex justify-between'>
            <li className='mr-4 hover:text-orange-300'><a href="#">Home</a></li>
            <li className='mr-4 hover:text-orange-300'><a href="#">New</a></li>
            <li className='mr-4 hover:text-orange-300'><a href="#">Popular</a></li>
            <li className='mr-4 hover:text-orange-300'><a href="#">Trending</a></li>
            <li className='mr-4 hover:text-orange-300'><a href="#">Categorias</a></li>
        </ul>
    </nav>
  )
}

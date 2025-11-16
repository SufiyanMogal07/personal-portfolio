import React from 'react'

const Footer = () => {
  return (
    <footer className='py-2 flex justify-center items-end h-10'>
        <span>&copy; {new Date().getFullYear()} Sufiyan Mogal, All rights reserved</span>
    </footer>
  )
}

export default Footer
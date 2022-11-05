import React from 'react'
import { Link } from 'react-router-dom'
import './Header1.css'
function Header1() {
  return (
    <div className='Header'>
    <ul className='Navigation'>
       <li><Link to ="/">Home1</Link></li>
       <li><Link to ="/about">About1</Link></li>
       <li><Link to ="/contact">Contact</Link></li>
    </ul>
    </div>
  )
}

export default Header1

import React from 'react'
import style from '../../styles/NavBar.module.css'
import { logo } from '../../Images'
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className={style.container} >
        <img src={logo} alt="logo" className={style.logo} />
        <ul>
            <li>
                About Us
            </li>
            <li>
                Our Services
            </li>
            <li>
                Our Products
            </li>
            <li>
                Communities
            </li>
            <li>
                Incubation Centers
            </li>
            <li>
                Meet The Team
            </li>
            <li>
                Contact Us
            </li>
        </ul>
        <div className={style.language} >
            EN
        </div>
    </nav>
  )
}

export default Navbar
import { useState } from 'react'
import './Navbar.css'
import { Link, NavLink } from 'react-router-dom'

function Navbar () {
    const [open , setOpen] = useState(false)
    return (
      <div className='navbar'>
        <div className='top-navbar'> 
            <img className='img-top' src="/img/AbstractDesign(1).png" alt =''></img>
            <img className='img-top' src="/img/AbstractDesign.png"></img>
            <div className='middle-top-nav'>
            <p>Admission is Open, Grab your seat now</p>
            <img src="/img/Icon.png"></img>
            </div>
            <img className='img-bottom' src="/img/AbstractDesign(4).png"></img>
            <img className='img-top' src="/img/AbstractDesign(3).png"></img>
        </div> 
            <div className='bottom-navbar'>
                <div className='bottom-left-nav'>
                <img className='bottom-left-nav-little' src="img/shape-14.png" alt =''></img>
                <img src="img/LittleLearners.png" alt=''></img>
                </div>
                <nav className='nav'>
                <ul>
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/about'>About Us</NavLink></li>
                    <li><NavLink to='/academics'>Academics</NavLink></li>
                    <li><NavLink to='/admissions'>Admissions</NavLink></li>
                    <li><NavLink to='/studentlife'>Student Life</NavLink></li>
                    <li className='contact-btn'><NavLink to='/contact'>Contact</NavLink></li>
                </ul>
                </nav>
                <nav className='subnav'>
                <div className='nav-logo'> 
                    <img src='./img/navbar.png' alt='' onClick={() => setOpen(!open)}></img>
                </div>
                <div className={open ? 'side-bar':'side-bar2'}>
                 
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/about'>About Us</NavLink></li>
                    <li><NavLink to='/academics'>Academics</NavLink></li>
                    <li><NavLink to='/admissions'>Admissions</NavLink></li>
                    <li><NavLink to='/studentlife'>Student Life</NavLink></li>
                    <li className='contact-btn'><NavLink to='/contact'>Contact</NavLink></li>
                  

                </div>
                </nav>
            </div>
        <div>

        </div>
      </div>

    )
}

export default Navbar
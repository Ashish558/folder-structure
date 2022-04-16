import React from 'react'
import NavItem from './navItem'

// this is a shared component, 
export default function Navbar() {
    

    return (
        <div>
            <img src='./logo.png' />
            <div>
                <NavItem text='Home' linkTo='./home' />
                <NavItem text='Design' linkTo='./design'  />
                <NavItem text='All Duonuts' linkTo='./home'  />
                <NavItem text='What are Duonuts' linkTo='./home'  />
                <NavItem text='What are Duonuts' linkTo='./home'  />
                <NavItem text='About Us' linkTo='./home'  />
                <NavItem text='Contact Us' linkTo='./home'  />
            </div>
            <div>
                <button>Sign in</button>
                <button>Sign up</button>
            </div>
        </div>
    )
}

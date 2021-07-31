import React from 'react'
import { NavLink } from 'react-router-dom';
import NavberStyle from './Navbar.module.css'
import $ from 'jquery'
function Navber() {
    const navSlide = () => {
        const navAction = document.querySelector(`.${NavberStyle.Nav_Action}`);
        const nav = document.querySelector(`.${NavberStyle.Nav_Links}`);
        const NavLinks = document.querySelectorAll(`.${NavberStyle.Nav_Links} li`);
        //toggle nav
        nav.classList.toggle(`${NavberStyle.Nav_active}`)
        //Animate Links

        NavLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                
                link.style.animation = `${NavberStyle.navLinkFade} 1s ease forwards ${index / 7 + .3}s`
            }
        })
        //navAction Animation
        navAction.classList.toggle(`${NavberStyle.toggle}`);

    }

    return (


        <>
            <div className={`${NavberStyle.nav_bg}     `}>
                <nav className="row container  mx-auto " >
                    <div className={`${NavberStyle.logo} `}>
                        <NavLink className="nav-link" to="/home"> <h4>Recipes</h4></NavLink>
                    </div>
                    <ul className={`${NavberStyle.Nav_Links}     `}>

                        <li>
                            <NavLink className="nav-link " to="/home">Home</NavLink>
                        </li>
                        <li>
                            <NavLink className="nav-link " to="/contact">Contact Me</NavLink>
                        </li>


                    </ul>

                    <button onClick={navSlide} className={`btn ${NavberStyle.Nav_Action}`}>
                        <div className={`${NavberStyle.line1}`}></div>
                        <div className={`${NavberStyle.line2}`}></div>
                        <div className={`${NavberStyle.line3}`}></div>
                    </button>
                </nav>
            </div>

        </>
    )
}

export default Navber

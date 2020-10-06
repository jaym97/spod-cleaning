import React from 'react'
import { Link } from 'react-router-dom'

import HamburgerMenu from '../hamburger-menu/hamburger-menu.component'

import './header.styles.scss'

const Header = () => {
    const imgPathContext = require.context('../../assets/img/')

    return (
        <header className="main-header">
            <div className="logo-container">
                <Link to="/">
                    <img src={imgPathContext('./logo.png')} alt="Spod Intgrated" className="logo" />
                    <span className="visually-hidden">Click to go the homepage</span>
                </Link>

                <Link to="/" className="logo-text">Spod Integrated</Link>
            </div>

            <div className="spacer" />

            <nav className="main-header-nav">
                <ul className="main-header-wrapper">
                    <li><Link to="/">Home</Link></li>

                    <li><Link to="/services">Services</Link></li>

                    <li><Link to="/about-us">About Us</Link></li>

                    <li><Link to="/contact-us">Contact Us</Link></li>
                </ul>
            </nav>

            <HamburgerMenu />
        </header>
    )
}

export default Header

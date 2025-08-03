'use client';
import React from 'react';
import Link from 'next/link';
import Button from '../components/Button';

const Navbar = () => {
  return (
      <nav className="home-navbar">
        <div className="home-navbar__left"></div>
        <div className="home-navbar__center"> Pádel - Admin </div>
        <div className="home-navbar__right">
          <Link className="home-navbar__link" href="/login">
            <Button className="home-navbar__btn">Iniciar Sesión</Button>
          </Link> 
          <Link className="home-navbar__link" href="/register"> 
            <Button className="home-navbar__btn">Registrarse</Button>
          </Link>
        </div>
       
      </nav>
  )
}

export default Navbar

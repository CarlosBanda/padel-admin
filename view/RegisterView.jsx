import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTableTennisPaddleBall } from '@fortawesome/free-solid-svg-icons';

const RegisterView = () => {
  return (
    <div className="register__container">
     <div  className="register__card">
          <div className="register__logo">
               <FontAwesomeIcon icon={faTableTennisPaddleBall} className="register__icon" />
               <span className="register__brand">Padel</span>
          </div>
          <h1 className="register__title">Regístrate</h1>

          <form className="register__form">
               <div className="register__group">
                    <label className="register__label" for="name">Nombre</label>
                    <input className="register__input" type="text" id="name" />
               </div>

               <div className="register__group">
                    <label className="register__label" for="email">Correo</label>
                    <input className="register__input" type="email" id="email" />
               </div>

               <div className="register__group">
                    <label className="register__label" for="password">Contraseña</label>
                    <input className="register__input" type="password" id="password" />
               </div>

               <button className="register__button register__button--accent">Registrarse</button>
          </form>
          <p className="register__link">
               ¿Ya tienes cuenta? <a href="/login">Iniciar sessión</a>
          </p>
     </div>
    </div>
  )
}

export default RegisterView

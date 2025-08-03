import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTableTennisPaddleBall } from '@fortawesome/free-solid-svg-icons';

const LoginView = () => {
  return (
    <div className="login__container">
     <div  className="login__card">
          <div className="login__logo">
               <FontAwesomeIcon icon={faTableTennisPaddleBall} className="login__icon" />
               <span className="login__brand">Padel</span>
          </div>
          <h1 className="login__title">Inicia Sesión</h1>

          <form className="login__form">

            <div className="login__group">
                <label className="login__label" for="email">Correo</label>
                <input className="login__input" type="email" id="email" />
            </div>

            <div className="login__group">
                <label className="login__label" for="password">Contraseña</label>
                <input className="login__input" type="password" id="password" />
            </div>

            <p className="login__forgot-password">
              <a href="/login">
                ¿Olvídaste tu contraseña?
              </a>
            </p>

            <button className="login__button login__button--accent">Iniciar Sesión</button>
          </form>
          <p className="login__link">
               ¿No tienes una cuenta? <a href="/register">Regístrate</a>
          </p>
     </div>
    </div>
  )
}

export default LoginView

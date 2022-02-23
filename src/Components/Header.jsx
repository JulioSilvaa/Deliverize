import React from 'react'
import logo from "../assets/logo.png"
import "../Pages/Styles/Header.css"

export const Header = () => {
  return (
    <header className="Header">
    <div className="Header__Logo">
      <img src={logo} alt="" />
    </div>

    <div className="Inputs__Header">
      <input className="Inputs__Header__option" type="option" />
      <input className="Inputs__Header__search" />
    </div>

    <div className="Buttons__Header">
      <button className="Buttons__Header__login">Entrar</button>
      <button className="Buttons__Header__cart">Carrinho</button>
    </div>
  </header>
  )
}

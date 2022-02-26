import React from "react";
import logo from "../assets/logo.png";
import "../Pages/Styles/Header.css";
import { FaCartArrowDown, FaRegUser } from "react-icons/fa";

export const Header = () => {
  return (
    <header className="Header">
      <div className="Header__Logo">
        <img src={logo} alt="Logo da empresa" />
      </div>

      <div className="Inputs__Header">
        <div className="Inputs__Header__ContainerInputs">
          <div className="Inputs__Header__option">
            <label for="entrega">Entrega:</label>
            <select name="Entrega">
              <option value="saab">R. Antonio Braune, 222</option>
              <option value="saab">Minha rua, 333222</option>
            </select>
          </div>
          <div className="Inputs__Header__search">
            <input value="Busque por estabelecimento ou produtos" />
          </div>
        </div>
      </div>

      <div className="Buttons__Header">
        <div className="Buttons__Header__login">
            <FaRegUser color="#D80000" />
          <a href="#">Entrar</a>
        </div>
        <div className="Buttons__Header__cart">
          <FaCartArrowDown color="#D80000" width="16px" />
          <a href="#">Carrinho</a>
        </div>
      </div>
    </header>
  );
};

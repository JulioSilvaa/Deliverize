import React from "react";
import "../Pages/Styles/Main.css";
import "../assets/hamburguer.png";
import hamburguer from '../assets/hamburguer.png'

export const CardHamburguer = ({ info }) => {


  return (
    <>
      <div className="Hamburguer__menu">
        <div className="Hamburguer__menu__img">
          <img src={hamburguer} alt="" />
          {/* <img
            src={info.url_image}
            alt="imagem do Hamburguer"
          /> */}
        </div>
        <div className="Hamburguer__menu__info">
          <h3>{info.nm_product}</h3>
          <p>{info.description}</p>
          <div className="Hamburguer__menu__price">
            <p> R$ {info.vl_discount} </p>
            <p>
              <s>R$ {info.vl_price}</s>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

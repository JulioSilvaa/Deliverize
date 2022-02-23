import React from "react";
import { Header } from "../../Components/Header";
import "../Styles/Main.css";

export const HomePage = () => {
  return (
    <>
      <Header />

      <main className="main__content">
        <div className="Hamburguer__menu">
          <div className="Hamburguer__menu__img">
            <img src="https://picsum.photos/id/237/200/300" alt="" />
          </div>
          <div className="Hamburguer__menu__info">
            <h3>Oferta Picanha Cheddar Bacon</h3>
            <p>
              Hambúrguer de picanha, molho de picanha, cebola crispy, bacon,
              queijo cheddar, molho cheddar e pão mix de gergelim
            </p>
            <div className="Hamburguer__menu__price">
              <p> R$31,99</p>
              <p>
                <s>R$ 34,95</s>
              </p>
            </div>
          </div>
        </div>
        {/*Informações do card do Hamburguer */}
        <div className="Nave__menu">
          <div className="Nave__menu__addItem">
            <h4>Adicionar Ingredientes</h4>
            <p>Até 8 ingredientes</p>
          </div>
          <div className="Nave__menu__add">
            <ul>
              <div className="Nave__menu__addCheddar">
                <p>queijo cheddar</p> <p>+ 1.22</p>
                <button>adicinar</button>
              </div>
              <hr />
              <div className="Nave__menu__addQueijo">
                <p>queijo cheddar</p> <p>+ 1.22</p> <button>adicinar</button>
              </div>
              <hr />
              <div className="Nave__menu__addCebola">
                <p>queijo cheddar</p> <p>+ 1.22</p> <button>adicinar</button>
              </div>
              <hr />
              <div className="Nave__menu__addBacon">
                <p>queijo cheddar</p> <p>+ 1.22</p> <button>adicinar</button>
              </div>
              <hr />
            </ul>
          </div>
          <div className="input__talher">
            <div className="input__talher__true">
              <p>Precisa de talher ?</p>
              <label>sim</label>
              <input type="checkbox" name="sim" id="" />
            </div>

            <div className="input__talher__false">
              <label>não</label>
              <input type="checkbox" name="não" id="" />
            </div>
          </div>

          <div className="button__addToCart">
            <button>increment</button>
            <button>adicionar</button>
          </div>
        </div>
      </main>
    </>
  );
};

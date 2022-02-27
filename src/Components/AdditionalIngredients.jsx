import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa";


import "../Pages/Styles/Main.css";
export const AdditionalIngredients = ({ increments }) => {
  return (
    <>
      <div className="Nave__menu__addItem">
        <div className="Nave__menu__addItem__info">
          <h4>{increments.group}</h4>
          <p>Até {increments.max_itens} ingredientes</p>
        </div>
      </div>
      <div className="Nave__menu__add">
        <div>
          {increments.itens.map((item) => {
            return (
              <div className="Nave__menu__addIngredients">
                <div>
                  <p>{item.nm_item}</p>
                  <p>+ R$ {item.vl_item.toFixed(2).replace(".", ",")}</p>
                </div>
                <div className="Nave__meni__ButtonsAddItem">
                  <span>
                    <FaMinus color="#D80000" size={"14"} />
                  </span>
                  2
                  <span>
                    <FaPlus color="#D80000" size={"14"} />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

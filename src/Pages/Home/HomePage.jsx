import React, { useState } from "react";
import "../Styles/Main.css";

import { useRequestData } from "../../Hooks/useRequestData";
import { Base_URL } from "./../../Constants/Base_URL";

import { Header } from "../../Components/Header";
import { CardHamburguer } from "./../../Components/CardHamburguer";
import { AdditionalIngredients } from "./../../Components/AdditionalIngredients";
import { ChooseCutlery } from "../../Components/ChooseCutlery";
import { FaPlus, FaMinus } from "react-icons/fa";
import Loader from "../../Components/Loader";
import Modal from "../../Components/Modal";

export const HomePage = () => {
  const [dataAPI, isLoading] = useRequestData(Base_URL);
  const [isModalVisible, setModalVisible] = useState(false);

  const hamburguerinfo = dataAPI.map((info) => {
    return <CardHamburguer info={info} key={info.id} />;
  });

  const additionalIncredient = dataAPI.map((item) => {
    return (
      <AdditionalIngredients increments={item.ingredients[0]} key={item.id} />
    );
  });

  const chooseCutlery = dataAPI.map((talher) => {
    return <ChooseCutlery choose={talher.ingredients[1]} key={talher.id} />;
  });

  return (
    <>
      {isLoading === false ? (
        <>
          <Header />
          <main className="main__content">
            {hamburguerinfo}
            <div className="Nave__menu">
              {additionalIncredient}
              <div className="input__talher">{chooseCutlery}</div>
              <div className="button__addToCart">
                <div className="button__addToCart__amount ">
                  <span>
                    <FaMinus color="#D80000" size={"14"} />
                  </span>
                  2
                  <span>
                    <FaPlus color="#D80000" size={"14"} />
                  </span>
                </div>
                <button
                  onClick={() => setModalVisible(true)}
                  className="button__addToCart__addInCart"
                >
                  Adicionar
                </button>
              </div>
            </div>
          </main>
        </>
      ) : (
        <Loader />
      )}
      {isModalVisible ? (
        <Modal>
          <h1>Modal do carrinho</h1>
        </Modal>
      ) : null}
    </>
  );
};

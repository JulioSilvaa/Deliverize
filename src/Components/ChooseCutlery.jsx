import React from "react";
import "../Pages/Styles/Main.css";

export const ChooseCutlery = ({ choose }) => {
  return (
    <>
      <div className="input__choose__talher">
        <p>{choose.group}</p>
      </div>
      <div className="input__talher__checkBox">
        <div className="input__talher__checkBox__true">
          <label>sim</label>
          <input type="checkbox" name="sim" id="" />
        </div>
        <div className="input__talher__checkBox__false">
          <label>não</label>
          <input type="checkbox" name="não" id="" />
        </div>
      </div>
    </>
  );
};

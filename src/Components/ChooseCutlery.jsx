import React from "react";
import "../Pages/Styles/Main.css";

export const ChooseCutlery = ({ choose }) => {
  return (
    <div className="input__choose__talherContainer">
      <div className="input__choose__talher">
        <p>{choose.group}</p>
      </div>
      <div className="input__talher__checkBox">
        <div className="input__talher__checkBox__true">
          <label checked for="radio-0">sim</label>
          <span></span>
          <input type="radio" name="sim" value="0" id="1" />
        </div>
        <div className="input__talher__checkBox__false">
          <label for="radio-1">não</label>
          <span></span>
          <input type="radio" name="não" value="1" id="2" />
        </div>
      </div>
    </div>
  );
};

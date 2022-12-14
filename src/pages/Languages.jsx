import React from "react";
import { CV } from "../utils/cv";
import "../styles/Languages.scss";

const Languages = (about) => {
  return (
    <div className="container-information-languages">
      {CV.languages.map((info) => {
        return (
          <div className="item-information-languages">
            <p>{info.language}</p>
            <p>{info.level}</p>
            <p>{info.stars}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Languages;

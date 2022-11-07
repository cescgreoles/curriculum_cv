import React from "react";
import "../styles/Education.scss";
import { CV } from "../utils/cv";

const Education = ({ about }) => {
  return (
    <div className="container-information">
      {CV.education.map((info) => {
        return (
          <div className="p-information">
            <p>{info.name}</p>
            <p>{info.date}</p>
            <p>{info.where}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Education;

import React from "react";
import { data } from "../../data";
import "./categories.styles.scss";
import CardComponent from "../CardComponent/CardComponent";


function CardsContainer() {
  return (
    <div className="categories-container">
      {data.map((d) => (
        <CardComponent key={d.id} image={d.image} categorie={d.categorie}/>
      ))}
    </div>
  );
}

export default CardsContainer;

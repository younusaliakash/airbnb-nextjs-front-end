import React from "react";
import { urlFor } from "../../sanity";

const HomeHero = ({ hero }) => {
  // console.log(hero);
  return (
    <div className="home_hero_container container">
      <div className="container_wrapper">
        <div className="hero_image">
          <img src={urlFor(hero?.image)} alt="" />
        </div>
        <div className="hero_information">
          <div className="info_wrapper">
            <h1>{hero?.heroText}</h1>
            <a href={hero?.pathName} target="_blank" rel="noopener noreferrer">
              <div className="btn_container">
                <button>{hero?.buttonName}</button>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;

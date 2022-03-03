import React from "react";
import { urlFor } from "../../sanity";

const Discover = ({ discover }) => {
  console.log(discover);
  return (
    <>
      {discover ? (
        <div className="discover_container">
          <div className="container_wrapper">
            <div className="container_title">
              <h1>Discover Airbnb Experiences</h1>
            </div>
            <div className="main_container">
              <div className="discover_box_wrapper">
                {discover.discoverImage?.map((item, i) => (
                  <div key={i} className="discover_card">
                    <div className="card_wrapper">
                      <div className="card_thumbnail">
                        <img src={urlFor(item)} alt="" />
                      </div>
                      <div className="discover_info">
                        <h2>{item.discoverText}</h2>
                        <a
                          href={item.path}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div className="btn_container">
                            <button>{item.buttonName}</button>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Discover;

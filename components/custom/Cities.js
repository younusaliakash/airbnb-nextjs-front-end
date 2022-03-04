import Link from "next/link";
import React from "react";
import { urlFor } from "../../sanity";

const Cities = ({ cities }) => {
//   console.log(cities);
  return (
    <>
      {cities ? (
        <div className="cities_container container">
            <h1>Inspiration for your next trip</h1>
          <div className="container_wrapper">
            {cities?.map((city, i) => (
              <Link key={i} href={`/city/${city?._id}`}>
                <a>
                  <div className={`city_card ${city?.cityName}`}>
                    <div className="card_wrapper">
                      <div className="thumbnail">
                        <img src={urlFor(city?.cityImage)} alt="" />
                      </div>
                      <div className="city_name_and_info">
                        <h2>{city?.cityName}</h2>
                        <p>{city?.distance}</p>
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Cities;

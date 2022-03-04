import React from "react";
import Header from "../components/common/Header";
import { sanityClient, urlFor } from "../sanity";

const properties = (properties) => {
  const allProperty = properties.properties
  return (
    <>
      <Header />
      {allProperty.length > 0 ? (
        <div className="properties_container container">
          <div className="wrapper">
            {allProperty.map((place, i) => (
              <div key={i} className="property_grid">
                <div className="image">
                    <img src={urlFor(place?.mainImage)} alt="" />
                </div>
                <div className="text">
                  <p className="property_name">{place.propertyName}</p>
                  <p className="price">${place.price} SGD/per night</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : <h1>No Property</h1>}
    </>
  );
};

export const getServerSideProps = async () => {
  const query = `*[ _type == "property" ]`;
  const properties = await sanityClient.fetch(query);

  return {
    props: {
      properties,
    },
  };
};

export default properties;

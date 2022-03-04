import { useRouter } from "next/router";
import React from "react";
import Header from "../../components/common/Header";
import { sanityClient, urlFor } from "../../sanity";

const CityProperties = ({ properties }) => {
//   console.log(properties);
  const id = useRouter().query.slug;
//   console.log(id);

  const property = properties.filter((place) => place.cityName._ref == id);
//   console.log(property);

  return (
    <>
      <Header />
      {property.length > 0 ? (
        <div className="city_base_property">
          <div className="properties_container">
            <p>We found {property.length} in the city</p>
            <div className="properties_list_container">
              <div className="property_list">
                {property.map((item, i) => (
                  <div key={i} className="property_grid_card">
                    <hr className="line" />
                    <div className="wrapper">
                      <div className="property_image">
                        <img src={urlFor(item.mainImage)} alt="" />
                      </div>
                      <div className="property_intro">
                        <h2>{item.propertyName}</h2>
                        <p>
                          <span>{item.guest}</span> guests &bull;{" "}
                          <span>{item.bedrooms}</span> bedrooms &bull;{" "}
                          <span>{item.beds}</span> bed &bull;{" "}
                          <span>{item.bathrooms}</span> bathroom
                        </p>
                        <div className="price">
                          <h2>${item.price} SGD/per night</h2>
                        </div>
                      </div>
                    </div>
                    <hr className="line_two" />
                  </div>
                ))}
              </div>
              <div className="property_map_section">
              <div className="mapouter">
                  <div className="gmap_canvas">
                      <iframe className="gmap_iframe" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Dhaka&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                    </iframe>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export const getServerSideProps = async (pageContext) => {
  const cityId = pageContext.query.slug;

  const query = `*[ _type == "property" ]`;
  const properties = await sanityClient.fetch(query);

  return {
    props: {
      properties,
    },
  };
};

export default CityProperties;

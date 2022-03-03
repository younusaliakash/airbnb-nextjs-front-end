import Link from "next/link";
import React from "react";
import { urlFor } from "../../sanity";

const HomeBottomBanner = ({ banner }) => {
  //   console.log(banner);
  return (
    <>
      {banner ? (
        <div className="banner_container">
          <div className="container_wrapper">
            <div className="banner_image">
              <img src={urlFor(banner?.bannerImage)} alt={banner?.bannerText} />
            </div>
            <div className="banner_text">
              <div className="text_wrapper">
                <h1>{banner?.bannerText}</h1>
              </div>
            </div>
            <div className="banner_btn">
              <Link href={banner?.path}>
                <a>
                  <div className="btn_wrapper">
                    <button>{banner?.buttonName}</button>
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default HomeBottomBanner;

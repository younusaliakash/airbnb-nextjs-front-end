import React from "react";

const HomeNewsContainer = ({ news }) => {
//   const { buttonName, newsText, pathName } = news;
//   console.log(news)

  return (
    <>
      {news ? (
        <div className="home_news_container container">
          <div className="news_container">
            <h1 className="news_title">{news?.newsText}</h1>
            <a href={news?.pathName} target="_blank" rel="noopener noreferrer">
              <div className="button_wrapper">
                <button>{news?.buttonName}</button>
              </div>
            </a>
          </div>
        </div>
      ) : null}
    </>
  );
};

// export const getServerSideProps = () => {
//     const query = '*[ _type == "homeNews"]'
//     const homeNews = sanityClient.fetch(query);

//     console.log(homeNews)

//     if(!homeNews.length){
//       return {
//         props : {
//           homeNews : []
//         }
//       }
//     }else{
//       return{
//         props : {
//           homeNews
//         }
//       }
//     }
//   }

export default HomeNewsContainer;

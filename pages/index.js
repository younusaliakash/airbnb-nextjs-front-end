import Header from "../components/common/Header"
import Discover from "../components/custom/discover"
import HomeBottomBanner from "../components/custom/HomeBottomBanner"
import HomeHero from "../components/custom/HomeHero"
import HomeNewsContainer from "../components/custom/HomeNewsContainer"
import { sanityClient } from "../sanity"

const Home = ({properties, news, cities, homeHero, discover, banner}) => {
  // console.log(discover[0])
  return (
    <div>
      <Header/>
      <section className="home_news">
        <HomeNewsContainer news={news && news[0]}/>
      </section>
      <section className="home_hero">
        <HomeHero hero={homeHero && homeHero[0]} />
      </section>
      <section className="discover">
        <Discover discover={ discover && discover[0]} />
      </section>
      <section className="home_bottom_banner">
        <HomeBottomBanner banner={banner && banner[0]}/>
      </section>
    </div>
  )
}

export const getServerSideProps = async () => {
  const query = '*[ _type == "property"]'
  const properties = await sanityClient.fetch(query);

  const newsQuery = '*[ _type == "homeNews"]'
  const news = await sanityClient.fetch(newsQuery)

  const citiesQuery = '*[ _type == "homeNews"]'
  const cities = await sanityClient.fetch(citiesQuery)

  const homeHeroQuery = '*[ _type == "homeHero"]'
  const homeHero = await sanityClient.fetch(homeHeroQuery)

  const discoverQuery = '*[ _type == "discover"]'
  const discover = await sanityClient.fetch(discoverQuery)

  const bannerQuery = '*[ _type == "homeBottomBanner"]'
  const banner = await sanityClient.fetch(bannerQuery)

  if(!properties.length){
    return {
      props : {
        properties : [],
        news : [],
        cities : [],
        homeHero : [],
        discover : [],
        banner : []
      }
    }
  }else{
    return{
      props : {
        properties,news, cities, homeHero, discover, banner
      }
    }
  }
}

export default Home;

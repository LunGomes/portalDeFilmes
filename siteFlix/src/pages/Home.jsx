import BannerMenu from "../componentes/BannerMenu/BannerMenu";
import CTA from "../componentes/CTA/CTA";
import Review from "../componentes/Review/Review";
import SliderPopulares from "../componentes/SliderPopulares/SliderPopulares";

function Home() {
  return (
    <>
      <BannerMenu />
      <SliderPopulares basePath="/filmes"/>
      <CTA />
      <Review />
    </>
  );
}

export default Home;
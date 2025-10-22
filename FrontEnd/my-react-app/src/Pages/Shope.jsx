import Hero from "../copmonent/Hero/Hero";
import Offers from "../copmonent/offers/Offers";
import Popular from "../copmonent/Popular/Popular";
import NewCollections from "../copmonent/NewCollections/NewCollections";
import NewsLatter from "../copmonent/NewsLatter/NewsLatter";

const Shope = () => {
  return (
    <div>
       <Hero/>
       <Popular/>
       <Offers/>
       <NewCollections/>
       <NewsLatter/>
    </div>
  );
};

export default Shope;
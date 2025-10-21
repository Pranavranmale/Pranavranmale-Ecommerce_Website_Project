import Hero from "../copmonent/Hero/Hero";
import Offers from "../copmonent/offers/Offers";
import Popular from "../copmonent/Popular/Popular";
import NewCollections from "../copmonent/NewCollections/NewCollections";

const Shope = () => {
  return (
    <div>
       <Hero/>
       <Popular/>
       <Offers/>
       <NewCollections/>
    </div>
  );
};

export default Shope;
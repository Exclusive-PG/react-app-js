import React from "react";
import "./App.css";
import ErrorContainer from "./Components/Error_page/errorContainer";
import Header from "./Components/Header/Header";
import Navigation from "./Components/Navigation/Navigation";
import Offer from "./Components/Offer/Offer";
import ContainerSearch from "./Components/Search/ContainerSearch";
import SpecialOfferContainer from "./Components/SpecialOffer/SpecialOfferContainer";
import BonusContainer from "./Components/Bonus/BonusContainer";
import BrandContainer from "./Components/Brand/BrandContainer";
import LatestViewsContainer from "./Components/LateViews/LatestViewsContainer";
import Footer from "./Components/Footer/Footer";
import "./Components/FontAwesomeIcons";
import { Route, Redirect } from "react-router-dom";
import CardMarketContainer from './Components/CardMarket/CardMarketContainer';



const App = () => {
  return (
    <>


      <Route path="/error-page" render={() => <ErrorContainer/>} />

      <Redirect from="/" to="home" />
      <Route
        path="/home"
        render={() => (
          <div>
            <Header />
            <ContainerSearch />
            <Navigation />
            <Offer />
            <SpecialOfferContainer />
            <BonusContainer />
            <BrandContainer />
            <LatestViewsContainer />
            <Footer />
          </div>
        )}
      />
      <Route path = "/card-market" render = {() => <CardMarketContainer/>}/>

    </>
  );
};

export default App;

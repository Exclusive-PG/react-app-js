import { createStore, combineReducers } from "redux";
import ReducerSearch from "./reducer-search";
import SpecialOffers from "./reducer-special-offers";
import BonusReducer from "./reducer-bonus";
import ReducerBrand from "./reducer-brand";
import ViewedProducts from "./reducer-viewed-product";
import ReducerOrderCard from "./reducer-orderCard";


 let reducers = combineReducers({ 
     SearchSection : ReducerSearch ,
     SpecialOffersSection : SpecialOffers,
     BonusSection : BonusReducer,
     BrandSection : ReducerBrand,
     ViewedSection : ViewedProducts,
     CardSection : ReducerOrderCard 
 });

 let store = createStore(reducers);

export default store;
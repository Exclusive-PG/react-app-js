
import { connect } from 'react-redux';
import SpecialOffer from './SpecialOffer';
import { BuyProductAC } from './../../Redux/reducer-special-offers';
import { addProductToListAC } from '../../Redux/reducer-viewed-product';

let mapStateToProps = (state) =>{
    return{
        offers : state.SpecialOffersSection.offers,
        searchContent : state.SearchSection.inputContent
}
}

let mapDispatchToPops = (dispatch) =>{
    return {
        BuyProduct : (idProduct)=>{
            dispatch(BuyProductAC(idProduct));
        },
        addProductToList : (product)=>{
            dispatch(addProductToListAC(product));
        }
    }
}

const SpecialOfferContainer = connect (mapStateToProps,mapDispatchToPops)(SpecialOffer);

export default SpecialOfferContainer;
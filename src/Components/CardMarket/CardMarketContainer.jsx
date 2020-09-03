
import { } from '../../Redux/reducer-search';
import { connect } from 'react-redux';
import CardMarket from './CardMarket';
import { orderedCardAC } from './../../Redux/reducer-orderCard';


let mapStateToProps = (state) =>{
    debugger;
    return{
      listOrderCard : state.CardSection.cardUser,
}
}

let mapDispatchToPops = (dispatch) =>{
    return {
        orderedCard : (ordered,userId)=>{
            dispatch(orderedCardAC(ordered,userId));
        }
    }
}

const CardMarketContainer = connect (mapStateToProps,mapDispatchToPops)(CardMarket);

export default CardMarketContainer;
import { connect } from 'react-redux';
import Bonus from './Bonus';
import { ChangeEmailFieldAC, addEmailAC} from '../../Redux/reducer-bonus';

let mapStateToProps = (state) =>{
    return{
    email : state.BonusSection.email
}
}

let mapDispatchToPops = (dispatch) =>{
    return {
       ValidateEmail:(content) =>{
           dispatch(ChangeEmailFieldAC(content));
       },
       addEmail : (content) =>{
           dispatch(addEmailAC(content));
       }
    }
}

const BonusContainer = connect (mapStateToProps,mapDispatchToPops)(Bonus);

export default BonusContainer;
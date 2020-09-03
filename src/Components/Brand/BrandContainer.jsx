import { connect } from 'react-redux';
import Brand from './Brand';

let mapStateToProps = (state) =>{
    return{
        brands : state.BrandSection.brands
}
}

let mapDispatchToPops = (dispatch) =>{
    return {
        
    }
}

const BrandContainer = connect (mapStateToProps,mapDispatchToPops)(Brand);

export default BrandContainer;
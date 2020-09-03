
import { rerenderInputSearchAC, callBackAC } from '../../Redux/reducer-search';
import { connect } from 'react-redux';
import Search from './Search';

let mapStateToProps = (state) =>{
    return{
    inputField : state.SearchSection.inputContent,
    callBackBool : state.SearchSection.callBack
}
}

let mapDispatchToPops = (dispatch) =>{
    return {
        rerenderInput : (content) =>{
                dispatch(rerenderInputSearchAC(content));
        },
        callBack : (bool) =>{
            dispatch(callBackAC(bool));
        }
    }
}

const ContainerSearch = connect (mapStateToProps,mapDispatchToPops)(Search);

export default ContainerSearch;
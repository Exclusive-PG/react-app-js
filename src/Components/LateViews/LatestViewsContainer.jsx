
import { connect } from 'react-redux';
import LatestViews from "./LatestViews";




let mapStateToProps = (state) =>{

    return{
       viewed : state.ViewedSection.viewed,
}
}



const LatestViewsContainer = connect (mapStateToProps)(LatestViews);

export default LatestViewsContainer;
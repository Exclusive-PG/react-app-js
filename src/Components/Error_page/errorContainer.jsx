import { connect } from "react-redux";
import Error from "./error_page";
import { ChangeEmailFieldAC, addEmailAC } from '../../Redux/reducer-bonus';

let mapStateToProps = (state) => {

  return {
    email: state.BonusSection.email,
  };
};

let mapDispatchToPops = (dispatch) => {
  return {
    ValidateEmail: (content) => {
      dispatch(ChangeEmailFieldAC(content));
    },
    addEmail: (content) => {
      dispatch(addEmailAC(content));
    },
  };
};

const ErrorContainer = connect(mapStateToProps, mapDispatchToPops)(Error);

export default ErrorContainer;

import { connect } from "react-redux";
import {
  setDoughTypeActionCreator,
  setNameActionCreator,
  setPriceActionCreator,
} from "../../store/reducer";
import Main from "./Main";
const mapStateToProps = (state) => {
  return {
    price: state.main.price,
    pizzaName: state.main.pizzaName,
    dough: state.main.dough,
    currentDoughType: state.main.currentDoughType,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setName(value) {
      const action = setNameActionCreator(value);
      dispatch(action);
    },
    setPrice(value) {
      const action = setPriceActionCreator(value);
      dispatch(action);
    },
    setDoughType(value) {
      const action = setDoughTypeActionCreator(value);
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);

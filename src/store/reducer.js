const SET_NAME = "SET_NAME";
const DEFAULT = "DEFAULT";
const SET_PRICE = "SET_PRICE";
const SET_DOUGH_TYPE = "SET_DOUGH_TYPE";

export const setNameActionCreator = (e) => {
  return {
    type: SET_NAME,
    value: e.target.value,
  };
};
export const setPriceActionCreator = (e) => {
  return {
    type: SET_PRICE,
    value: e.target.dataset.price,
  };
};
export const setDoughTypeActionCreator = (e) => {
  return {
    type: SET_DOUGH_TYPE,
    value: e.target.dataset.dtype,
  };
};
const getInitialState = () => {
  return {
    price: {
      result: 299,
      items: {
        dough: 299,
      },
    },
    pizzaName: "_pizza_name",
    dough: {
      doughTypeArray: ["Традиционное", "Тонкое"],
      doughDiameterArray: [23, 30, 35, 40],
    },
  };
};
const reducer = (state = getInitialState(), action = { type: DEFAULT }) => {
  const newState = {
    ...state,
    price: state.price,
    pizzaName: state.pizzaName,
    doughDiameterArray: state.dough.doughDiameterArray,
  };
  switch (action.type) {
    case SET_NAME:
      newState.pizzaName =
        action.value == "" ? getInitialState().pizzaName : action.value;
      return newState;
    case SET_DOUGH_TYPE:
      newState.doughDiameterArray = state.dough.doughDiameterArray =
        action.value === "tradition" ? [23, 30, 35, 40] : [30, 35, 40];
      return newState;
    case SET_PRICE:
      state.price.items.dough = action.value;
      for (let item in state.price.items) {
        let result = 0;
        result += Number(state.price.items[item]);
        newState.price.result = result;
      }
      return newState;
    case DEFAULT:
      return getInitialState();
  }
  return state;
};
export default reducer;

import { useState } from "react";
import { NavLink } from "react-router-dom";
import pizza from "../images/pizza.png";
import {
  setDoughTypeActionCreator,
  setNameActionCreator,
  setPriceActionCreator,
} from "../store/reducer";
const Main = (props) => {
  const setName = (e) => {
    const action = setNameActionCreator(e);
    props.dispatch(action);
  };
  const setPrice = (e) => {
    const action = setPriceActionCreator(e);
    props.dispatch(action);
  };
  const setDoughType = (e) => {
    const action = setDoughTypeActionCreator(e);
    props.dispatch(action);
  };
  const [idxType, newIdxType] = useState(0);
  const setActiveTypeInput = (a) => {
    newIdxType(a);
  };
  const [idxDiameter, newIdxDiameter] = useState(0);
  const setActiveDiameterInput = (a) => {
    newIdxDiameter(a);
  };

  const doughType = props.doughType.map((arrElem, arrElemIdx) => {
    return (
      <div
        onClick={setDoughType}
        key={arrElemIdx}
        className={arrElemIdx === idxType ? "doughElem active" : "doughElem"}
        data-dtype={arrElemIdx === 0 ? "tradition" : "thin"}
      >
        {arrElem}
      </div>
    );
  });
  const doughDiameter = props.doughDiameter.map((arrElem, arrElemIdx) => {
    return (
      <div
        onClick={setPrice}
        key={arrElemIdx}
        className={
          arrElemIdx === idxDiameter ? "doughElem active" : "doughElem"
        }
        data-price={
          arrElem === 23
            ? "299"
            : arrElem === 30
            ? "449"
            : arrElem === 35
            ? "599"
            : "759"
        }
      >
        {arrElem}
      </div>
    );
  });
  return (
    <div className="container">
      <div className="Main">
        <div className="navBar">
          <NavLink to="/" className="navBar__homeLink">
            На главную
          </NavLink>
          <p>Итого: {props.price}grn</p>
        </div>
        <div className="maker">
          <div className="maker__top-maker">
            <h2>Соберите свою пиццу</h2>
            <img src={pizza} alt="pizza" />
          </div>
          <div className="maker__pizza-name">
            <input
              type="text"
              placeholder="Придумайте название"
              onInput={setName}
            />
          </div>
          <div className="maker__bottom-maker">
            <div className="dough-type">{doughType}</div>
            <div className="diameterOfDough">{doughDiameter}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

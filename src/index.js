import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import store from "./store/store";

function render(state) {
  ReactDOM.render(
    <BrowserRouter>
      <App
        price={state.price.result}
        pizzaName={state.pizzaName}
        doughType={state.dough.doughTypeArray}
        doughDiameter={state.dough.doughDiameterArray}
        dispatch={store.dispatch.bind(store)}       
      />
    </BrowserRouter>,
    document.getElementById("root")
  );
}

store.subscribe(() => render(store.getState()));
render(store.getState());

reportWebVitals();

import "./App.scss";
import Main from "./components/Main";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";

function App(props) {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route
          path="/main"
          element={
            <Main
              price={props.price}
              doughType={props.doughType}
              doughDiameter={props.doughDiameter}
              dispatch={props.dispatch}              
            />
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;

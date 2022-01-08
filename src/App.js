import "./App.scss";
import Main from "./components/main/Main";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import MainHOK from "./components/main/MainHOK";

function App(props) {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/main" element={<MainHOK />}></Route>
      </Routes>
    </div>
  );
}

export default App;

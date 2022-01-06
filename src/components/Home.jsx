import { NavLink } from "react-router-dom";
import logo from "../images/main_logo.png";
const Home = () => {
  return (
    <div className="Home">
      <div className="Home__content">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="Home__text">
          <h1>Добро пожаловать в мир, где твоя мечта осуществится!</h1>
          <h2>
            Создай пиццу своей мечты, а не трать время на поиски той самой пиццы
            по всему миру
          </h2>
          <NavLink to="/main">Начать</NavLink>
        </div>
      </div>
    </div>
  );
};
export default Home;

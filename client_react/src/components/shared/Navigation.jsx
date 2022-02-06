import { NavLink, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import "./navigation.css";

const Navigation = () => {
  let navigate = useNavigate();

  return (
    <>
      <nav className="nav__container">
        <div className="nav__left">
          <button
            className="nav__backBtn"
            title="<-Back"
            onClick={() => {
              navigate(-1);
            }}
          >
            <FaArrowLeft />
          </button>
          <div className="nav__heading">&nbsp;Lexus Online IDE</div>
        </div>
        <div className="nav__right">
          <ul className="flex items-center">
            <li className="ml-5">
              <NavLink to="/" activeclassname="active">
                Home
              </NavLink>
            </li>
            <li className="ml-5">
              <NavLink to="/about" activeclassname="active">
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navigation;

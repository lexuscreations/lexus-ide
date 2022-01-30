import { NavLink, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import "./Navigation.css";

const Navigation = () => {
  let navigate = useNavigate();

  return (
    <>
      <nav className="navContainer_nav">
        <div className="navContainer_nav-left_nav">
          <button
            style={{ background: "none", border: "none", cursor: "pointer" }}
            title="<-Back"
            onClick={() => {
              navigate(-1);
            }}
          >
            <FaArrowLeft />
          </button>
        </div>
        <div className="navContainer_nav-right_nav">
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

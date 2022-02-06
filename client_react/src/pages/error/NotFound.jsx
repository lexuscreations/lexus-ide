import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <section>
      <div className="four_zero_four_bg">
        <h1>404</h1>
      </div>

      <div>
        <h3>Look like you're lost</h3>

        <p>the page you are looking for not found!</p>

        <Link className="link_404" to="/">
          <span>/</span>&nbsp;
          <FaHome style={{ marginTop: "0.3rem" }} />
        </Link>
      </div>
    </section>
  );
};

export default NotFound;

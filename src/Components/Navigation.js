import { Link, withRouter } from "react-router-dom";

const Navigation = (props) => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/new-comment">New Comment</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default withRouter(Navigation);

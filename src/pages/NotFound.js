import { Link } from "react-router-dom";
import Layout from "../Layout/Layout";
const NotFound = (props) => {
  return (
    <Layout>
      <p>
        404
        <br />
        the page not found
      </p>
      <Link to="/">go to home page</Link>
    </Layout>
  );
};

export default NotFound;

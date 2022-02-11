import axios from "axios";
import { Link } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import "./newComment.css";

const NewComment = () => {
  const [comment, setComment] = useState({
    name: "",
    email: "",
    content: "",
  });

  const changeHandler = (e) => {
    setComment({ ...comment, [e.target.name]: e.target.value });
  };

  const postCommentHandler = () => {
    axios
      .post("http://localhost:3001/comments", {
        ...comment,
        postId: 10,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch();
  };
  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-md-5">
          <form>
            <h2>add new comment</h2>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                onChange={changeHandler}
                name="name"
                placeholder="name..."
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                className="form-control"
                type="email"
                onChange={changeHandler}
                name="email"
                placeholder="email..."
              />
            </div>
            <div className="form-group">
              <label>Body</label>
              <textarea
                type="textarea"
                onChange={changeHandler}
                name="content"
                className="form-control"
                placeholder="body..."
              />
            </div>

            <Link
              onClick={postCommentHandler}
              className="btn btn-primary"
              to="/"
            >
              add new comment
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewComment;

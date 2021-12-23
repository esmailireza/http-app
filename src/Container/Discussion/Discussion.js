import { useEffect, useState } from "react";
import Comment from "../../Components/Comment/Comment";
import FullComment from "../../Components/FullComment/FullComment";
import NewComment from "../../Components/NewComment/NewComment";
import "./discussion.css";
import { toast } from "react-toastify";
import { getAllComments } from "../../services/getAllCommentsService";
import http from "../../services/httpService";

const Discussion = () => {
  const [comments, setComments] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getComments = async () => {
      try {
        const { data } = await getAllComments();
        setComments(data);
      } catch (error) {
        console.log(error);
        setError(true);
      }
    };
    getComments();
  }, []);

  const selectCommentHandler = (id) => {
    setSelectedId(id);
  };

  const updatedState = () => {
    http
      .get("/comments")
      .then((res) => {
        setComments(res.data);
      })
      .catch((error) => console.log(error));
  };

  const renderedComments = () => {
    let renderValue = <p>loading...</p>;
    if (error) {
      renderValue = <p>fetching data failed !</p>;
      toast.error("there is an error !");
    }
    if (comments && !error) {
      renderValue = comments.map((c) => (
        <Comment
          key={c.id}
          name={c.name}
          email={c.email}
          onClick={() => selectCommentHandler(c.id)}
        />
      ));
    }
    return renderValue;
  };
  return (
    <main>
      <section>{renderedComments()}</section>
      <section>
        <FullComment
          commentId={selectedId}
          setComments={setComments}
          setSelectedId={setSelectedId}
        />
      </section>
      <section>
        <NewComment updatedState={updatedState} />
      </section>
    </main>
  );
};

export default Discussion;

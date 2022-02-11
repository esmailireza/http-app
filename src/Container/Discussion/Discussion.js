import { useEffect, useState } from "react";
import Comment from "../../Components/Comment/Comment";
import "./discussion.css";
import { toast } from "react-toastify";
import axios from "axios";
import FullComment from "../../Components/FullComment/FullComment";

const Discussion = () => {
  const [comments, setComments] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  const [error, setError] = useState(false);
  useEffect(() => {
    const getComments = async () => {
      try {
        const { data } = await axios.get("http://localhost:3001/comments");
        setComments(data);
      } catch (error) {
        //console.log(error);
        setError(true);
      }
    };
    getComments();
  }, []);

  const selectCommentHandler = (id) => {
    setSelectedId(id);
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
          content={c.content}
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
    </main>
  );
};

export default Discussion;

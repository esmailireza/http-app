import axios from "axios";
import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import { deleteComment } from "../../services/deleteCommentService";
import { getAllComments } from "../../services/getAllCommentsService";
import { getOneComment } from "../../services/getOneCommentService";
import "./fullComment.css";
const FullComment = ({ commentId, setComments, setSelectedId }) => {
  const [comment, setComment] = useState(null);
  console.log(commentId);

  const deleteHandler = async () => {
    try {
      await deleteComment(commentId);
      const { data } = await getAllComments();
      setComments(data);
      setSelectedId(null);
      setComment(null);
    } catch (error) {}
  };

  useEffect(() => {
    if (commentId) {
      getOneComment(commentId)
        .then((res) => {
          setComment(res.data);
        })
        .catch();
    }
  }, [commentId]);

  let commentDetail = <p>please select a comment !</p>;
  if (commentId) {
    commentDetail = <p>loading ...</p>;
  }

  if (comment) {
    commentDetail = (
      <div className="FullComment">
        <p>{comment.name}</p>
        <p>{comment.email}</p>
        <p>{comment.body}</p>
        <button onClick={deleteHandler}>Delete</button>
      </div>
    );
  }
  return commentDetail;
};

export default FullComment;

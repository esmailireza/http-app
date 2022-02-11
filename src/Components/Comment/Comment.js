import "./Comment.css";
const Comment = ({ name, email, content, onClick }) => {
  return (
    <div className="comment" onClick={onClick}>
      <p>name:{name}</p>
      <p>email:{email}</p>
      <p>content:{content}</p>
    </div>
  );
};

export default Comment;

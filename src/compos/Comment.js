
import "./Comment.css";
function Comment(props) {
  function formatDate(date) {
    return date.toLocaleDateString(); // Wed Oct 12 2022 12:51:59 GMT+0600 (Восточный Казахстан)
  }
  return (
    <div className=" Comment">
      <div className="UserInfo">
        <img src={props.data.author.avatarUrl} alt="img" />
        <div className="UserInfo-name">{props.data.author.name}</div>
      </div>
      <div className="Comment-text">{props.data.text}</div>
      <div className="Comment-date">{formatDate(props.data.date)}</div>
    </div>
  );
}

export default Comment;

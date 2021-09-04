import discussicon from "../assets/discussicon.png";

export function CardPreview({
  username,
  reponame,
  invitationText,
  topicSelected,
}) {
  return (
    <div className="card-preview w-350">
      <div>{username}</div>
      <div className="break-words">
        is working on this cool project {reponame}
      </div>
      <div className="break-words">
        <img className="inline" src={discussicon} alt="chat icon" />
        {invitationText}
      </div>
      <div>#{topicSelected}</div>
    </div>
  );
}

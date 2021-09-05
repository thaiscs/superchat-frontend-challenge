import discussicon from "../public/assets/discussicon.png";
import Image from "next/image";
import styles from "../styles/Card.module.css";

const CardPreview = ({
  username,
  reponame,
  invitationText,
  topicSelected,
  currentColor,
}) => {
  return (
    <div
      className={`${styles.container} w-350 p-3 rounded ${currentColor} text-white`}
    >
      <div>{username}</div>
      <div className="break-words">
        is working on this cool project {reponame}
      </div>
      <div className="break-words">
        <Image className="inline" src={discussicon} alt="chat icon" />
        {invitationText}
      </div>
      <div>#{topicSelected}</div>
    </div>
  );
};
export default CardPreview;

import Link from "next/link";
const ShareableLink = ({ username, reponame, topic }) => {
  const baseURL = "wwww.find-female-devs.io/";

  return (
    <div>
      <Link
        href={{
          pathname: "/githubrepo/",
          query: {
            username: username,
            reponame: reponame,
            topic: topic,
          },
        }}
      >
        <a>
          {baseURL}
          {username}
        </a>
      </Link>
    </div>
  );
};

export default ShareableLink;

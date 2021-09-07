import Link from "next/link";
const ShareableLink = ({ username, reponame, topic }) => {
  const baseURL = "https://find-female-devs-puce.vercel.app/";

  return (
    <div className="mt-6">
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
        <a>{`${baseURL}githubrepo?username=${username}&reponame=${reponame}&topic=${topic}`}</a>
      </Link>
    </div>
  );
};

export default ShareableLink;

import { Octokit } from "@octokit/core";
import RepoInfo from "../components/RepoInfo";

const token = process.env.ACCESS_TOKEN;
const octokit = new Octokit({
  auth: token,
});

export default function GetGithubRepo({ repository, contributors, topic }) {
  return (
    <RepoInfo
      repository={repository}
      contributors={contributors}
      topic={topic}
    />
  );
}

export async function getServerSideProps({ query }) {
  const username = query.username;
  const reponame = query.reponame;
  const topic = query.topic;

  const response = await octokit.request("GET /repos/{owner}/{repo}", {
    owner: username,
    repo: reponame,
  });

  const repository = await response.data;

  if (!repository) {
    return {
      notFound: true,
    };
  }

  const contributors_url = repository.contributors_url;
  const res = await octokit.request(`GET ${contributors_url}`);
  const contributors = await res.data;

  return {
    props: {
      repository: repository,
      contributors: contributors,
      topic: topic,
    },
  };
}

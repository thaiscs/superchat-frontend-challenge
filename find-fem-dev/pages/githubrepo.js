import { Octokit } from "@octokit/core";
import Link from "next/link";

export default function GetGithubRepo({ repository, topic }) {
  const githubBaseURL = "https://github.com/";

  return (
    <div>
      <div>Author: {repository.owner.login}</div>
      <div>Title: {repository.name}</div>
      <div>Description: {repository.description}</div>
      <div>Stars count: {repository.stargazers_count}</div>
      <div>Top 10 Contributors: {repository.contributors}</div>
      <div>TOPIC: {topic}</div>
      <div>
        <Link
          href={`${githubBaseURL}${repository.owner.login}/${repository.name}`}
        >
          <a target="_blank">START REPOSITORY</a>
        </Link>
      </div>
    </div>
  );
}

export async function getServerSideProps({ query }) {
  const username = query.username;
  const reponame = query.reponame;
  const topic = query.topic;

  const octokit = new Octokit({
    auth: "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",
  });

  const res = await octokit.request("GET /repos/{owner}/{repo}", {
    owner: username,
    repo: reponame,
  });

  const repository = await res.data;

  if (!repository) {
    return {
      notFound: true,
    };
  }

  return {
    props: { repository: repository, topic: topic },
  };
}

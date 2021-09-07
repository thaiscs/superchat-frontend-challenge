import styles from "../styles/RepoInfo.module.css";
import Link from "next/link";

const RepoInfo = ({ repository, contributors, topic }) => {
  const baseURL = "https://github.com/";

  return (
    <div className={`${styles.container} flex flex-col justify-around`}>
      <div className={styles.rows}>
        <div className={styles.leftColumn}>
          <span className="font-bold"> Author</span>
        </div>
        <div>{repository.owner.login}</div>
      </div>
      <div className={styles.rows}>
        <div className={styles.leftColumn}>
          <span className="font-bold">Title</span>
        </div>
        <div>{repository.name}</div>
      </div>
      <div className={styles.rows}>
        <div className={styles.leftColumn}>
          <span className="font-bold">Description</span>
        </div>
        <div>{repository.description}</div>
      </div>
      <div className={styles.rows}>
        <div className={styles.leftColumn}>
          <span className="font-bold">Stars</span>
        </div>
        <div>{repository.stargazers_count}</div>
      </div>
      <div className={styles.rows}>
        <div className={styles.leftColumn}>
          <span className="font-bold">Top 10 Contributors</span>
        </div>
        <div>
          {contributors.map((contributor, index) => {
            if (index < 10) return <div key={index}>{contributor.login}</div>;
          })}
        </div>
      </div>
      <div className={styles.rows}>
        <div className={styles.leftColumn}>
          <span className="font-bold">TOPIC</span>
        </div>
        <div> {topic}</div>
      </div>
      <div className={styles.button}>
        <Link href={`${baseURL}${repository.owner.login}/${repository.name}`}>
          <div>
            <a target="_blank">START REPOSITORY</a>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default RepoInfo;

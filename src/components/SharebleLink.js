export function SharebleLink({
  username,
  reponame,
  invitationText,
  topicSelected,
}) {
  return (
    <div>
      <div>{username}</div>
      <div>{reponame}</div>
      <div>{invitationText}</div>
      <div>{topicSelected}</div>
    </div>
  );
}

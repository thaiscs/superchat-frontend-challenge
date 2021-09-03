export function TopicSelection({ topics, topicSelection, topicSelected }) {
  return (
    <label>
      Select a topic
      <select value={topicSelected} onChange={topicSelection}>
        {topics.map((topic, index) => (
          <option key={index} value={topic}>
            {topic}
          </option>
        ))}
      </select>
    </label>
  );
}

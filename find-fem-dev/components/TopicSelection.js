const TopicSelection = ({ topics, topicSelection, topicSelected }) => {
  return (
    <label className="p-2 mt-2">
      <span className="p-1">Github topics</span>
      <select className="p-1" value={topicSelected} onChange={topicSelection}>
        <option>Topics</option>
        {topics.map((topic, index) => (
          <option key={index} value={topic}>
            {topic}
          </option>
        ))}
      </select>
    </label>
  );
};

export default TopicSelection;

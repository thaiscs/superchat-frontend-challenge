import React, { useState } from "react";
import { SharebleLink } from "./components/SharebleLink";
import { TopicSelection } from "./components/TopicSelection";
import { ColorSelection } from "./components/ColorSelection";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const [reponame, setReponame] = useState("");
  const [invitationText, setInvitationText] = useState("");

  const topics = [
    "womenwhocode",
    "women-in-tech",
    "women-techmakers",
    "diversity-in-tech",
  ];

  const colors = ["blue", "pink", "yellow", "orange"];

  const [topicSelected, setTopic] = useState("");

  const handleTopicSelection = (e) => {
    const topicSelection = e.target.value;
    setTopic(topicSelection);
  };

  const [colorSelected, setcolor] = useState("");

  const handlecolorSelection = (e) => {
    const colorSelection = e.target.value;
    setcolor(colorSelection);
  };

  // onSubmit={handleSubmit}
  return (
    <div className="App">
      <main className="App-header">
        <form>
          <input
            type="text"
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="text"
            placeholder="reponame"
            onChange={(e) => setReponame(e.target.value)}
          />
          <textarea
            type="text"
            placeholder="invitation to contribute"
            onChange={(e) => setInvitationText(e.target.value)}
          />
          <TopicSelection
            topics={topics}
            topicSelection={handleTopicSelection}
            topicSelected={topicSelected}
          />
          <ColorSelection
            colors={colors}
            colorSelection={handlecolorSelection}
            colorSelected={colorSelected}
          />
        </form>
        <SharebleLink
          username={username}
          reponame={reponame}
          invitationText={invitationText}
          topicSelected={topicSelected}
        />
      </main>
    </div>
  );
}

export default App;

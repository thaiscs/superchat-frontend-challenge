import React, { useState } from "react";
import { CardPreview } from "./components/CardPreview";
import { TopicSelection } from "./components/TopicSelection";
import { ColorSelection } from "./components/ColorSelection";
import { ReactComponent as GithubIcon } from "./assets/github.svg";
import heartplus from "./assets/heartplus.png";
import "./index.css";
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
    <div className="app">
      <div className="app-header">
        <form>
          <div className="flex flex-wrap justify-center">
            <div className="flex items-center">
              <div className="p-1">
                <GithubIcon />
              </div>
              <div className="p-1">
                <input
                  className="p-1"
                  type="text"
                  placeholder="username"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="p-1">
                <input
                  className="p-1"
                  type="text"
                  placeholder="reponame"
                  onChange={(e) => setReponame(e.target.value)}
                />
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-col text-left items-start">
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
                <label className="p-2 mt-2">
                  <div>
                    <img
                      className="inline"
                      src={heartplus}
                      alt="heartplus icon"
                    />
                    <span className="p-1">Get people involved!</span>
                  </div>
                  <div className="p-1">
                    <textarea
                      className="p-3 mt-2"
                      type="text"
                      placeholder="invitation to contribute"
                      onChange={(e) => setInvitationText(e.target.value)}
                    />
                  </div>
                </label>
              </div>
              <CardPreview
                username={username}
                reponame={reponame}
                invitationText={invitationText}
                topicSelected={topicSelected}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;

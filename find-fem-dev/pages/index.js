import React, { useState } from "react";
import CardPreview from "../components/CardPreview";
import TopicSelection from "../components/TopicSelection";
import ColorSelection from "../components/ColorSelection";
import Image from "next/image";
import githubicon from "../public/assets/github.svg";
import heartplus from "../public/assets/heartplus.png";
import ShareableLink from "../components/ShareableLink";

const App = () => {
  const [username, setUsername] = useState("");
  const [reponame, setReponame] = useState("");
  const [invitationText, setInvitationText] = useState("");

  const topics = [
    "womenwhocode",
    "women-in-tech",
    "women-techmakers",
    "diversity-in-tech",
  ];

  const colors = [
    { name: "blue", cssClass: "bg-blue-400" },
    { name: "pink", cssClass: "bg-pink-400" },
    { name: "yellow", cssClass: "bg-yellow-400" },
    { name: "green", cssClass: "bg-green-400" },
  ];

  const [topicSelected, setTopic] = useState("");

  const handleTopicSelection = (e) => {
    const topicSelection = e.target.value;
    setTopic(topicSelection);
  };

  const [colorSelected, setcolor] = useState("");
  const [currentColor, setBackground] = useState("bg-black");

  const handleColorSelection = (e) => {
    setcolor(e.target.value);
    colors.forEach((color) => {
      if (color.name === e.target.value) {
        setBackground(color.cssClass);
      }
    });
  };

  return (
    <div className="app">
      <div className="app-header">
        <form>
          <div className="flex flex-wrap justify-center">
            <div className="flex items-center">
              <div className="p-1">
                <Image src={githubicon} alt="github icon" />
              </div>
              <div className="p-1">
                <input
                  className="p-1"
                  type="text"
                  placeholder="username"
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
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
              <div className="flex flex-col text-left items-start mr-4">
                <TopicSelection
                  topics={topics}
                  topicSelection={handleTopicSelection}
                  topicSelected={topicSelected}
                />
                <ColorSelection
                  colors={colors}
                  colorSelection={handleColorSelection}
                  colorSelected={colorSelected}
                />
                <label className="p-2 mt-2">
                  <div>
                    <Image
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
                currentColor={currentColor}
              />
            </div>
            <ShareableLink
              username={username}
              reponame={reponame}
              topic={topicSelected}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default App;

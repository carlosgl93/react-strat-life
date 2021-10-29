import React from "react";
import { useHistory } from "react-router-dom";
import Container from "react-bootstrap/Container";

import QuestList from "../components/quests/QuestList";
import CreateQuestCard from "../components/ui/CreateQuestCard";

const Quests = () => {
  const history = useHistory();

  let quests = [];

  const handleNewQuest = (questData) => {
    console.log(questData);

    fetch("https://strat-life-default-rtdb.firebaseio.com/quests.json", {
      method: "POST",
      body: JSON.stringify(questData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      history.replace("/quests");
    });
  };

  return (
    <Container fluid>
      <div className="top text-center">
        <h2>Quest Tracker</h2>
        <p className="description">By doing quests you will earn attributes.</p>
      </div>
      <CreateQuestCard onNewQuest={handleNewQuest} />
      <div className="quests">
        {quests.length > 0 ? (
          <QuestList quests={quests} />
        ) : (
          <Container className="mt-4 center-text">
            <strong>No quests yet! Come on, lets have a meaningful day</strong>
          </Container>
        )}
      </div>
    </Container>
  );
};

export default Quests;

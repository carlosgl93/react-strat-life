import React, { useState } from "react";
import Container from "react-bootstrap/Container";

import QuestList from "../components/quests/QuestList";
import CreateQuestCard from "../components/ui/CreateQuestCard";

const dummy_quests = [
  {
    id: "q1",
    title: "Slay the dragon",
    priority: "1",
    rewards: {
      emotional: 1,
      financial: 0,
      social: 0,
      spiritual: 1,
      occupational: 0,
      physical: 0,
      intellectual: 0,
    },
  },
  {
    id: "q2",
    title: "Tilt the existence towards heaven rather than hell",
    priority: "1",
    rewards: {
      emotional: 1,
      financial: 0,
      social: 1,
      spiritual: 1,
      occupational: 0,
      physical: 0,
      intellectual: 0,
    },
  },
  {
    id: "q3",
    title: "Plan tomorrow to be a meaningful, guilt-free day",
    priority: "2",
    rewards: {
      emotional: 0,
      financial: 0,
      social: 0,
      spiritual: 0,
      occupational: 1,
      physical: 0,
      intellectual: 1,
    },
  },
];

const Quests = () => {
  return (
    <Container fluid>
      <div className="top text-center">
        <h2>Quest Tracker</h2>
        <p className="description">By doing quests you will earn attributes.</p>
      </div>
      <CreateQuestCard />
      <div className="quests">
        <QuestList quests={dummy_quests} />
      </div>
    </Container>
  );
};

export default Quests;

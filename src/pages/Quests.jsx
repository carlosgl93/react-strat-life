import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Container from "react-bootstrap/Container";

import QuestList from "../components/quests/QuestList";
import CreateQuestCard from "../components/ui/CreateQuestCard";

const Quests = () => {
  const [fetching, setFetching] = useState(true);
  const [loadedQuests, setLoadedQuests] = useState([]);
  const [newQuest, setNewQuest] = useState(false);

  const history = useHistory();

  const fetchAllUserQuests = () => {
    fetch("https://strat-life-default-rtdb.firebaseio.com/quests.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const quests = [];
        // for loop to iterate through the quests returned from the data object
        // key is the id of each quest
        for (const key in data) {
          const quest = {
            id: key,
            ...data[key],
          };
          quests.push(quest);
        }
        setLoadedQuests(quests);
        setFetching(false);
        console.log(loadedQuests);
      });
  };

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
    setNewQuest(true);
  };

  useEffect(() => {
    setFetching(true);
    fetchAllUserQuests();
  }, [newQuest]);

  if (fetching === true) {
    return (
      <Container fluid className="center-text">
        <h6>Loading your quests</h6>
      </Container>
    );
  } else {
    return (
      <Container fluid>
        <div className="top text-center">
          <h2>Quest Tracker</h2>
          <p className="description">
            By doing quests you will earn attributes.
          </p>
        </div>
        <CreateQuestCard onNewQuest={handleNewQuest} />
        <div className="quests">
          {loadedQuests.length > 0 ? (
            <QuestList quests={loadedQuests} />
          ) : (
            <Container className="mt-4 center-text">
              <strong>
                No quests yet! Come on, lets have a meaningful day
              </strong>
            </Container>
          )}
        </div>
      </Container>
    );
  }
};

export default Quests;

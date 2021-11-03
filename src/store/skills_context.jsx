import { createContext, useState } from "react";
import context from "react-bootstrap/esm/AccordionContext";

const SkillsContenxt = createContext({
  emotional: {},
  financial: {},
  spiritual: {},
  social: {},
  occupational: {},
  physical: {},
  intellectual: {},
  environmental: {},
  totalQuests: 0,
});

const SkillsContextProvider = (props) => {
  const [userPhysical, setUserPhyisical] = useState({});
  const [userEmotional, setUserEmotional] = useState({});
  const [userFinancial, setUserFinancial] = useState({});
  const [userSpiritual, setUserSpiritual] = useState({});
  const [userSocial, setUserSocial] = useState({});
  const [userOccupational, setUserOccupational] = useState({});
  const [userIntellectual, setUserIntellectual] = useState({});
  const [userEnvironmental, setUserEnvironmental] = useState({});

  const addSkillHandler = (skill) => {
    switch (skill) {
      case physical:
        setUserPhyisical(...userPhysical, skill);
        break;

      default:
        break;
    }
  };

  const context = {
    physical: userPhysical,
    emotional: userEmotional,
    financial: userFinancial,
    spiritual: userSpiritual,
    social: userSocial,
    occupational: userOccupational,
    intellectual: userIntellectual,
    environmental: userEnvironmental,
    total: context.length,
  };

  return (
    <SkillsContenxt.Provider value={context}>
      {props.children}
    </SkillsContenxt.Provider>
  );
};

export default SkillsContextProvider;

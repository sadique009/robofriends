import React from "react";
import Card from "./Card";
// import {robots} from "./Robots";

const Cardlist = ({ robot }) => {
  const cardsArray = robot.map((user, i) => {
    return (
      <Card id={robot[i].id} name={robot[i].name} email={robot[i].email} />
    );
  });
  return <div>{cardsArray}</div>;
};

export default Cardlist;

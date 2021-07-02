import React from "react";

import Card from "../card/card.component";

import "./card-list-style.css";

const CardList = (props) => {
  console.log(props.monsters);
  return (
    <div className="card-list">
      {props.monsters.map((monster) => {
        return <Card monster={monster} key={monster.id}></Card>;
      })}
    </div>
  );
};

export default CardList;

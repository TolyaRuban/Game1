import React from 'react';

const RED = "red";
const BLUE = "blue";
const GREEN = "green";
const ORANGE = "orange";

function Item(props) {
  const { i, j, content, onClick } = props;
  if (content === 1) {
    return (
      <div i={i} j={j} className={"game__item " + RED}
        onClick={() => onClick(i, j)}
      >{content}</div>
    )
  } else if (content === 2){
    return (
      <div i={i} j={j} className={"game__item " + BLUE}
        onClick={() => onClick(i, j)}
      >{content}</div>
    )
  } else if (content === 3){
    return (
      <div i={i} j={j} className={"game__item " + GREEN}
        onClick={() => onClick(i, j)}
      >{content}</div>
    )
  } else if (content === 4){
    return (
      <div i={i} j={j} className={"game__item " + ORANGE}
        onClick={() => onClick(i, j)}
      >{content}</div>
    )
  } else {
    return (
      <div i={i} j={j} className={"game__item "}
        onClick={() => onClick(i, j)}
      >{content}</div>
    )
  }

  /* return (
    <div className={"game__item " + content}>{content}</div>
  ) */
}

export default Item;
import { useState } from "react";
import Card from "../Card/index";

function CardGrid() {
  const [cards, setCards] = useState(
    [
      { id: 1, img: "/src/img/fileName", stat: "" },
      { id: 1, img: "/src/img/fileName", stat: "" },
      { id: 2, img: "/src/img/fileName", stat: "" },
      { id: 2, img: "/src/img/fileName", stat: "" },
      { id: 3, img: "/src/img/fileName", stat: "" },
      { id: 3, img: "/src/img/fileName", stat: "" },
      { id: 4, img: "/src/img/fileName", stat: "" },
      { id: 4, img: "/src/img/fileName", stat: "" },
      { id: 5, img: "/src/img/fileName", stat: "" },
      { id: 5, img: "/src/img/fileName", stat: "" },
      { id: 6, img: "/src/img/fileName", stat: "" },
      { id: 6, img: "/src/img/fileName", stat: "" },
      { id: 7, img: "/src/img/fileName", stat: "" },
      { id: 7, img: "/src/img/fileName", stat: "" },
      { id: 8, img: "/src/img/fileName", stat: "" },
      { id: 8, img: "/src/img/fileName", stat: "" },
      // { id: 9, img: '/src/img/fileName', stat: "" },
      // { id: 9, img: '/src/img/fileName', stat: "" },
      // { id: 10, img: '/src/img/fileName', stat: "" },
      // { id: 10, img: '/src/img/fileName', stat: "" },
    ].sort(() => Math.random() - 0.5)
  );

  const [prevSelection, setPrevSelection] = useState(-1);

  function check(current) {
    if (cards[current].id == cards[prevSelection].id) {
      cards[current].stat = "correct";
      cards[prevSelection].stat = "correct";
      setCards([...cards]);
      setPrevSelection(-1);
    } else {
      cards[current].stat = "wrong";
      cards[prevSelection].stat = "wrong";
      setCards([...cards]);
      setTimeout(() => {
        cards[current].stat = "";
        cards[prevSelection].stat = "";
        setCards([...cards]);
        setPrevSelection(-1);
      }, 1000);
    }
  }

  function handleClick(id) {
    if (prevSelection === -1) {
      cards[id].stat = "active";
      setCards([...cards]);
      setPrevSelection(id);
    } else {
      check(id);
    }
  }

  return (
    <div className="container">
      {cards.map((card, index) => (
        <Card key={index} card={card} id={index} handleClick={handleClick} />
      ))}
    </div>
  );
}
export default CardGrid;

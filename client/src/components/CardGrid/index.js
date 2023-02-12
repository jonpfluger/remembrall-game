import { useState } from "react";
import Card from "../Card/index";

function CardGrid() {
  const [cards, setCards] = useState(
    [
      { id: 1, img: "/img/HP Cards-1.png", stat: "" },
      { id: 1, img: "/img/HP Cards-1.png", stat: "" },
      { id: 2, img: "/img/HP Cards-2.png", stat: "" },
      { id: 2, img: "/img/HP Cards-2.png", stat: "" },
      { id: 3, img: "/img/HP Cards-3.png", stat: "" },
      { id: 3, img: "/img/HP Cards-3.png", stat: "" },
      { id: 4, img: "/img/HP Cards-4.png", stat: "" },
      { id: 4, img: "/img/HP Cards-4.png", stat: "" },
      { id: 5, img: "/img/HP Cards-5.png", stat: "" },
      { id: 5, img: "/img/HP Cards-5.png", stat: "" },
      { id: 6, img: "/img/HP Cards-6.png", stat: "" },
      { id: 6, img: "/img/HP Cards-6.png", stat: "" },
      { id: 7, img: "/img/HP Cards-7.png", stat: "" },
      { id: 7, img: "/img/HP Cards-7.png", stat: "" },
      { id: 8, img: "/img/HP Cards-8.png", stat: "" },
      { id: 8, img: "/img/HP Cards-8.png", stat: "" },
      { id: 9, img: "/img/HP Cards-9.png", stat: "" },
      { id: 9, img: "/img/HP Cards-9.png", stat: "" },
      { id: 10, img: "/img/HP Cards-10.png", stat: "" },
      { id: 10, img: "/img/HP Cards-10.png", stat: "" },
      { id: 11, img: "/img/HP Cards-11.png", stat: "" },
      { id: 11, img: "/img/HP Cards-11.png", stat: "" },
      { id: 12, img: "/img/HP Cards-12.png", stat: "" },
      { id: 12, img: "/img/HP Cards-12.png", stat: "" },
      { id: 13, img: "/img/HP Cards-13.png", stat: "" },
      { id: 13, img: "/img/HP Cards-13.png", stat: "" },
      { id: 14, img: "/img/HP Cards-14.png", stat: "" },
      { id: 14, img: "/img/HP Cards-14.png", stat: "" },
      { id: 15, img: "/img/HP Cards-15.png", stat: "" },
      { id: 15, img: "/img/HP Cards-15.png", stat: "" },
      { id: 16, img: "/img/HP Cards-16.png", stat: "" },
      { id: 16, img: "/img/HP Cards-16.png", stat: "" },
      { id: 17, img: "/img/HP Cards-17.png", stat: "" },
      { id: 17, img: "/img/HP Cards-17.png", stat: "" },
      { id: 18, img: "/img/HP Cards-18.png", stat: "" },
      { id: 18, img: "/img/HP Cards-18.png", stat: "" },
      { id: 19, img: "/img/HP Cards-19.png", stat: "" },
      { id: 19, img: "/img/HP Cards-19.png", stat: "" },
      { id: 20, img: "/img/HP Cards-20.png", stat: "" },
      { id: 20, img: "/img/HP Cards-20.png", stat: "" },
      { id: 21, img: "/img/HP Cards-21.png", stat: "" },
      { id: 21, img: "/img/HP Cards-21.png", stat: "" },
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

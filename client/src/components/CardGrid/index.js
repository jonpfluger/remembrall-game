import { useEffect, useState } from "react";

import Card from "../Card/index";
import "../CardGrid/card.css";
import card1 from "../../img/HP Cards-1.png";
import card2 from "../../img/HP Cards-2.png";
import card3 from "../../img/HP Cards-3.png";
import card4 from "../../img/HP Cards-4.png";
import card5 from "../../img/HP Cards-5.png";
import card6 from "../../img/HP Cards-6.png";
import card7 from "../../img/HP Cards-7.png";
import card8 from "../../img/HP Cards-8.png";
import card9 from "../../img/HP Cards-9.png";
import card10 from "../../img/HP Cards-10.png";
import card11 from "../../img/HP Cards-11.png";
import card12 from "../../img/HP Cards-12.png";
import card13 from "../../img/HP Cards-13.png";
import card14 from "../../img/HP Cards-14.png";
import card15 from "../../img/HP Cards-15.png";
import card16 from "../../img/HP Cards-16.png";
import card17 from "../../img/HP Cards-17.png";
import card18 from "../../img/HP Cards-18.png";
import card19 from "../../img/HP Cards-19.png";
import card20 from "../../img/HP Cards-20.png";
import card21 from "../../img/HP Face Cards-21.png";
import card22 from "../../img/HP Face Cards-22.png";
import card23 from "../../img/HP Face Cards-23.png";
import card24 from "../../img/HP Face Cards-24.png";
import card25 from "../../img/HP Face Cards-25.png";
import card26 from "../../img/HP Face Cards-26.png";
import card27 from "../../img/HP Face Cards-27.png";
import card28 from "../../img/HP Face Cards-28.png";
import card29 from "../../img/HP Face Cards-30.png";


function CardGrid() {
  const allCards = [
    { id: 1, img: card1, stat: "" },
    { id: 2, img: card2, stat: "" },
    { id: 3, img: card3, stat: "" },
    { id: 4, img: card4, stat: "" },
    { id: 5, img: card5, stat: "" },
    { id: 6, img: card6, stat: "" },
    { id: 7, img: card7, stat: "" },
    { id: 8, img: card8, stat: "" },
    { id: 9, img: card9, stat: "" },
    { id: 10, img: card10, stat: "" },
    { id: 11, img: card11, stat: "" },
    { id: 12, img: card12, stat: "" },
    { id: 13, img: card13, stat: "" },
    { id: 14, img: card14, stat: "" },
    { id: 15, img: card15, stat: "" },
    { id: 16, img: card16, stat: "" },
    { id: 17, img: card17, stat: "" },
    { id: 18, img: card18, stat: "" },
    { id: 19, img: card19, stat: "" },
    { id: 20, img: card20, stat: "" },
    { id: 21, img: card21, stat: "" },
    { id: 22, img: card22, stat: "" },
    { id: 23, img: card23, stat: "" },
    { id: 24, img: card24, stat: "" },
    { id: 25, img: card25, stat: "" },
    { id: 26, img: card26, stat: "" },
    { id: 27, img: card27, stat: "" },
    { id: 28, img: card28, stat: "" },
    { id: 29, img: card29, stat: "" },
  ]

  const [cards, setCards] = useState(allCards);
  const [openedCards, setOpenedCards] = useState(0)
  const [prevSelection, setPrevSelection] = useState(-1);
  
  // const isClickable = true;
  // function cardClicked(elCard) {
  //   if (!isClickable) return;
  //   isClickable = false;
  //   setTimeout(function () {
  //     isClickable = true;
  //   }, 500)
  
  
  function check(current) {
    
    if (cards[current].id === cards[prevSelection].id) {
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
    console.log(openedCards)
    if (openedCards === 2) {
      setTimeout(function(){
      setOpenedCards(0)
      }, 500)
      return
    }
    
    setOpenedCards(openedCards +1)
    if (prevSelection === -1) {
      cards[id].stat = "active";
      setCards([...cards]);
      setPrevSelection(id);
      
      
      


    } else {
      check(id);
    }
  }

  function newGame() {
    const newCards = []
  
    while (newCards.length < 16) {
      let newCard = allCards[Math.floor(Math.random() * allCards.length)]
      if (!newCards.includes(newCard)) {
        console.log(newCard)
        newCards.push(newCard)
        newCards.push(newCard)
      }
    }
    newCards.sort(() => Math.random() - 0.5)
    console.log(newCards)
    setCards(newCards)
  }
  
  const [seconds, setSeconds] = useState(0);
  const [isActive, setActive] = useState(false);
  const [game, setGame] = useState(false);

  useEffect(() => {
    let timer = null;
    if (isActive) {
      timer = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
    }
    return () => {
      clearInterval(timer);
    };
  });
  
  return (
    <>
      <div className="row text-center">
        <div className="col-lg-6 mb-4">
          <button
            onClick={() => {
              setActive(true);
              setGame(true);
              newGame()
            }}
            className="btn btn-primary"
          >
            New Game
          </button>
          <p className="text-white pt-3"> Seconds: {seconds}</p>
        </div>
      </div>

      <div className="container">
        {game
          ? cards.map((card, index) => (
              <Card
                key={index}
                card={card}
                id={index}
                handleClick={handleClick}
              />
            ))
          : null}
      </div>
    </>
  );
}
export default CardGrid

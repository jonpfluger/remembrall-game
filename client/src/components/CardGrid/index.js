import { useEffect, useState } from "react";
import { useQuery, useMutation } from "@apollo/client";

import Auth from "../../utils/auth";
import { QUERY_ME } from "../../utils/queries";
import { UPDATE_SCORE, ADD_SPELL, REMOVE_SPELL } from "../../utils/mutations";

import Particle from "../Particle/Particle";

import SpellData from "../SpellData";
import SpellList from "../SpellList";
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
import card30 from "../../img/HP Face Cards next 10-1.png";
import card31 from "../../img/HP Face Cards next 10-2.png";
import card32 from "../../img/HP Face Cards next 10-3.png";
import card33 from "../../img/HP Face Cards next 10-4.png";
import card34 from "../../img/HP Face Cards next 10-5.png";
import card35 from "../../img/HP Face Cards next 10-6.png";
import card36 from "../../img/HP Face Cards next 10-7.png";
import card37 from "../../img/HP Face Cards next 10-8.png";
import card38 from "../../img/HP Face Cards next 10-9.png";
import card39 from "../../img/HP Face Cards next 10-10.png";

function CardGrid({ seconds, setSeconds, setActive, intervalId }) {
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
    { id: 30, img: card30, stat: "" },
    { id: 31, img: card31, stat: "" },
    { id: 32, img: card32, stat: "" },
    { id: 33, img: card33, stat: "" },
    { id: 34, img: card34, stat: "" },
    { id: 35, img: card35, stat: "" },
    { id: 36, img: card36, stat: "" },
    { id: 37, img: card37, stat: "" },
    { id: 38, img: card38, stat: "" },
    { id: 39, img: card39, stat: "" },
  ];

  const [cards, setCards] = useState(allCards);
  const [openedCards, setOpenedCards] = useState(0);
  const [prevSelection, setPrevSelection] = useState(-1);
  const [showModal, setShowModal] = useState(false);
  const [matches, setMatches] = useState(0);
  const [matchResult, setMatchResult] = useState(null)
  const [unmatchedCards, setUnmatchedCards] = useState(cards);

  const { loading, data } = useQuery(QUERY_ME);
  const wizard = data?.me || {};

  const accio = SpellData[0];
  const revelio = SpellData[1];

  const [updateScore] = useMutation(UPDATE_SCORE);
  const [addSpell] = useMutation(ADD_SPELL);

  function check(current) {
    if (
      cards[current].id === cards[prevSelection].id &&
      current !== prevSelection
    ) {
      cards[current].stat = "correct";
      cards[prevSelection].stat = "correct";
      setCards([...cards]);
      setPrevSelection(-1);
      setMatchResult("correct")
      let newCardArray = cards.filter(card => {if (card.stat !== "correct"){return card}})
      console.log(newCardArray)
      setUnmatchedCards(newCardArray)

      const match = matches + 1;
      setMatches(match);
    } else {
      cards[current].stat = "wrong";
      cards[prevSelection].stat = "wrong";
      setCards([...cards]);
      setMatchResult("wrong")
      setSeconds(seconds + 1);

      setTimeout(() => {
        cards[current].stat = "";
        cards[prevSelection].stat = "";
        setCards([...cards]);
        setPrevSelection(-1);
        // setMatchResult(false)
      }, 800);
      
    }
  }

  function handleClick(index) {
    if (openedCards === 2) {
      setTimeout(function () {
        setOpenedCards(0);
      }, 500);

      return;
    }

    setOpenedCards(openedCards + 1);

    if (prevSelection === -1) {
      cards[index].stat = "active";
      setCards([...cards]);
      setPrevSelection(index);
    } else {
      check(index);
    }
  }

  function checkAuth() {
    console.log(Auth.loggedIn());
    Auth.loggedIn() ? newGame() : window.location.replace("/login");
  }

  function addingSpell(wizardId) {
    addSpell({
      variables: {
        wizardId,
        name: revelio.name,
      },
    });
  }

  function newGame() {
    setActive(true);
    setGame(true);
    setMatches(0);
    setMatchResult(null)
    const newCards = [];

    while (newCards.length < 16) {
      let newCard = allCards[Math.floor(Math.random() * allCards.length)];
      if (!newCards.includes(newCard)) {
        console.log(newCard);
        newCards.push(newCard);
        newCards.push({ ...newCard });
      }
    }
    newCards.sort(() => Math.random() - 0.5);
    console.log(newCards);
    setCards(newCards);
    setUnmatchedCards(newCards)
  }

  function usingSpell() {
    console.log(unmatchedCards)
    let randomCard = unmatchedCards[Math.floor(Math.random() * unmatchedCards.length)]
    console.log(randomCard)
    randomCard.stat = "correct"
    for (let i = 0; i < cards.length; i++) {
      if (randomCard.id === cards[i].id && cards[i].stat !== "correct") {
        cards[i].stat = "correct"
      }
    }
    const match = matches + 1;
    setMatches(match);
  }

  const [game, setGame] = useState(false);

  useEffect(() => {
    if (matches === 8) {
      //clearInterval(intervalId);
      setActive(false);
      if (wizard.score > seconds || wizard.score == null) {
        updateScore({
          variables: {
            wizardId: wizard._id,
            score: seconds,
          },
        });
      }

      setTimeout(function () {
        window.location.replace("/leaderboard");
      }, 2000);
    }
  });

  return (
    <>
    {!!matchResult && <Particle matchResult={matchResult}/>}
      <div className="row text-center justify-content-center">
        <div className="col-lg-6 mb-4">
          <button
            onClick={() => {
              checkAuth();
              setSeconds(0);
              addingSpell(wizard._id);
            }}
            className="btn btn-primary"
          >
            New Game
          </button>
          <p className="text-white pt-3"> Seconds: {seconds}</p>
          {game ? <SpellList wizard={wizard} usingSpell={usingSpell} /> : null}
        </div>
      </div>
      <div className="container">
        {game
          ? cards.map((card, index) => (
            <Card
            key={index}
            card={card}
            index={index}
            handleClick={handleClick}
            />
            ))
            : null}
            
      </div>
    </>
  );
}

export default CardGrid;

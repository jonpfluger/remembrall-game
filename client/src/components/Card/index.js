import Particle from "../Particle/Particle";

function Card({ card, index, handleClick }) {
  const cardClass = card.stat ? " active " + card.stat : " inactive ";

  return (
    <div className={"gridCard" + cardClass} onClick={() => handleClick(index)}>
      <img src={card.img} alt={card.id} />
    </div>
  );
}
export default Card;

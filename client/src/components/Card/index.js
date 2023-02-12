function Card({ card, id, handleClick }) {
  const cardClass = card.stat ? " active " + card.stat : "";

  return (
    <div className={"card" + cardClass} onClick={() => handleClick(id)}>
      <img src={card.img} alt={card.id} />
    </div>
  );
}
export default Card;

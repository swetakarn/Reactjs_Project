import React from "react";
import "./card.css";

const Card = ({ user, index }) => {
  const cardClass = index % 2 === 0 ? 'cardeven' : 'cardodd';

  return (
    <>
      <div>
        <div className={cardClass}>
          <div className="colorText">
            {/* <div className="card-text">UserId:{user.userId}</div>
            <div className="card-text">id:{user.id}</div> */}
            <div className="cardTitle mt-3 mb-3 bolder">{user.title}</div>
            <div className="cardSubtitle mb-2">{user.body}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;

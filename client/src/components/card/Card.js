import React from "react";
import "./card.css";

const Card = ({ img, name, info, role, ig, twt, li }) => {
  return (
    <div className="card-box">
      <img src={`./images/${img}`} height="250px" width="250px" alt={name} />
      <div className="card-name">{name}</div>
      <div className="card-info">{info}</div>
      <div className="card-role">Worked on {role} </div>
      <br />
      <div className="card-icons">
        {ig && (
          <>
            <img
              className="card-icon"
              src={`./images/${ig}`}
              width="20px"
              height="20px"
            />
          </>
        )}
        {twt && (
          <>
            <img
              className="card-icon"
              src={`./images/${twt}`}
              width="20px"
              height="20px"
            />
          </>
        )}
        {li && (
          <>
            <img
              className="card-icon"
              src={`./images/${li}`}
              width="20px"
              height="20px"
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Card;

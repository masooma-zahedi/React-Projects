import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Question = ({ title, info }) => {
  const [showAnswer, setShowAnswer] = useState(false)
  return (
    <>
      <div className="border mb-3 shadow p-3 bg-light rounded">
        <div className="d-flex justify-content-between ">
          <h6>{title}</h6>
          <button
            onClick={() => {
              setShowAnswer(!showAnswer);
            }}
            className="btn rounded-circle "
            style={{backgroundColor:"#eee", outline:"none"}}
          >
            {showAnswer ? <AiOutlineMinus /> : <AiOutlinePlus />}
          </button>
        </div>
        {showAnswer && <div className="p-2 h6">{info}</div>}
      </div>
    </>
  );
};

export default Question;

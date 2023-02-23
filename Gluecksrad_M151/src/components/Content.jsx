import React, { useState} from "react";


import { AiFillHeart } from "react-icons/ai"

const Content = () => {
  const [randomNumber, setRandomNumber] = useState(null);
  const [lastRandomNumber, setLastRandomNumber] = useState(null);

  function getRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 11) * 10;
    return randomNumber;
  }
  
  function handleSpinClick() {
    const possibleMoney = getRandomNumber();
    setRandomNumber(possibleMoney === 0 ? 'dead' : possibleMoney);
    setLastRandomNumber(randomNumber);
  }

  return (
    <div className="w-full h-screen pt-[90px]">
      <div className="pt-5">
        <div className="flex">
          <AiFillHeart />
          <AiFillHeart />
          <AiFillHeart className="" />
        </div>
        <h1>Hello</h1>
        <div className="stats shadow bg-neutral">
          <div className="stat">
            <div className="stat-title">Prize</div>
            <div className="stat-value">Money: {randomNumber}</div>
            <div className="stat-desc">last spin {lastRandomNumber}</div>
          </div>
        </div>
        <button onClick={handleSpinClick} className="btn btn-primary">spin wheel</button>
        <button className="btn btn-primary">Vokal kaufen</button>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Gebe Konsonant an</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <button className="btn btn-primary">enter Konsonant</button>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Gebe Wort an</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <p>Ergebnis beim Drehen: </p>
      </div>
    </div>
  );
};

export default Content;

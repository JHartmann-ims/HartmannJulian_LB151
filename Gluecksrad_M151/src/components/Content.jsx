import { collection, query } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import {db} from "./firebase";


import { AiFillHeart } from "react-icons/ai"

const Content = () => {
  const [randomNumber, setRandomNumber] = useState(null);
  const [lastRandomNumber, setLastRandomNumber] = useState('...');

  useEffect(() => {
    const q = query(collection(db, "todos"))
  }, [])

  const word = "Hallo";
  const fields = [];

  for (let i = 0; i < word.length; i++) {
    fields.push(
      <div className="w-10 h-10 bg-neutral flex justify-center items-center rounded-md mx-1" key={i}>
        <div className="w-4 h-4 border-b-2 border-primary flex justify-center items-center">
          <h1>{word.charAt(i).toUpperCase()}</h1>
        </div>
      </div>

    )
  }


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
        <div className="flex">
          {fields}
        </div>
        <h1>Hello</h1>
        <div className="stats shadow bg-neutral">
          <div className="stat">
            <div className="stat-title">Prize</div>
            <div className="stat-value">{randomNumber}</div>
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

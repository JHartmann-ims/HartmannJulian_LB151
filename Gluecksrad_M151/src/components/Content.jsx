import React from "react";
import shoes from "../assets/shoes.jpg";

import { AiFillHeart } from "react-icons/ai"

const Content = () => {
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
            <div className="stat-value">500</div>
            <div className="stat-desc">last spin 200</div>
          </div>
        </div>
        <button className="btn btn-primary">spin wheel</button>
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
